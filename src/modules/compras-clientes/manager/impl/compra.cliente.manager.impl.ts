import { ClienteManagerImpl } from "@commons/manager/impl/cliente.manager.impl";
import { ClienteIdentificacionDTO } from "@commons/models/dto/cliente.identificacion.dto";
import { IdentificacionDTO } from "@commons/models/dto/identificacion.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { CompraDaoImpl } from "@compras.clientes/dao/impl/compra.dao.impl";
import { CompraDetalleDaoimpl } from "@compras.clientes/dao/impl/compra.detalle.dao.impl";
import { CompraPagoDaoImpl } from "@compras.clientes/dao/impl/compra.pago.dao.impl";
import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraClienteOutDTO } from "@compras.clientes/models/dto/compra.cliente.out.dto";
import { PagoClienteDTO } from "@compras.clientes/models/dto/pago.cliente.dto";
import { ProductoCompraDTO } from "@compras.clientes/models/dto/producto.compra.dto";
import { ResumenComprasInDTO } from "@compras.clientes/models/dto/resumen.compras.in.dto";
import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";
import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";
import { Injectable } from "@nestjs/common";
import { ProductoManagerImpl } from "@productos/manager/impl/producto.manager.impl";
import { DetalleProductoOutDTO } from "@productos/models/dto/detalle.producto.out.dto";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { MagicNumber } from "@utils/constantes";
import { CompraClienteManager } from "../compra.cliente.manager";

@Injectable()
export class CompraClienteManagerImpl implements CompraClienteManager {
    constructor(
        private compraDao: CompraDaoImpl,
        private compraDetalleDao: CompraDetalleDaoimpl,
        private compraPagoDao: CompraPagoDaoImpl,
        private clienteManager: ClienteManagerImpl,
        private productoManager: ProductoManagerImpl,
    ) { }

    async registrarCompraCliente(compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        // Consultamos al cliente
        const cliente = await this.clienteManager.findByIdentificacion(compraCliente.cliente.idTipoDocumento, compraCliente.cliente.numeroDocumento);
        let compraEntity = new CompraEntity();
        compraEntity.fechaCompra = new Date();
        compraEntity.idEmpleado = MagicNumber.UNO;
        compraEntity.idCliente = cliente.idCliente;
        compraEntity.valorTotal = compraCliente.productos
            .map(producto => producto.valorTotal)
            .reduce((total, valor) => total + valor, 0);
        compraEntity = await this.compraDao.insert(compraEntity);

        compraCliente.productos.forEach(async producto => {
            const compraDetalleEntity = new CompraDetalleEntity();
            compraDetalleEntity.idCompra = compraEntity.idCompra;
            compraDetalleEntity.cantidad = producto.cantidad;
            compraDetalleEntity.idProducto = producto.idProducto;
            compraDetalleEntity.valorTotal = producto.valorTotal;
            await this.compraDetalleDao.insert(compraDetalleEntity);
            await this.productoManager.updateStockProductoVendido(producto.idProducto, producto.cantidad);
        });

        compraCliente.pagos.forEach(async pago => {
            const compraPago = new CompraPagoEntity();
            compraPago.idCompra = compraEntity.idCompra;
            compraPago.idTipoFormaPago = pago.idTipoFormaPago;
            compraPago.numeroComprobante = pago.numeroComprobante;
            compraPago.valor = pago.valor;
            await this.compraPagoDao.insert(compraPago);
        });

        return compraCliente;
    }

    async eliminarCompraByIdCompra(idCompra: number): Promise<number> {
        // Eliminamos el detalle
        try {
            let listaDetalles: Array<CompraDetalleEntity> = await this.compraDetalleDao.findByIdCompra(idCompra);
            await this.compraDetalleDao.delete(listaDetalles.map(detalles => detalles.idCompraDetalle));
        } catch (e) { }

        // Buscamos las compra pagos y los eliminamos
        try {
            let listaCompraPagos: Array<CompraPagoEntity> = await this.compraPagoDao.findByIdCompra(idCompra);
            await this.compraPagoDao.delete(listaCompraPagos.map(pago => pago.idCompraPago));
        } catch (e) { }

        // Por último eliminamos la compra.
        await this.compraDao.delete(idCompra);

        return idCompra;
    }

    async actualizarCompraCliente(idCompra: number, compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        const cliente: ClienteEntity = await this.clienteManager.findByIdentificacion(compraCliente.cliente.idTipoDocumento, compraCliente.cliente.numeroDocumento);
        let compraEntity: CompraEntity = await this.compraDao.findByPk(idCompra);
        compraEntity.idCliente = cliente.idCliente;
        compraEntity.valorTotal = compraCliente.productos
            .map(producto => producto.valorTotal)
            .reduce((total, valor) => total + valor, 0);
        compraEntity = await this.compraDao.update(compraEntity);

        // Buscamos los detalles anteriores.
        let listaDetallesAnteriores: Array<CompraDetalleEntity> = await this.compraDetalleDao.findByIdCompra(compraEntity.idCompra);
        // Actualizamos los stocks con los nuevos datos.
        listaDetallesAnteriores.forEach(async detalle => {
            await this.productoManager.updateStockProductoDevuelto(detalle.idProducto, detalle.cantidad);
        });
        // Eliminamos la lista de detalles anteriores.
        await this.compraDetalleDao.delete(listaDetallesAnteriores.map(detalles => detalles.idCompraDetalle));

        // Registramos los nuevos detalles para la compra.
        compraCliente.productos.forEach(async producto => {
            const compraDetalleEntity = new CompraDetalleEntity();
            compraDetalleEntity.idCompra = compraEntity.idCompra;
            compraDetalleEntity.cantidad = producto.cantidad;
            compraDetalleEntity.idProducto = producto.idProducto;
            compraDetalleEntity.valorTotal = producto.valorTotal;
            await this.compraDetalleDao.insert(compraDetalleEntity);
            await this.productoManager.updateStockProductoVendido(producto.idProducto, producto.cantidad);
        });

        // Buscamos las compra pagos y los eliminamos
        let listaCompraPagosAnteriores: Array<CompraPagoEntity> = await this.compraPagoDao.findByIdCompra(compraEntity.idCompra);
        await this.compraPagoDao.delete(listaCompraPagosAnteriores.map(pago => pago.idCompraPago));

        compraCliente.pagos.forEach(async pago => {
            const compraPago = new CompraPagoEntity();
            compraPago.idCompra = compraEntity.idCompra;
            compraPago.idTipoFormaPago = pago.idTipoFormaPago;
            compraPago.numeroComprobante = pago.numeroComprobante;
            compraPago.valor = pago.valor;
            await this.compraPagoDao.insert(compraPago);
        });

        return compraCliente;
    }

    async findCompraClienteById(idCompra: number): Promise<CompraClienteInDTO> {
        const compraEntity: CompraEntity = await this.compraDao.findByPk(idCompra);
        const listaDetalles: Array<CompraDetalleEntity> = await this.compraDetalleDao.findByIdCompra(idCompra);
        const listaCompraPagos: Array<CompraPagoEntity> = await this.compraPagoDao.findByIdCompra(idCompra);
        const cliente = await this.clienteManager.findByPk(compraEntity.idCliente);

        const compraClienteInDTO: CompraClienteInDTO = new CompraClienteInDTO();
        // Mapeamos el dto
        compraClienteInDTO.productos = [];
        for (const detalle of listaDetalles) {
            const producto: DetalleProductoOutDTO = await this.productoManager.findDetalleProductoById(detalle.idProducto);
            const productoCompraDto = new ProductoCompraDTO();
            productoCompraDto.idProducto = detalle.idProducto;
            productoCompraDto.cantidad = detalle.cantidad;
            productoCompraDto.categoria = producto.categoria;
            productoCompraDto.nombreProducto = producto.nombreProducto;
            productoCompraDto.precioVenta = producto.precioVenta;
            productoCompraDto.valorTotal = detalle.valorTotal;
            compraClienteInDTO.productos.push(productoCompraDto)
        }
        compraClienteInDTO.pagos = listaCompraPagos.map(compraPagoEntityToPagoClienteDto);
        // Cliente
        compraClienteInDTO.cliente = new ClienteIdentificacionDTO();
        compraClienteInDTO.cliente.idTipoDocumento = cliente.idTipoIdentificacion;
        compraClienteInDTO.cliente.numeroDocumento = cliente.numeroIdentificacion;

        compraClienteInDTO.empleado = new IdentificacionDTO();
        compraClienteInDTO.empleado.idTipoDocumento = MagicNumber.UNO;
        compraClienteInDTO.empleado.numeroDocumento = cliente.numeroIdentificacion;

        function compraPagoEntityToPagoClienteDto(pago: CompraPagoEntity) {
            const pagoClienteDto = new PagoClienteDTO();
            pagoClienteDto.idTipoFormaPago = pago.idTipoFormaPago;
            pagoClienteDto.numeroComprobante = pago.numeroComprobante;
            pagoClienteDto.valor = pago.valor;
            return pagoClienteDto;
        }

        return compraClienteInDTO;
    }

    async findResumenCompras(filtros: FiltroGeneralDTO): Promise<CompraClienteOutDTO[]> {
        const listaCompras: Array<CompraEntity> = await this.compraDao.findAll(filtros);
        const listaCompraClienteInDTO: Array<CompraClienteOutDTO> = [];

        for await (const compra of listaCompras) {
            const compraClienteOutDTO: CompraClienteOutDTO = new CompraClienteOutDTO();
            compraClienteOutDTO.compra = compra;
            const listaDetalles: Array<CompraDetalleEntity> = await this.compraDetalleDao.findByIdCompra(compra.idCompra);
            const listaCompraPagos: Array<CompraPagoEntity> = await this.compraPagoDao.findByIdCompra(compra.idCompra);
            const cliente = await this.clienteManager.findByPk(compra.idCliente);

            // Mapeamos el dto
            compraClienteOutDTO.productos = [];
            for (const detalle of listaDetalles) {
                const producto: DetalleProductoOutDTO = await this.productoManager.findDetalleProductoById(detalle.idProducto);
                const productoCompraDto = new ProductoCompraDTO();
                productoCompraDto.idProducto = detalle.idProducto;
                productoCompraDto.cantidad = detalle.cantidad;
                productoCompraDto.categoria = producto.categoria;
                productoCompraDto.nombreProducto = producto.nombreProducto;
                productoCompraDto.precioVenta = producto.precioVenta;
                productoCompraDto.valorTotal = detalle.valorTotal;
                compraClienteOutDTO.productos.push(productoCompraDto)
            }
            compraClienteOutDTO.pagos = listaCompraPagos.map(compraPagoEntityToPagoClienteDto);

            // Cliente
            compraClienteOutDTO.cliente = cliente;

            // Empleado
            compraClienteOutDTO.empleado = new IdentificacionDTO();
            compraClienteOutDTO.empleado.idTipoDocumento = MagicNumber.UNO;
            compraClienteOutDTO.empleado.numeroDocumento = cliente.numeroIdentificacion;

            listaCompraClienteInDTO.push(compraClienteOutDTO);
        }

        function compraPagoEntityToPagoClienteDto(pago: CompraPagoEntity) {
            const pagoClienteDto = new PagoClienteDTO();
            pagoClienteDto.idTipoFormaPago = pago.idTipoFormaPago;
            pagoClienteDto.numeroComprobante = pago.numeroComprobante;
            pagoClienteDto.valor = pago.valor;
            return pagoClienteDto;
        }

        return listaCompraClienteInDTO;
    }

}
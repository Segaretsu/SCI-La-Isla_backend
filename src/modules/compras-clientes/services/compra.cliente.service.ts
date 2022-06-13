import { CompraClienteManagerImpl } from "@compras.clientes/manager/impl/compra.cliente.manager.impl";
import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraClienteOutDTO } from "@compras.clientes/models/dto/compra.cliente.out.dto";
import { ResumenComprasInDTO } from "@compras.clientes/models/dto/resumen.compras.in.dto";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";

@Controller("compra-cliente")
@ApiTags('Compras Cliente')
export class CompraClienteService {
    constructor(
        private compraClienteManager: CompraClienteManagerImpl,
    ) { }

    @Post("registrar")
    async registrarCompraCliente(@Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        return await this.compraClienteManager.registrarCompraCliente(compraCliente);
    }

    @Delete("eliminar-compra/:idCompra")
    async eliminarCompraByIdCompra(@Param('idCompra') idCompra: number): Promise<number> {
        return await this.compraClienteManager.eliminarCompraByIdCompra(idCompra);
    }

    @Put("actualizar-compra/:idCompra")
    async actualizarCompraCliente(@Param('idCompra') idCompra: number, @Body() compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO> {
        return await this.compraClienteManager.actualizarCompraCliente(idCompra, compraCliente);
    }

    @Get(":idCompra")
    async findCompraClienteById(@Param('idCompra') idCompra: number): Promise<CompraClienteInDTO> {
        return await this.compraClienteManager.findCompraClienteById(idCompra);
    }

    @Post("resumen-compras")
    async findResumenCompras(@Body() resumenComprasInDTO: FiltroGeneralDTO): Promise<Array<CompraClienteOutDTO>> {
        return await this.compraClienteManager.findResumenCompras(resumenComprasInDTO);
    }

}
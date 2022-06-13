import { UnexpectedException } from "@conf/exceptions/maganer.exception";
import { Injectable } from "@nestjs/common";
import { ProductoDaoImpl } from "@productos/dao/impl/producto.dao.impl";
import { DetalleProductoOutDTO } from "@productos/models/dto/detalle.producto.out.dto";
import { ProductoEntity } from "@productos/models/entity/producto.entity";
import { MagicNumber } from "@utils/constantes";
import { ProductoManager } from "../producto.manager";

@Injectable()
export class ProductoManagerImpl implements ProductoManager {

    constructor(
        private productoDao: ProductoDaoImpl,
    ) { }

    async registrarProducto(producto: ProductoEntity): Promise<ProductoEntity> {
        const newProduct = new ProductoEntity();
        Object.assign(newProduct, producto);

        return await this.productoDao.insert(newProduct);
    }

    async actualizarProducto(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.productoDao.update(producto);
    }

    async findAll(): Promise<DetalleProductoOutDTO[]> {
        return await this.productoDao.findAll();
    }

    async findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO> {
        return await this.productoDao.findDetalleProductoById(idProducto);
    }

    async findDetalleProductoLikeNombre(nombre: string): Promise<DetalleProductoOutDTO[]> {
        return await this.productoDao.findDetalleProductoLikeNombre(nombre.toUpperCase());
    }

    async updateStockProductoVendido(idProducto: number, cantidadProductoVendido: number): Promise<void> {
        try {
            const producto: ProductoEntity = await this.productoDao.findByPk(idProducto);
            producto.stock = (cantidadProductoVendido > producto.stock) ? MagicNumber.CERO : (producto.stock - cantidadProductoVendido);
            this.productoDao.update(producto);
        } catch (error) {
            throw new UnexpectedException(`No se pudo actualizar el stock del producto con id ${idProducto}`, error);
        }
    }

    async updateStockProductoDevuelto(idProducto: number, cantidadProductoDevuelto: number): Promise<void> {
        try {
            const producto: ProductoEntity = await this.productoDao.findByPk(idProducto);
            producto.stock = producto.stock + cantidadProductoDevuelto;
            this.productoDao.update(producto);
        } catch (error) {
            throw new UnexpectedException(`No se pudo actualizar el stock del producto con id ${idProducto}`, error);
        }
    }

}
import { NoResultException } from "@conf/exceptions/maganer.exception";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { DetalleProductoOutDTO } from "@productos/models/dto/detalle.producto.out.dto";
import { ProductoEntity } from "@productos/models/entity/producto.entity";
import { MagicNumber } from "@utils/constantes";
import { EntityManager } from "typeorm";
import { ProductoDao } from "../producto.dao";

/**
 * Claseencargada de la capa dedatos de los productos. <br>
 * @createAt 2022-03-25, 20:50:21 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class ProductoDaoImpl implements ProductoDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.entityManager.save(producto);
    }

    async update(producto: ProductoEntity): Promise<ProductoEntity> {
        return await this.entityManager.save(producto);
    }

    async findByPk(idProducto: number): Promise<ProductoEntity> {
        return await this.entityManager.findOne<ProductoEntity>(ProductoEntity, idProducto);
    }

    async findAll(): Promise<DetalleProductoOutDTO[]> {
        const listaDetalles: Array<DetalleProductoOutDTO> = await this.entityManager.query(`
            SELECT 
                pro.id_producto AS "idProducto",
                pro.nombre AS "nombreProducto", pro.stock AS "stock",
                pro.precio_compra AS "precioCompra", pro.precio_venta AS "precioVenta",
                tcp.nombre AS "categoria"
            FROM producto pro
            INNER JOIN tipo_categoria_producto tcp ON pro.id_tipo_categoria_producto = tcp.id_tipo_categoria_producto
            ORDER BY pro.nombre ASC
        `);
        if (!listaDetalles) {
            throw new NoResultException(`No se encontraron productos registrados`);
        }
        return listaDetalles;
    }

    async findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO> {
        const detalle: DetalleProductoOutDTO = await this.entityManager.query(`
            SELECT 
                pro.id_producto AS "idProducto",
                pro.nombre AS "nombreProducto", pro.stock AS "stock",
                pro.precio_compra AS "precioCompra", pro.precio_venta AS "precioVenta",
                tcp.nombre AS "categoria"
            FROM producto pro
            INNER JOIN tipo_categoria_producto tcp ON pro.id_tipo_categoria_producto = tcp.id_tipo_categoria_producto
            WHERE pro.id_producto = :idProducto
        `, [idProducto]).then((detalles => detalles[MagicNumber.CERO]));
        if (!detalle) {
            throw new NoResultException(`El producto con identificación ${idProducto} no existe`);
        }
        return detalle;
    }

    async findDetalleProductoLikeNombre(nombre: string): Promise<DetalleProductoOutDTO[]> {
        const detalle: Array<DetalleProductoOutDTO> = await this.entityManager.query(`
            SELECT 
                pro.id_producto AS "idProducto",
                pro.nombre AS "nombreProducto", pro.stock AS "stock",
                pro.precio_compra AS "precioCompra", pro.precio_venta AS "precioVenta",
                cpro.nombre AS "categoria"
            FROM producto pro
            INNER JOIN tipo_categoria_producto cpro ON pro.id_tipo_categoria_producto = cpro.id_tipo_categoria_producto
            WHERE pro.nombre LIKE :nombre
        `, [`%${nombre}%`]);
        if (detalle.length < 1) {
            throw new NoResultException(`El producto con nombre parcial ${nombre} no existe`);
        }
        return detalle;
    }

}
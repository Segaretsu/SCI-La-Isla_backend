import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";

/**
 * Interface encargada de definir la capa de datos del detalle de la compra. <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 * @createAt 2022-03-24, 23:19:49
 */
export interface CompraDetalleDao {

    /**
     * Método encargado de registrar el detalle de una compra.
     * @createAt 08/11/2021, 11:03 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CompraDetalleEntity} compraDetalle  detalle de una compra.
     */
    insert(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity>;

    /**
     * Método encargado de actualizar el detalle de una compra.
     * @createAt 08/11/2021, 11:03 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CompraDetalleEntity} compraDetalle  detalle de una compra.
     */
    update(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity>;

    /**
     * Método encargado de eliminar el detalle de una compra.
     * @createAt 08/11/2021, 11:03 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompraDetalle identificación de la compra.
     */
    delete(idsCompraDetalle: number | Array<number>): Promise<void>;

    /**
     * Método encargado de retornar un Compra_detalle por PK.
     * @createAt 08/11/2021, 11:03 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompraDetalle identificador PK de la tabla.
     */
    findByPk(idCompraDetalle: number): Promise<CompraDetalleEntity>;

    /**
     * Método encargado de recuperar los detalles de una compra.
     * @createAt 08/11/2021, 11:03 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompra identificador FK del detalle de la compra.
     */
    findByIdCompra(idCompra: number): Promise<Array<CompraDetalleEntity>>;
}
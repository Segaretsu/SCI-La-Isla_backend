import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";

/**
 * Interface encargada de la capa de datos del pago de una compra. <br>
 * @createAt 2022-03-24, 23:39:26
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface CompraPagoDao {

    /**
     * Método encargado de registrar en la tabla compra_pago.
     * @createAt 2022/01/16 09:30 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param compraPago entity de compra_pago a registrar.
     */
    insert(compraPago: CompraPagoEntity): Promise<CompraPagoEntity>;

    /**
     * Método encargado de eliminar una o varias compra pago.
     * @createAt 2022/01/16 09:30 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number | Array<number>} idsCompraPago 
     */
    delete(idsCompraPago: number | Array<number>): Promise<void>;

    /**
     * Método encargado de retornar una compra_pago por medio de la PK.
     * @createAt 2022/01/16 09:30 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param idCompraPago identificador (PK) de la tabla compra_pago.
     */
    findByPk(idCompraPago: number): Promise<CompraPagoEntity>;

    /**
     * Método encargado de retornar los pagos de las compras por idCompra (FK).
     * @createAt 2022/01/16 09:30 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param idCompra identificador (FK) de la compra.
     */
    findByIdCompra(idCompra: number): Promise<Array<CompraPagoEntity>>;
}
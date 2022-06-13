import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";

/**
 * Interface encargada de la capa de datos de la tabla tipo_forma_pago.
 * @createAt 2022/03/24, 09:43 p.m.
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface TipoFormaPagoDao {

    /**
     * Método encargado de insertar una forma de pago.
     * @createAt 2022-03-24, 21:56:07
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {TipoFormaPagoEntity} tipoFormaPago 
     */
    insert(tipoFormaPago: TipoFormaPagoEntity): Promise<TipoFormaPagoEntity>;

    /**
     * Método encargado de actualizar una forma de pago.
     * @createAt 2022-03-24, 21:59:55
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {TipoFormaPagoEntity} tipoFormaPago 
     */
    update(tipoFormaPago: TipoFormaPagoEntity): Promise<TipoFormaPagoEntity>;

    /**
     * Método encargado de encontrar una forma de pago por PK <br>
     * @createAt 2022-03-24, 22:03:45
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idTipoFormaPago 
     */
    findByPk(idTipoFormaPago: number): Promise<TipoFormaPagoEntity>;

    /**
     * Método encargado de recuperar todas las formas de pago. <br>
     * @createAt 2022-03-24, 22:06:14
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     */
    findAllTipoFormaPago(): Promise<Array<TipoFormaPagoEntity>>;
}
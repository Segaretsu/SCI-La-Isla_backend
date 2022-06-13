import { TipoFormaPagoDTO } from "@compras.clientes/models/dto/tipo.forma.pago.in.dto";
import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";

/**
 * Interface encargada de definir los métodos encargados de la lógica de
 * negocio del las formas de pago <br>
 * @createAt 2022-03-24, 22:21:50
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface TipoFormaPagoManager {
    /**
         * Método encargado de insertar una forma de pago.
         * @createAt 2022-03-24, 21:56:07
         * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
         * @param {TipoFormaPagoEntity} tipoFormaPago 
         */
    registrarTipoFormaPago(tipoFormaPago: TipoFormaPagoDTO): Promise<void>;

    /**
     * Método encargado de recuperar todas las formas de pago. <br>
     * @createAt 2022-03-24, 22:06:14
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     */
    findAllTipoFormaPago(): Promise<Array<TipoFormaPagoEntity>>;
}
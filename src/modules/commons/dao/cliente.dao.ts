import { ClienteEntity } from "@commons/models/entity/cliente.entity";

/**
 * Interface encargada de la capa de datos de los clientes <br>
 * @createAt 2022-03-25, 19:38:42
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface ClienteDao {

    /**
     * Método encargado de registrar uncliente. <br>
     * @createAt 2022-03-25, 19:41:38
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ClienteEntity} cliente cliente nuevo a registrar.
     */
    insert(cliente: ClienteEntity): Promise<ClienteEntity>;

    /**
     * Método encargado de actualizar un cliente. <br>
     * @createAt 2022-03-25, 19:42:17 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ClienteEntity} cliente cliente a actualizar.
     */
    update(cliente: ClienteEntity): Promise<ClienteEntity>;

    /**
     * Método encargado de recuperar un cliente por medio de la Pk. <br>
     * @createAt 2022-03-25, 19:43:38 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCliente identificador del cliente.
     */
    findByPk(idCliente: number): Promise<ClienteEntity>;

    /**
     * Método encargado de recuperar un cliente por medio de su identificación. <br>
     * @createAt 2022-03-25, 19:45:33 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} tipoIdentificacion identificador del tipo de identidad.
     * @param {string} numeroIdentificacion número de identidad.
     */
    findByIdentificacion(tipoIdentificacion: number, numeroIdentificacion: string): Promise<ClienteEntity>;

}
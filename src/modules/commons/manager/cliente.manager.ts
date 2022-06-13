import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";

/**
 * Interface encargada de la lógica de negocio de los clientes. <br>
 * @createAt 2022-03-25, 19:53:02 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface ClienteManager {

    /**
     * Método encargado de registrar un cliente. <br>
     * @createAt 2022-03-25, 19:54:35 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param cliente cliente a registrar.
     */
    registrarCliente(cliente: ClienteInDTO): Promise<ResponseDTO>;

    /**
     * Método encargado de recuperar un cliente por medio de su identificación. <br>
     * @createAt 2022-03-25, 19:45:33 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} tipoIdentificacion identificador del tipo de identidad.
     * @param {string} numeroIdentificacion número de identidad.
     */
    findByIdentificacion(tipoIdentificacion: number, numeroIdentificacion: string): Promise<ClienteEntity>;

    /**
     * Método encargado de recuperar un cliente por medio de la Pk. <br>
     * @createAt 2022-03-25, 19:43:38 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCliente identificador del cliente.
     */
    findByPk(idCliente: number): Promise<ClienteEntity>;
}
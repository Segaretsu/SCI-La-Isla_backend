import { ClienteDaoImpl } from "@commons/dao/impl/cliente.dao.impl";
import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { Activo, Datos } from "@commons/util/constantes";
import { HttpStatus, Injectable } from "@nestjs/common";
import { ClienteManager } from "../cliente.manager";

@Injectable()
export class ClienteManagerImpl implements ClienteManager {
    constructor(
        private clienteDao: ClienteDaoImpl,
    ) { }


    async registrarCliente(cliente: ClienteInDTO): Promise<ResponseDTO> {
        const clienteEntity = new ClienteEntity();
        clienteEntity.idTipoIdentificacion = cliente.identificacion.idTipoDocumento;
        clienteEntity.numeroIdentificacion = cliente.identificacion.numeroDocumento;
        clienteEntity.primerNombre = cliente.primerNombre;
        clienteEntity.segundoNombre = cliente.segundoNombre;
        clienteEntity.primerApellido = cliente.primerApellido;
        clienteEntity.segundoApellido = cliente.segundoApellido;
        clienteEntity.direccion = cliente.direccion || Datos.NO_REGISTRA;
        clienteEntity.correo = cliente.correo || Datos.NO_REGISTRA;
        clienteEntity.telefono = cliente.telefono || Datos.NO_REGISTRA;
        clienteEntity.activo = Activo.SI;
        await this.clienteDao.insert(clienteEntity);
        return new ResponseDTO(HttpStatus.OK, 'El cliente fue registrado exitosamente');
    }

    async findByIdentificacion(tipoIdentificacion: number, numeroIdentificacion: string): Promise<ClienteEntity> {
        return await this.clienteDao.findByIdentificacion(tipoIdentificacion, numeroIdentificacion);
    }

    async findByPk(idCliente: number): Promise<ClienteEntity> {
        return await this.clienteDao.findByPk(idCliente);
    }

}
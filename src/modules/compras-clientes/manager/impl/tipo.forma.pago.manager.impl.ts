import { Activo } from "@commons/util/constantes";
import { TipoFormaPagoDaoImpl } from "@compras.clientes/dao/impl/tipo.forma.pago.dao.impl";
import { TipoFormaPagoDTO } from "@compras.clientes/models/dto/tipo.forma.pago.in.dto";
import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";
import { HttpCode, HttpStatus, Injectable } from "@nestjs/common";
import { TipoFormaPagoManager } from "../tipo.forma.pago.manager";

@Injectable()
export class TipoFormaPagoManagerImpl implements TipoFormaPagoManager {

    constructor(
        private tipoFormaPagoDao: TipoFormaPagoDaoImpl
    ) { }

    async registrarTipoFormaPago(tipoFormaPago: TipoFormaPagoDTO): Promise<void> {
        const formaPago = new TipoFormaPagoEntity();
        formaPago.activo = Activo.SI;
        formaPago.nombre = tipoFormaPago.nombre;
        await this.tipoFormaPagoDao.insert(formaPago);
        HttpCode(HttpStatus.OK);
    }

    async findAllTipoFormaPago(): Promise<TipoFormaPagoEntity[]> {
        return await this.tipoFormaPagoDao.findAllTipoFormaPago();
    }

}
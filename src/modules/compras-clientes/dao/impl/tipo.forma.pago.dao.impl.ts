import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { TipoFormaPagoDao } from "../tipo.forma.pago.dao";

/**
 * Clase encargada de la capa de datos de las formas de pago. <br>
 * @createAt 2022-03-24, 22:12:50
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class TipoFormaPagoDaoImpl implements TipoFormaPagoDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(tipoFormaPago: TipoFormaPagoEntity): Promise<TipoFormaPagoEntity> {
        return await this.entityManager.save(tipoFormaPago);
    }

    async update(tipoFormaPago: TipoFormaPagoEntity): Promise<TipoFormaPagoEntity> {
        return await this.entityManager.save(tipoFormaPago);
    }

    async findByPk(idTipoFormaPago: number): Promise<TipoFormaPagoEntity> {
        return await this.entityManager.findOne<TipoFormaPagoEntity>(TipoFormaPagoEntity, idTipoFormaPago);
    }

    async findAllTipoFormaPago(): Promise<TipoFormaPagoEntity[]> {
        return await this.entityManager.find<TipoFormaPagoEntity>(TipoFormaPagoEntity);
    }

}
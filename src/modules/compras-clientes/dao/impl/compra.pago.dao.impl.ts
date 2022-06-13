import { CompraPagoEntity } from "@compras.clientes/models/entity/compra.pago.entity";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { CompraPagoDao } from "../compra.pago.dao";

/**
 * Clase encargada de la capa de datos de los pagos en las compras. <br>
 * @createAt 2022-03-24, 23:42:08
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class CompraPagoDaoImpl implements CompraPagoDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(compraPago: CompraPagoEntity): Promise<CompraPagoEntity> {
        return await this.entityManager.save(compraPago);
    }

    async delete(idsCompraPago: number | number[]): Promise<void> {
        await this.entityManager.delete(CompraPagoEntity, idsCompraPago);
    }

    async findByPk(idCompraPago: number): Promise<CompraPagoEntity> {
        return await this.entityManager.findOne<CompraPagoEntity>(CompraPagoEntity, idCompraPago);
    }

    async findByIdCompra(idCompra: number): Promise<CompraPagoEntity[]> {
        return await this.entityManager.find(CompraPagoEntity, { idCompra });
    }

}
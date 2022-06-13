import { CompraDetalleEntity } from "@compras.clientes/models/entity/compra.detalle.entity";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { CompraDetalleDao } from "../compra.detalle.dao";

/**
 * Clase encargada de la capa de datos del detalle de las compras <br>
 * @createAt 2022-03-24, 23:21:54
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class CompraDetalleDaoimpl implements CompraDetalleDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity> {
        return await this.entityManager.save(compraDetalle);
    }

    async update(compraDetalle: CompraDetalleEntity): Promise<CompraDetalleEntity> {
        return await this.entityManager.save(compraDetalle);
    }

    async delete(idsCompraDetalle: number | number[]): Promise<void> {
        await this.entityManager.delete(CompraDetalleEntity, idsCompraDetalle);
    }

    async findByPk(idCompraDetalle: number): Promise<CompraDetalleEntity> {
        return await this.entityManager.findOne<CompraDetalleEntity>(CompraDetalleEntity, idCompraDetalle);
    }

    async findByIdCompra(idCompra: number): Promise<CompraDetalleEntity[]> {
        return await this.entityManager.find(CompraDetalleEntity, { idCompra });
    }

}
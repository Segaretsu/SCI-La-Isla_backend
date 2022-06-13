import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";
import { EntityManager, Like } from "typeorm";
import { TipoCategoriaProductoDao } from "../tipo.categoria.producto.dao";

/**
 * Clase encargada de la capa de datos de las tipo categoria produto. <br>
 * @createAt 2022-03-25, 20:21:50 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class TipoCategoriaProductoDaoImpl implements TipoCategoriaProductoDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return await this.entityManager.save(categoriaProducto);
    }

    async update(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return await this.entityManager.save(categoriaProducto);
    }

    async findByPk(idCategoriaProducto: number): Promise<TipoCategoriaProductoEntity> {
        return await this.entityManager.findOne<TipoCategoriaProductoEntity>(TipoCategoriaProductoEntity, idCategoriaProducto);
    }

    async findAll(): Promise<TipoCategoriaProductoEntity[]> {
        return await this.entityManager.find<TipoCategoriaProductoEntity>(TipoCategoriaProductoEntity);
    }

    async findLikeNombre(nombre: string): Promise<TipoCategoriaProductoEntity[]> {
        return await this.entityManager.find(TipoCategoriaProductoEntity,
            { where: { nombre: Like(`%${nombre}%`), } }
        );
    }

}
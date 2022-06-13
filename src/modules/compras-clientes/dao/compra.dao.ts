import { CompraEntity } from "@compras.clientes/models/entity/compra.entity";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";

/**
 * Interface encargada de la capa de datos de compra. <br>
 * @createAt 2022-03-24, 23:53:43
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface CompraDao {

    /**
     * Método para registrar una compra.
     * @createAt 03/02/2022, 09:59 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CompraEntity} compra entidad compra.
     */
    insert(compra: CompraEntity): Promise<CompraEntity>;

    /**
     * Método para actualizar una compra.
     * @createAt 03/02/2022, 09:59 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CompraEntity} compra entidad compra.
     */
    update(compra: CompraEntity): Promise<CompraEntity>;

    /**
     * Método encargado de eliminar una compra.
     * @createAt 03/02/2022, 09:59 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number | Array<number>} idsCompra iidentificador PK, de la compra.
     */
    delete(idsCompra: number | Array<number>): Promise<void>;

    /**
     * Método para encontrar una compra por id.
     * @createAt 03/02/2022, 09:59 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompra identificador PK, de la compra.
     */
    findByPk(idCompra: number): Promise<CompraEntity>;

    /**
     * Método para recuperar las compras y sus detalles
     * @ceateAt 03/02/2022, 02:46 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {FiltroGeneralDTO} filtros. (Opcional) filtros opcionales.
     */
    findAll(filtros?: FiltroGeneralDTO): Promise<Array<CompraEntity>>;

}
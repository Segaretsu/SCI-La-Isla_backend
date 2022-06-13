import { CategoriaRegistrarInDTO } from "@productos/models/dto/categoria.registrar.in.dto";
import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";

/**
 * Interface encargada de la lógica de negocio de la categoria de los productos. <br>
 * @createAt 2022-03-25, 20:33:04 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface TipoCategoriaProductoManager {

    /**
     * Método encargado de registrar una categoria. <br>
     * @createAt 2022-03-25, 20:40:13 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CategoriaRegistrarInDTO} categoriaProducto categoria a registrar.
     */
    registrarTipoCategoriaProducto(categoriaProducto: CategoriaRegistrarInDTO): Promise<TipoCategoriaProductoEntity>;

    /**
     * Método encargado de encontrar una categoría de producto por la PK. <br>
     * @createAt 2022-03-25, 20:15:59 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCategoriaProducto 
     */
    findByPk(idCategoriaProducto: number): Promise<TipoCategoriaProductoEntity>;

    /**
     * Método encargado de retornar todas las categorias. <br>
     * @createAt 2022-03-25, 20:16:43 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * Retorna todas las categorias de los productos.
     */
    findAll(): Promise<Array<TipoCategoriaProductoEntity>>;

    /**
     * Método para buscar una lista de elementos por su nombre. <br>
     * @createAt 2022-03-25, 20:18:59 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param nombre parte del nombre a buscar en la tabla categoria_producto
     */
    findLikeNombre(nombre: string): Promise<Array<TipoCategoriaProductoEntity>>;
}
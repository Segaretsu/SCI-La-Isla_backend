import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";

/**
 * Interface encargada de la capa de datos de la categoria de productos. <br>
 * @createAt 2022-03-25, 20:14:17 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface TipoCategoriaProductoDao {

    /**
     * Método encargado de registrar una categoría de producto. <br>
     * @createAt 2022-03-25, 20:14:49 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {TipoCategoriaProductoEntity} categoriaProducto 
     */
    insert(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity>;

    /**
     * Método encargado de actualizar una categoría de producto. <br>
     * @createAt 2022-03-25, 20:15:05 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {TipoCategoriaProductoEntity} categoriaProducto 
     */
    update(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity>;

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
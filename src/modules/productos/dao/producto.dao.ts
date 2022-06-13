import { DetalleProductoOutDTO } from '@productos/models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '@productos/models/entity/producto.entity';

/**
 * Interface encargada de la capa de datos de los productos. <br>
 * @createAt 2022-03-25, 20:46:47 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface ProductoDao {

    /**
     * Método encargado de registrar un nuevo producto.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ProductoEntity} producto.
     */
    insert(producto: ProductoEntity): Promise<ProductoEntity>;

    /**
     * Método encargado de actualizar un producto.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ProductoEntity} producto 
     */
    update(producto: ProductoEntity): Promise<ProductoEntity>;

    /**
     * Método encargado de retornar un producto por Pk. <br>
     * @createAt 2022-03-25, 21:01:35 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idProducto identificador del producto
     */
    findByPk(idProducto: number): Promise<ProductoEntity>;

    /**
     * Método encargado de retornar toda la lista completa de productos.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     */
    findAll(): Promise<Array<DetalleProductoOutDTO>>;

    /**
     * Método para retornar el detalle de un producto por el identificador (PK).
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idProducto 
     */
    findDetalleProductoById(idProducto: number): Promise<DetalleProductoOutDTO>;

    /**
     * Método encargado de retornar la lista de procutos que coincidan con el nombre del producto.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {string} nombre nombre parcial del producto.
     */
    findDetalleProductoLikeNombre(nombre: string): Promise<Array<DetalleProductoOutDTO>>;

}
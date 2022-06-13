import { DetalleProductoOutDTO } from '@productos/models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '@productos/models/entity/producto.entity';

/**
 * Interface encargada de la capa de negocio de los productos. <br>
 * @createAt 2022-03-25, 20:46:47 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface ProductoManager {

    /**
     * Método encargado de registrar un nuevo producto.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ProductoEntity} producto.
     */
    registrarProducto(producto: ProductoEntity): Promise<ProductoEntity>;

    /**
     * Método encargado de actualizar un producto.
     * @createAt 2022/01/13, 11:52 p.m.
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {ProductoEntity} producto 
     */
    actualizarProducto(producto: ProductoEntity): Promise<ProductoEntity>;

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

    /**
     * Método encargado de actualizar el stock de un producto vendido.
     * @createAt 2022/01/13, 11:52 p.m.
     * @param {number} idProducto Identificador del producto.
     * @param {number} cantidadProductoVendido Cantidad de unidades vendidas del producto.
     */
    updateStockProductoVendido(idProducto: number, cantidadProductoVendido: number): Promise<void>;

    /**
     * Método encargado de actualizar el stock de un producto devuelto o compra modificada.
     * @createAt 2022/01/16, 09:03 p.m.
     * @param {number} idProducto Identificador del producto.
     * @param {number} cantidadProductoDevuelto Cantidad de unidades devueltas del producto.
     */
    updateStockProductoDevuelto(idProducto: number, cantidadProductoDevuelto: number): Promise<void>;

}
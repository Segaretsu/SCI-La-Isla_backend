/**
 * DTO encargado de los productos comprados
 */
export class ProductoCompraDTO {
    idProducto: number;
    cantidad: number;
    categoria: string;
    nombreProducto: string;
    precioVenta: number;
    valorTotal: number;
}
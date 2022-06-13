/**
 * DTO encargado de los productos más vendidos.
 */
export class ProductoMasVendidoDTO {
    idProducto: number;
    idTipoCategoriaProducto: number;
    cantidadProductoVendido: number;
    cantidadVentas: number;
    categoria: String;
    gananciaPorProductoVendido: number;
    gananciaTotal: number;
    nombre: string;
    mayorFormaPago: string;
    valorTotalVentas: number;
}
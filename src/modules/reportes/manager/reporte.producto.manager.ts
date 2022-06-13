import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";

export interface ReporteProductoManager {

    /**
     * Método encargado de retornar los productos más vendidos. <br>
     * @createAt 2022-03-25, 21:42:55 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {FiltroGeneralDTO} filtros (opcional), nos indica si la consulta requiere un filtro adicional.
     */
    findMasVendidos(filtros?: FiltroGeneralDTO): Promise<Array<ProductoMasVendidoDTO>>;

    /**
     * Método encargado de retornar la información completa de un producto. <br>
     * @createAt 2022-03-25, 21:47:44 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} filtros nos indica si la consulta requiere un filtro adicional.
     */
    findEstadisticasProducto(filtros: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO>;
}
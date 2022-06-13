import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";

/**
 * Interface encargada de la capa dedatos de los reportes de productos. <br>
 * @createAt 2022-03-25, 21:42:25 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface ReporteProductoDao {

    /**
     * Método encargado de retornar los productos más vendidos. <br>
     * @createAt 2022-03-25, 21:42:55 <br>
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {FiltroGeneralDTO} filtros (opcional), nos indica si la consulta requiere un filtro adicional.
     */
    findMasVendidos(filtros?: FiltroGeneralDTO): Promise<Array<ProductoMasVendidoDTO>>;
}
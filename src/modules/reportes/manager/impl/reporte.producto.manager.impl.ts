import { NoResultException, ParamException } from "@conf/exceptions/maganer.exception";
import { Injectable } from "@nestjs/common";
import { ReporteProductoDaoImpl } from "@reportes/dao/impl/reporte.producto.dao.impl";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";
import { MagicNumber } from "@utils/constantes";
import { ReporteProductoManager } from "../reporte.producto.manager";

@Injectable()
export class ReporteProductoManagerImpl implements ReporteProductoManager {

    constructor(
        private reporteProductoDao: ReporteProductoDaoImpl,
    ) { }

    async findMasVendidos(filtros?: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO[]> {
        filtros = filtros || new FiltroGeneralDTO();
        return await this.reporteProductoDao.findMasVendidos(filtros);
    }

    async findEstadisticasProducto(filtros: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO> {
        if (!filtros?.idProducto) {
            throw new ParamException("Debe especificar mínimo el id del producto a consultar");
        }

        const estadisticas = await this.reporteProductoDao.findMasVendidos(filtros);
        const estadisticaProducto = estadisticas[MagicNumber.CERO];

        if (!estadisticaProducto) {
            throw new NoResultException('No se encontraron estadísticas para el producto seleccionado.');
        }

        return estadisticaProducto;
    }

}
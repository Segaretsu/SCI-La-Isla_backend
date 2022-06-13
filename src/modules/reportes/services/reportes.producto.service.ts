
import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ReporteProductoManagerImpl } from "@reportes/manager/impl/reporte.producto.manager.impl";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";

@Controller("reportes-productos")
@ApiTags('Reportes de productos')
export class ReporteProductoService {

    constructor(
        private reporteManager: ReporteProductoManagerImpl
    ) { }

    @Post("findMasVendidos")
    @ApiOperation({ description: 'Retorna los productos más vendidos' })
    async findMasVendidos(@Body() filtros?: FiltroGeneralDTO): Promise<Array<ProductoMasVendidoDTO>> {
        return this.reporteManager.findMasVendidos(filtros);
    }

    @Post("estadisticas-producto")
    @ApiOperation({ description: 'Retorna la información detallada de un producto y sus estadísticas' })
    async findDetalleCompletoProducto(@Body() filtros?: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO> {
        return this.reporteManager.findEstadisticasProducto(filtros);
    }

}
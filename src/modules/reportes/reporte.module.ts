import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReporteProductoDaoImpl } from "./dao/impl/reporte.producto.dao.impl";
import { ReporteProductoManagerImpl } from "./manager/impl/reporte.producto.manager.impl";
import { ReporteProductoService } from "./services/reportes.producto.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
    ],
    providers: [ReporteProductoDaoImpl, ReporteProductoManagerImpl],
    controllers: [ReporteProductoService],
    exports: [TypeOrmModule, ReporteProductoDaoImpl, ReporteProductoManagerImpl],
})

export class ReporteModule { }
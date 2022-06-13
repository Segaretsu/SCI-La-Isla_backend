import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Compra
import { CompraEntity } from "./models/entity/compra.entity";
import { CompraClienteService } from "./services/compra.cliente.service";
// Forma de pago
import { TipoFormaPagoEntity } from "./models/entity/tipo.forma.pago.entity";
import { FormaPagoService } from "./services/tipo.forma.pago.service";
// Compra pago
import { CompraPagoEntity } from "./models/entity/compra.pago.entity";
// Compra detalle
import { CompraDetalleEntity } from "./models/entity/compra.detalle.entity";
import { TipoFormaPagoDaoImpl } from "./dao/impl/tipo.forma.pago.dao.impl";
import { TipoFormaPagoManagerImpl } from "./manager/impl/tipo.forma.pago.manager.impl";
import { CompraDetalleDaoimpl } from "./dao/impl/compra.detalle.dao.impl";
import { CompraPagoDaoImpl } from "./dao/impl/compra.pago.dao.impl";
import { CompraDaoImpl } from "./dao/impl/compra.dao.impl";
import { CompraClienteManagerImpl } from "./manager/impl/compra.cliente.manager.impl";
import { CommonModule } from "@commons/common.module";
import { ProductoModule } from "@productos/producto.module";

@Module({
    imports: [
        CommonModule,
        ProductoModule,
        TypeOrmModule.forFeature([TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity]),
    ],
    providers: [
        // Compras Dao
        CompraDetalleDaoimpl,
        CompraPagoDaoImpl,
        CompraDaoImpl,
        TipoFormaPagoDaoImpl,
        // Compra Manager
        CompraClienteManagerImpl,
        TipoFormaPagoManagerImpl,
    ],
    controllers: [FormaPagoService, CompraClienteService],
    exports: [
        TypeOrmModule,
        // Compras Dao
        CompraDetalleDaoimpl,
        CompraPagoDaoImpl,
        CompraDaoImpl,
        TipoFormaPagoDaoImpl,
        // Compra Manager
        CompraClienteManagerImpl,
        TipoFormaPagoManagerImpl,
    ],
})

export class CompraClienteModule { }
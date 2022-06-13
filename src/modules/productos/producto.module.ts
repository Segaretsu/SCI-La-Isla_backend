import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Producto
import { ProductoEntity } from "./models/entity/producto.entity";
import { ProductoService } from "./services/producto.service";

// Categoria producto
import { TipoCategoriaProductoEntity } from "./models/entity/tipo.categoria.producto.entity";
import { CategoriaProductoService } from "./services/tipo.categoria.producto.service";
import { TipoCategoriaProductoDaoImpl } from "./dao/impl/tipo.categoria.producto.dao.impl";
import { TipoCategoriaProductoManagerImpl } from "./manager/impl/tipo.categoria.producto.manager.impl";
import { ProductoDaoImpl } from "./dao/impl/producto.dao.impl";
import { ProductoManagerImpl } from "./manager/impl/producto.manager.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductoEntity, TipoCategoriaProductoEntity]),
    ],
    providers: [
        ProductoDaoImpl, ProductoManagerImpl,
        TipoCategoriaProductoDaoImpl, TipoCategoriaProductoManagerImpl
    ],
    controllers: [ProductoService, CategoriaProductoService],
    exports: [TypeOrmModule,
        ProductoDaoImpl, ProductoManagerImpl,
        TipoCategoriaProductoDaoImpl, TipoCategoriaProductoManagerImpl
    ],
})

export class ProductoModule { }
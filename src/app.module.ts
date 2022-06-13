import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Module common
import { CommonModule } from '@commons/common.module';
import { ClienteEntity } from '@commons/models/entity/cliente.entity';

// Module productos
import { ProductoModule } from './modules/productos/producto.module';
import { ProductoEntity } from './modules/productos/models/entity/producto.entity';
import { TipoCategoriaProductoEntity } from './modules/productos/models/entity/tipo.categoria.producto.entity';

// Module compras cliente
import { CompraClienteModule } from '@compras.clientes/compra.cliente.module';
import { TipoFormaPagoEntity } from '@compras.clientes/models/entity/tipo.forma.pago.entity';
import { CompraPagoEntity } from '@compras.clientes/models/entity/compra.pago.entity';
import { CompraDetalleEntity } from '@compras.clientes/models/entity/compra.detalle.entity';
import { CompraEntity } from '@compras.clientes/models/entity/compra.entity';

// Modulo reportes
import { ReporteModule } from '@reportes/reporte.module';

@Module({
  imports: [
    //Administración de entidades debería hacerce solo en cada modulo encargado de la entidad
    CommonModule,
    ProductoModule,
    CompraClienteModule,
    ReporteModule,

    TypeOrmModule.forRoot(
      {
        // type: "sqlite", //https://github.com/nestjs/typeorm/issues/66
        url: process.env.DATABASE_URL,
        type: 'postgres',
        // host: 'ec2-34-201-95-176.compute-1.amazonaws.com',
        // port: 5432,
        // username: 'fhtedcajcoukkm',
        // password: '7153e9f51b7c527679efa4eab41542761a2e8b79afa4acf586018592bc4591f8',
        // database: 'dfjtmm918fdama',
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        // sid: 'xe',
        // database: ":memory:", //Indica que es una base de datos en memoria y se reinicia en cada ejecución
        entities: [ // Se definen las entidades va administrar (y las cuales creara como tablas al momento de inicar la app)
          // Common
          ClienteEntity,
          // Productos
          ProductoEntity, TipoCategoriaProductoEntity,
          // Compras cliente
          TipoFormaPagoEntity, CompraEntity, CompraPagoEntity, CompraDetalleEntity
        ],
        synchronize: false
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

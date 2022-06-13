import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductoManagerImpl } from '@productos/manager/impl/producto.manager.impl';
import { DetalleProductoOutDTO } from '@productos/models/dto/detalle.producto.out.dto';
import { ProductoEntity } from '@productos/models/entity/producto.entity';

@Controller("productos")
@ApiTags('Producto')
export class ProductoService {
    constructor(
        private productoManager: ProductoManagerImpl) { }

    @Post("registrar")
    @ApiOperation({ description: 'Crear un producto nuevo' })
    async registrarProducto(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoManager.registrarProducto(producto);
    }

    @Post("actualizar")
    async actualizarProducto(@Body() producto: ProductoEntity): Promise<ProductoEntity> {
        return this.productoManager.actualizarProducto(producto);
    }

    @Get("find-all")
    @ApiOperation({ description: 'Retorna todos los productos registrados' })
    async findAll(): Promise<Array<DetalleProductoOutDTO>> {
        return this.productoManager.findAll();
    }

    @Get("detalle/:id")
    async findDetalleProductoById(@Param('id', ParseIntPipe) idProducto: number): Promise<DetalleProductoOutDTO> {
        return this.productoManager.findDetalleProductoById(idProducto);
    }

    @Get("detalle/find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<DetalleProductoOutDTO>> {
        return this.productoManager.findDetalleProductoLikeNombre(nombre.toUpperCase());
    }
}

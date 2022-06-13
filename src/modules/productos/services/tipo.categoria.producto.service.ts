import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TipoCategoriaProductoManagerImpl } from '@productos/manager/impl/tipo.categoria.producto.manager.impl';
import { CategoriaRegistrarInDTO } from '@productos/models/dto/categoria.registrar.in.dto';
import { TipoCategoriaProductoEntity } from '@productos/models/entity/tipo.categoria.producto.entity';

@Controller("categoria-producto")
@ApiTags('Tipo categoria producto')
export class CategoriaProductoService {
    constructor(private tipoCategoriaProductoManager: TipoCategoriaProductoManagerImpl) { }

    @Post("registrar")
    @UsePipes(new ValidationPipe({ transform: true }))
    async registrarCategoriaProducto(@Body() categoriaProducto: CategoriaRegistrarInDTO): Promise<TipoCategoriaProductoEntity> {
        return this.tipoCategoriaProductoManager.registrarTipoCategoriaProducto(categoriaProducto);
    }

    @Get("find-all")
    async findAllCategoriaProducto(): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.tipoCategoriaProductoManager.findAll();
    }

    @Get("find-like/:nombre")
    async findLikeNombre(@Param('nombre') nombre: string): Promise<Array<TipoCategoriaProductoEntity>> {
        return this.tipoCategoriaProductoManager.findLikeNombre(nombre);
    }

}
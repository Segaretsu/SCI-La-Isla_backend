import { TipoFormaPagoManagerImpl } from "@compras.clientes/manager/impl/tipo.forma.pago.manager.impl";
import { TipoFormaPagoDTO } from "@compras.clientes/models/dto/tipo.forma.pago.in.dto";
import { TipoFormaPagoEntity } from "@compras.clientes/models/entity/tipo.forma.pago.entity";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("forma-pago")
@ApiTags('Formas de pago')
export class FormaPagoService {
    constructor(
        private tipoFormaPagoManagerImpl: TipoFormaPagoManagerImpl
    ) { }

    @Post("registrar")
    async registrarFormaPago(@Body() tipoFormaPago: TipoFormaPagoDTO): Promise<void> {
        return await this.tipoFormaPagoManagerImpl.registrarTipoFormaPago(tipoFormaPago);
    }

    @Get("find-all")
    async findAll(): Promise<Array<TipoFormaPagoEntity>> {
        return await this.tipoFormaPagoManagerImpl.findAllTipoFormaPago();
    }

}
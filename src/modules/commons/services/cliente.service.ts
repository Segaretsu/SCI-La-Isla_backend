import { ClienteManagerImpl } from "@commons/manager/impl/cliente.manager.impl";
import { ClienteInDTO } from "@commons/models/dto/cliente.in.dto";
import { ResponseDTO } from "@commons/models/dto/response.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { Body, Controller, Get, Param, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("cliente")
@ApiTags('cliente')
export class ClienteService {
    constructor(
        private clienteManager: ClienteManagerImpl
    ) { }

    @Put("registrar")
    @ApiOperation({ description: 'Registrar un nuevo cliente' })
    @UsePipes(new ValidationPipe({ transform: true }))
    async registrarCliente(@Body() cliente: ClienteInDTO): Promise<ResponseDTO> {
        return await this.clienteManager.registrarCliente(cliente);
    }

    @Get("findByIdentificacion/:tipoIdentificacion/:numeroIdentificacion")
    @ApiOperation({ description: 'Método encargado de retornar un cliente consultado, por medio de su identificación' })
    @UsePipes(new ValidationPipe({ transform: true }))
    async findByIdentificacion(@Param('tipoIdentificacion') tipoIdentificacion: number,
        @Param('numeroIdentificacion') numeroIdentificacion: string): Promise<ClienteEntity> {
        return await this.clienteManager.findByIdentificacion(tipoIdentificacion, numeroIdentificacion);
    }
}
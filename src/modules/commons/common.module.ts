import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Cliente
import { ClienteEntity } from '@commons/models/entity/cliente.entity';
import { ClienteService } from '@commons/services/cliente.service';
import { ClienteManagerImpl } from "./manager/impl/cliente.manager.impl";
import { ClienteDaoImpl } from "./dao/impl/cliente.dao.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([ClienteEntity]),
    ],
    controllers: [ClienteService],
    providers: [ClienteDaoImpl, ClienteManagerImpl,],
    exports: [TypeOrmModule, ClienteDaoImpl, ClienteManagerImpl],
})

export class CommonModule { }
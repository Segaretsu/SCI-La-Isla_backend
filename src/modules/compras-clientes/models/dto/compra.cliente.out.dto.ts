import { ClienteIdentificacionDTO } from "@commons/models/dto/cliente.identificacion.dto";
import { IdentificacionDTO } from "@commons/models/dto/identificacion.dto";
import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { CompraEntity } from "../entity/compra.entity";
import { PagoClienteDTO } from "./pago.cliente.dto";
import { ProductoCompraDTO } from "./producto.compra.dto";

export class CompraClienteOutDTO {
    compra: CompraEntity;
    cliente: ClienteEntity;
    empleado: IdentificacionDTO;
    productos: Array<ProductoCompraDTO>;
    pagos: Array<PagoClienteDTO>;
}
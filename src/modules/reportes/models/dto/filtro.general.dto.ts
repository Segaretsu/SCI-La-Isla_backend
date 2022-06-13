import { MagicNumber } from "@commons/util/constantes";

export class FiltroGeneralDTO {

    // identificadores
    idProducto: number;

    // Cantidad a mostrar
    cantidadResultados: number = MagicNumber.TRES;

    // filtro por fechas
    byFecha: boolean;
    byFechaInicio: string;
    byFechaFin: string;
}
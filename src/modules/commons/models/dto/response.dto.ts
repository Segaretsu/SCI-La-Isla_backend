export class ResponseDTO {
    codigo: number;
    descripcion: string;

    constructor(statusCode: number, message: string) {
        this.codigo = statusCode;
        this.descripcion = message;
    }
}
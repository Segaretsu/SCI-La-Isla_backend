import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("CLIENTE")
export class ClienteEntity {

    @PrimaryColumn({ name: "ID_CLIENTE" })
    idCliente: number;

    @Column({ name: "ID_TIPO_IDENTIFICACION" })
    idTipoIdentificacion: number;

    @Column({ name: "NUMERO_IDENTIFICACION" })
    numeroIdentificacion: string;

    @Column({ name: "PRIMER_NOMBRE" })
    primerNombre: string;

    @Column({ name: "SEGUNDO_NOMBRE" })
    segundoNombre: string;

    @Column({ name: "PRIMER_APELLIDO" })
    primerApellido: string;

    @Column({ name: "SEGUNDO_APELLIDO" })
    segundoApellido: string;

    @Column({ name: "DIRECCION" })
    direccion: string;

    @Column({ name: "CORREO" })
    correo: string;

    @Column({ name: "TELEFONO" })
    telefono: string;

    @Column({ name: "ACTIVO" })
    activo: string;

}
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("EMPLEADO")
export class EmpleadoEntity {

    @PrimaryColumn({ name: "ID_EMPLEADO" })
    idEmpleado: number;

    @Column({ name: "ID_TIPO_IDENTIFICACION" })
    idTipoIdentificacion: string;

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

    @Column({ name: "CORREO" })
    correo: string;

    @Column({ name: "TELEFONO" })
    telefono: string;

    @Column({ name: "ACTIVO" })
    activo: string;

    // Class methods
    getNombresCompletos(): string {
        return [
            this.primerNombre, this.segundoNombre,
            this.primerApellido, this.segundoApellido
        ].join(" ");
    }
}
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("COMPRA")
export class Compra {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({ name: "ID_COMPRA" })
    idCompra: number;

    @Column({ name: "ID_CLIENTE" })
    idCliente: number;

    @Column({ name: "FECHA_COMPRA" })
    fechaCompra: Date;

    @Column({ name: "VALOR_TOTAL" })
    valorTotal: number;

}
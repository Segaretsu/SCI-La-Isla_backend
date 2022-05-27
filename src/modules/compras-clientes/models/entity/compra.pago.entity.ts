import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity("COMPRA_PAGO")
export class CompraPagoEntity {

    @PrimaryGeneratedColumn({ name: "ID_COMPRA_PAGO"})
    idCompraPago: number;

    @Column({ name: "ID_COMPRA" })
    idCompra: number;

    @Column({ name: "ID_TIPO_FORMA_PAGO" })
    idTipoFormaPago: number;

    @Column({ name: "NUMERO_COMPROBANTE" })
    numeroComprobante: string;

    @Column({ name: "VALOR" })
    valor: number;

}
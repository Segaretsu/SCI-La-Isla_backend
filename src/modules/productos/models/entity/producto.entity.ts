import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("PRODUCTO")
export class ProductoEntity {

    @PrimaryColumn({ name: "ID_PRODUCTO" })
    idProducto: number;

    @Column({ name: "ID_TIPO_CATEGORIA_PRODUCTO" })
    idCategoriaProducto: number;

    @Column({ name: "NOMBRE" })
    nombre: string;

    @Column({ name: "STOCK" })
    stock: number;

    @Column({ name: "PRECIO_COMPRA" })
    precioCompra: number;

    @Column({ name: "PRECIO_VENTA" })
    precioVenta: number;

    @Column({ name: "ACTIVO" })
    activo: boolean;

}
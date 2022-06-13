import { Formats } from "@commons/util/dates.util";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";
import { ProductoMasVendidoDTO } from "@reportes/models/dto/producto.mas.vendido.dto";
import { EntityManager } from "typeorm";
import { ReporteProductoDao } from "../reporte.producto.dao";

@Injectable()
export class ReporteProductoDaoImpl implements ReporteProductoDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }


    async findMasVendidos(filtros?: FiltroGeneralDTO): Promise<ProductoMasVendidoDTO[]> {
        const params = [];
        let sql: string = `
            SELECT *
            FROM  (
                SELECT 
                    pr.id_producto AS idProducto,
                    tcp.id_tipo_categoria_producto AS idTipoCategoriaProducto,
                    tcp.nombre AS categoria,
                    pr.nombre AS nombre,
                    pr.precio_compra AS precioCompra,
                    pr.precio_venta AS precioVenta,
                    COUNT(code.id_producto) AS cantidadVentas,
                    SUM(code.cantidad) AS cantidadProductoVendido,
                    pr.precio_venta * SUM(code.cantidad) AS valorTotalVentas,
                    pr.precio_venta * SUM(code.cantidad) - pr.precio_compra * SUM(code.cantidad) AS gananciaTotal,
                    (pr.precio_venta - pr.precio_compra) AS gananciaPorProductoVendido
                FROM producto pr
                INNER JOIN compra_detalle code ON pr.id_producto = code.id_producto
                INNER JOIN compra copra ON code.id_compra = copra.id_compra
                INNER JOIN tipo_categoria_producto tcp ON pr.id_tipo_categoria_producto = tcp.id_tipo_categoria_producto
                ?filtroIdProducto
                ?filtroFecha
                GROUP BY pr.id_producto, pr.nombre, tcp.nombre, tcp.id_tipo_categoria_producto, pr.precio_compra, pr.precio_venta
                ORDER BY cantidadVentas DESC
            )
            WHERE ROWNUM <= :cantidadProductosMostrar
        `;
        sql = await this.applyGeneralFiltres(sql, params, filtros)
        const productosMasVendidos = await this.entityManager.query(sql, params);
        return productosMasVendidos;
    }

    async applyGeneralFiltres(sql: string, params: any[], filtros?: FiltroGeneralDTO): Promise<string> {
        let hasWhere = false;
        if (filtros.idProducto) {
            sql = sql.replace("?filtroIdProducto", `
                WHERE pr.id_producto = :idProducto
            `);
            params.push(filtros.idProducto);
            hasWhere = true;
        }

        if (filtros.byFecha) {
            sql = sql.replace("?filtroFecha", `
                ${hasWhere && 'AND' || 'WHERE'} copra.fecha_compra
                BETWEEN (TO_DATE(:byFechaInicio, '${Formats.BD_DATE_FORMAT}')) AND (TO_DATE(:byFechaFin, '${Formats.BD_DATE_FORMAT}'))
            `);
            params.push(filtros.byFechaInicio);
            params.push(filtros.byFechaFin);
        }
        // Eliminamos filtros no aplicados
        sql = sql.replace("?filtroIdProducto", "");
        sql = sql.replace("?filtroFecha", "");

        // Cantidad de resultados
        params.push(filtros.cantidadResultados || 1);
        return sql;
    }
}
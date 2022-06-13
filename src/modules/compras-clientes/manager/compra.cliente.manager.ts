import { CompraClienteInDTO } from "@compras.clientes/models/dto/compra.cliente.in.dto";
import { CompraClienteOutDTO } from "@compras.clientes/models/dto/compra.cliente.out.dto";
import { ResumenComprasInDTO } from "@compras.clientes/models/dto/resumen.compras.in.dto";
import { FiltroGeneralDTO } from "@reportes/models/dto/filtro.general.dto";

/**
 * Interface encargada de la lógica de negocio de las compras del cliente. <br>
 * @createAt 2022-03-25, 00:11:38
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
export interface CompraClienteManager {

    /**
     * Método encargado del registro de una compra de un cliente. <br>
     * @createAt 2022-03-25, 00:12:46
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {CompraClienteInDTO} compraCliente compra a registrar
     */
    registrarCompraCliente(compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO>;

    /**
     * Método encargado de eliminar la compra de un cliente. <br>
     * @createAt 2022-03-25, 00:13:50
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompra identificador de la compra a eliminar.
     */
    eliminarCompraByIdCompra(idCompra: number): Promise<number>;

    /**
     * Método encargado de editar una compra de un cliente. <br>
     * @createAt 2022-03-25, 00:15:51
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompra identificador de la compra a editar.
     * @param {CompraClienteInDTO} compraCliente detalle de la compra.
     */
    actualizarCompraCliente(idCompra: number, compraCliente: CompraClienteInDTO): Promise<CompraClienteInDTO>;

    /**
     * Método encargado de encontrar una compra dado su identificador. <br>
     * @createAt 2022-03-25, 00:17:23
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {number} idCompra identificador de la compra a encontrar.
     */
    findCompraClienteById(idCompra: number): Promise<CompraClienteInDTO>;

    /**
     * Método encargado de retornar el resumen de muchas compras. <br>
     * @createAt 2022-03-25, 00:18:28
     * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
     * @param {FiltroGeneralDTO} filtros 
     */
    findResumenCompras(filtros: FiltroGeneralDTO): Promise<Array<CompraClienteOutDTO>>;
}
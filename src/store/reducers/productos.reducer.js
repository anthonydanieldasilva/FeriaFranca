import { PRODUCTOS } from "../../data/Productos";
import { PRODUCTO_FILTRADO, PRODUCTO_SELECCIONADO } from "../actions/productos.action";

const inicialState = {
    productos: PRODUCTOS,
    productoFiltrado: [],
    selected: null,
}

const productosReducer = (state = inicialState, action) => {
    switch (action.type) {

        case PRODUCTO_SELECCIONADO:
            return {
                ...state,
                selected: state.productos.find(
                (producto) => producto.id === action.productoID)
            };

        case PRODUCTO_FILTRADO:
            return {
                ...state,
                productoFiltrado: state.productos.filter(
                (producto) => producto.categoria === action.categoriaID)
            };
        default:    
            return state;
    }
}

export default productosReducer
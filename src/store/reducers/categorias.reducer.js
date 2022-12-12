import { CATEGORIA_DE_PRODUCTOS } from "../../data/Categorias";
import { CATEGORIA_SELECCIONADA } from "../actions/categorias.action";

const inicialState = {
    categorias: CATEGORIA_DE_PRODUCTOS,
    selected: null,
};

const categoriasReducer =( state= inicialState, action )=> {
    switch (action.type) {

        case CATEGORIA_SELECCIONADA:

            const indexCategoria = state.categorias.findIndex(
                (cat) => cat.id === action.categoriaID
            );
            if (indexCategoria === -1) return state
            return {...state, selected: state.categorias [indexCategoria] };

        default:
            return state;
    }
}

export default categoriasReducer;

import { AGREGAR_ITEM, CONFIRMAR_CARRO, REMOVER_ITEM } from "../actions/carroCompras.action";

const inicialState = {
    items: [],
    total: 0,
}

const sumaTotaldeCarro = (list) => {
    list.map((item) => item.cantidad * item.precio).reduce((a, b) => a + b, 0)
}

const carroComprasReducer = (state = inicialState, action) => {

    switch (action.type) {
        case REMOVER_ITEM:
            const cleanCart = [...state.items].filter(
                (item) => item.id !== action.itemID
            );
            return { ...state, items: cleanCart, total: sumaTotaldeCarro(cleanCart) };
        case AGREGAR_ITEM:
            const indexItem = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            if (indexItem === -1) {
                const item = { ...action.item, cantidad: 1 };
                const updateCart = [...state.items, item];
                console.log(updateCart);
                return { ...state, items: updateCart, total: sumaTotaldeCarro(updateCart) };
            }
            const items = [...state.items].map((item) => {
                if (item.id === action.item.id) item.cantidad++;

                return item;
            });
            return { ...state, items, total: sumaTotaldeCarro(items) };
        case CONFIRMAR_CARRO:
            return { ...state, items: [], total: 0 };
        default:
            return state;
    }

}

export default carroComprasReducer
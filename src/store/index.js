import { createStore, combineReducers } from "redux";
import categoriasReducer from "./reducers/categorias.reducer";
import productosReducer from "./reducers/productos.reducer";

const RootReducer = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer
})

export default createStore (RootReducer);
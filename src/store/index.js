import { createStore, combineReducers , applyMiddleware } from "redux";
import categoriasReducer from "./reducers/categorias.reducer";
import productosReducer from "./reducers/productos.reducer";
import carroComprasReducer from "./reducers/carroCompras.reducer";
import thunk from "redux-thunk";
import OrderReducer from "./reducers/order.reducer";

const RootReducer = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    carroCompras: carroComprasReducer,
    orders: OrderReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));
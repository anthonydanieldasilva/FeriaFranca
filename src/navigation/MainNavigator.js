
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORES } from "../constants/Colors";
import PantallaDeCategorias from "../pantallas/PantallaDeCategorias";
import PantallaDeProductos from "../pantallas/PantallaDeProductos";
import PantallaDetalleDeProducto from "../pantallas/PantallaDetalleDeProducto";


const Stack = createNativeStackNavigator();

export default MainNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Categorias"
            screenOptions={{
                headerStyle: { backgroundColor: COLORES.primario },
                headerTintColor: COLORES.letras,
                headerTitleStyle: { fontFamily: "Expletus", fontSize: 40, fontWeight: "50" },
                headerTitleAlign: 'center',
            }} >

            <Stack.Screen name="Categorias" component={PantallaDeCategorias}
            options={{ title: "Feria Franca" }} />

            <Stack.Screen name="Productos" component={PantallaDeProductos}
            options={({ route }) => ({ title: route.params.nombre })} />

            <Stack.Screen name="DetalleDeProducto" component={PantallaDetalleDeProducto}
            options={({ route }) => ({ title: route.params.nombre })} />

        </Stack.Navigator>

    )
}
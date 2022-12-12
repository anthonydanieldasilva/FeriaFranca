
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORES } from "../constants/Colors";
import PantallaDeCarroCompras from "../pantallas/PantallaDeCarroCompras";


const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categorias"
            screenOptions={{
                headerStyle: { backgroundColor: COLORES.primario },
                headerTintColor: COLORES.letras,
                headerTitleStyle: { fontFamily: "Expletus", fontSize: 40, fontWeight: "50" },
                headerTitleAlign: 'center',
            }} >

            <Stack.Screen
                name="Carro"
                component={PantallaDeCarroCompras}
                options={{ title: "Carro De Compras" }}
            />
            
        </Stack.Navigator>


    )
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORES } from "../constants/Colors";
import PantallaDeOrdenes from "../pantallas/PantallaDeOrdenes";


const Stack = createNativeStackNavigator();

export default MainNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: { backgroundColor: COLORES.primario },
                headerTintColor: COLORES.letras,
                headerTitleStyle: { fontFamily: "Expletus", fontSize: 40, fontWeight: "50" },
                headerTitleAlign: 'center',
            }} >

            <Stack.Screen 
            name="Orders" 
            component={PantallaDeOrdenes}
            options={{ title: "Ordenes" }} 
            />

        </Stack.Navigator>

    )
}
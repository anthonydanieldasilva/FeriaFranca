import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';
import MainNavigator from './MainNavigator';

const BottomTabs = createBottomTabNavigator();

export default BottomTabsNavigator = () => {

    return (

        <NavigationContainer >

            <BottomTabs.Navigator
                initialRouteName="MainTab"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}>

                <BottomTabs.Screen
                    name="MainTab"
                    component={MainNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                                <Ionicons name="home" size={30} color="black" />
                                <Text>Tienda</Text>
                            </View>
                        ),
                    }}
                />

                <BottomTabs.Screen
                    name="CarroTab"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                                <Ionicons name="cart" size={30} color="black" />
                                <Text>Carro</Text>
                            </View>
                        ),
                    }}
                />

            </BottomTabs.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.20,
        shadowRadius: 0.80,
        elevation: 15,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 80,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
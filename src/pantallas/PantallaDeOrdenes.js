

import React, { useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector, connect, useDispatch } from "react-redux";
import GrillaDeOrdenes from "../components/GrillaDeOrdenes";
import { getOrders } from "../store/actions/order.action";

const PantallaDeOrdenes = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
  
    useEffect(() => {
      dispatch(getOrders());
    }, []);
  
    const handleEliminarOrden = () => {
      console.log("eliminar");
    };
  
    const renderItem = ({ item }) => (
      <GrillaDeOrdenes item={item} onDelete={handleEliminarOrden} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
    },
});

export default connect()(PantallaDeOrdenes);
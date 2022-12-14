import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const  GrillaCarroDeCompras = ({ item, onDelete }) => {

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.nombre}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text>Cantidad: {item.cantidad}</Text>
          <Text>Precio: ${item.precio}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={28} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GrillaCarroDeCompras;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    fontSize: 18,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
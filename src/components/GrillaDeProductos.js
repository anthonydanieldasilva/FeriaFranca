import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORES } from '../constants/Colors'


const GrillaDeProductos = ({ item, onSelected }) => {
  return (

    <TouchableOpacity onPress={() => onSelected(item)} >

      <View style={styles.itemDeProducto} >

        <View style={styles.container}>
          <View>
            <Text style={styles.tituloDeProducto} > {item.nombre} </Text>
          </View>

          <View>
            <Text style={styles.detalleDeProducto}>Presentacion: {item.presentacion}</Text>

            <Text style={styles.detalleDeProducto}>Precio de Venta: $ {item.precio}</Text>
          </View>
        </View>

      </View>

    </TouchableOpacity>

  )
}

export default GrillaDeProductos

const styles = StyleSheet.create({
  itemDeProducto: {
    flex: 1,
    margin: 12,
    height: 140,
  },
  container: {
    flex: 1,
    borderRadius: 12,
    shadowColor: COLORES.primario,
    shadowOpacity: 100,
    shadowOffset: { width: 15, height: 20 },
    shadowRadius: 15,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,

  },
  tituloDeProducto: {
    fontFamily: "Expletus",
    fontSize: 25,
    padding: 15,
  },
  detalleDeProducto: {
    fontSize: 16,
  },
})
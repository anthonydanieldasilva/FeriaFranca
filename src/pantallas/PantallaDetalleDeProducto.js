import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarItem } from '../store/actions/carroCompras.action'


const PantallaDetalleDeProducto = () => {

  const producto = useSelector((state) => state.productos.selected)

  useEffect(() => {
    console.log(producto);
  }, []);

  const dispatch = useDispatch();

  const handlerAgregarAlCarro = () => dispatch(agregarItem(producto));

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{producto.nombre}</Text>
        <Text style={styles.description}>Presentacion: {producto.presentacion}</Text>
        <Text style={styles.price}>${producto.precio}</Text>
        <View style={styles.button}>
          <Button title=" Agregar al Carro " color="#449a55" onPress={handlerAgregarAlCarro} />
        </View>
      </View>
    </View>
  )
}

export default PantallaDetalleDeProducto

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
  },
  description: {
    fontSize: 20,
    padding: 30,
  },
  price: {
    fontSize: 40,
    fontFamily: "Expletus",
  },
  button: {
    marginTop: 45,
  },
})
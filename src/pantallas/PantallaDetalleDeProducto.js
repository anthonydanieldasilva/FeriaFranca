import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const PantallaDetalleDeProducto = () => {

  const detalle = useSelector((state)=> state.detalle.selected)

  return (
    <View>
      <Text>PantallaDetalleDeProducto</Text>
    </View>
  )
}

export default PantallaDetalleDeProducto

const styles = StyleSheet.create({})
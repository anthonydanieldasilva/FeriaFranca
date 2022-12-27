import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  
  const sumaTotal = (list) =>
    list.map((item) => item.cantidad * item.precio).reduce((a, b) => a + b, 0);

const GrillaDeOrdenes = ({ item, onDelete }) => {
  return (
    <View>
    <View>
      <Text>{formatDay(item.date)}</Text>
      <Text>${sumaTotal(item.items)}</Text>
    </View>
  </View>
  )
}

export default GrillaDeOrdenes

const styles = StyleSheet.create({})
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import GrillaDeProductos from '../components/GrillaDeProductos'
import { useSelector, useDispatch, connect } from 'react-redux'
import { productoSeleccionado, productoFiltrado } from '../store/actions/productos.action'


const PantallaDeProductos = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const productoFiltrado = useSelector((state) => state.productos.productoSeleccionado)
  const productos = useSelector((state) => state.categorias.selected)


  useEffect(() => {
    dispatch(productoSeleccionado(productos.id))
  }, []); 

  const handleProductoSeleccionado = (item) => {
    dispatch (productoFiltrado (item.id) )
    navigation.navigate("Productos", { nombre: item.nombre })
  }

  const renderGrillaDeProductos = ({ item }) => (
    <GrillaDeProductos item={item} onSelected={handleProductoSeleccionado}/>
  )

  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={renderGrillaDeProductos}
    />
  )
}

export default connect () (PantallaDeProductos);

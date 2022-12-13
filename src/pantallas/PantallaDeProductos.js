import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import GrillaDeProductos from '../components/GrillaDeProductos'
import { useSelector, useDispatch, connect } from 'react-redux'
import { productoFiltrado, productoSeleccionado} from '../store/actions/productos.action'


const PantallaDeProductos = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const productosFiltrado = useSelector((state) => state.productos.productoSeleccionado)
  const productos = useSelector((state) => state.categorias.selected)


  useEffect(() => {
    dispatch(productoFiltrado(productos.id))

    console.log(productoFiltrado)

  }, []); 

  const handleProductoSeleccionado = (item) => {
    dispatch (productoSeleccionado (item.id) )
    navigation.navigate("DetalleDeProducto", { nombre: item.nombre })
  }

  const renderGrillaDeProductos = ({ item }) => (
    <GrillaDeProductos item={item} onSelected={handleProductoSeleccionado}/>
  )

  return (
    <FlatList
      data={productosFiltrado}
      keyExtractor={(item) => item.id}
      renderItem={renderGrillaDeProductos}
    />
  )
}

export default connect () (PantallaDeProductos);

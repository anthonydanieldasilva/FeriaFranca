import { StyleSheet, FlatList} from 'react-native'
import React from 'react'
import GrillaDeCategorias from '../components/GrillaDeCategorias'
import { useSelector, useDispatch, connect } from 'react-redux'
import { categoriaSeleccionada } from '../store/actions/categorias.action'


const PantallaDeCategorias = ({ navigation }) => {

  const categorias = useSelector((state)=> state.categorias.categorias );
  const dispatch = useDispatch();

  const handleCategoriaSeleccionada = (item) => {
    dispatch(categoriaSeleccionada (item.id));
    navigation.navigate("Productos",{nombre: item.titulo}) 
  }

  const renderGrillaDeCategorias = ({item}) => (
    <GrillaDeCategorias item={item} onSelected = {handleCategoriaSeleccionada}/>
  )
    
  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.id}
      renderItem={renderGrillaDeCategorias}
    />
  )
}

export default connect() (PantallaDeCategorias);

const styles = StyleSheet.create({})
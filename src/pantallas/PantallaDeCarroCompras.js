import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GrillaCarroDeCompras from '../components/GrillaCarroDeCompras'
import { useSelector, useDispatch } from 'react-redux'
import { removerItem, confirmarCarro} from '../store/actions/carroCompras.action'


const PantallaDeCarroCompras = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.carroCompras.items)
  const total = useSelector((state) => state.carroCompras.total)

  const handleConfirmar = () => { dispatch ( confirmarCarro ( items,total )) }

  console.log(total)

  const handleEliminaArticulo = (id) => {dispatch(removerItem(id)) }

  const renderCarroCompras = ({ item }) => (
    <GrillaCarroDeCompras item={item} onDelete={handleEliminaArticulo} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderCarroCompras}
        />
        
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmar}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default PantallaDeCarroCompras

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#fff",
      paddingBottom: 140,
    },
    list: {
      flex: 1,
    },
    footer: {
      padding: 25,
      borderTopColor: "#ccc",
      borderTopWidth: 2,
    },
    confirm: {
      backgroundColor: "#ccc",
      borderRadius: 10,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    total: {
      flexDirection: "row",
    },
    text: {
      fontSize: 18,
      padding: 8,
    },
  });
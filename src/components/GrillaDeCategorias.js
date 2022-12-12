import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GrillaDeCategorias = ({ item, onSelected }) => {
    return (

        <View style={styles.itemDeCategoria} >

            <TouchableOpacity
                style={{ ...styles.container, backgroundColor: item.color }}
                onPress={() => onSelected(item)} >

                <View>
                    <Text style={styles.tituloDeCategoria}> {item.titulo} </Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default GrillaDeCategorias

const styles = StyleSheet.create({
    itemDeCategoria: {
        flex: 1,
        margin: 18,
        height: 130,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 6,
        elevation: 6,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    tituloDeCategoria: {
        fontFamily: "Expletus",
        fontSize: 25,
    }
});
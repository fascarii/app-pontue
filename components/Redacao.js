import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Redacao = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.redacaoEsq}>
                <View style={styles.quadrado}></View>
                <Text style={styles.textoitem}>{props.text}</Text>
            </View>
            <View style={styles.circulo}></View>


        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    redacaoEsq: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    quadrado: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    textoitem: {
        maxWidth: '80%',
        fontSize: 16
    },
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5,
    },

});

export default Redacao;
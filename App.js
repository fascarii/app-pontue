import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Redacao from './components/Redacao';

export default function App() {

  const [redacao, setRedacao] = useState();
  const [redacaoItems, setRedacaoitems] = useState([]);

  const handleAddRedacao = () => {
    Keyboard.dismiss();
    setRedacaoitems([...redacaoItems, redacao])
    setRedacao(null);
  }

  const apagarRedacao = (index) => {
    let copiaItems = [...redacaoItems];
    copiaItems.splice(index, 1);
    setRedacaoitems(copiaItems);
  }

  return (
    <View style={styles.container}>
      {/*Redações*/}
      <View style={styles.redacoes}>
        <Text style={styles.tituloApp}>Lista de redações</Text>

        <View style={styles.items}>
          {/*A lista de redações ficará aqui */}
          {
            redacaoItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => apagarRedacao(index)}>
                  < Redacao text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/*<Redacao text={'Redação 1'} />
          <Redacao text={'Redação 2'} /> */}

        </View>
      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.escreverRedacao}>
        <TextInput style={styles.input} placeholder={'Escreva a redação'} value={redacao} onChangeText={text => setRedacao(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddRedacao()}>
          <View style={styles.adicionar}>
            <Text style={styles.textoadicionar}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  redacoes: {
    paddingTop: 80,
    paddingHorizontal: 20

  },
  tituloApp: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },

  escreverRedacao: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    width: 250,

  },
  adicionar: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textoadicionar: {
    textShadowColor:'#666'

  },


});

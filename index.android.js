//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {

  estiloTexto: {
    fontSize: 20,
    backgroundColor: '#08509B',
    paddingTop: 15,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center'
  },
  estiloTexto2: {
    fontSize: 20,
    backgroundColor: '#2A48FA',
    paddingTop: 15,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center'
  },
  estiloView:{
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column'
  }
};
//criar o componente
const App = () => {

  const { estiloTexto, estiloView, estiloTexto2 } = Estilos;

  return (
    <View style={ estiloView }>
      <Text style={ estiloTexto } >Frases do Dia</Text>
      <Text style={ estiloTexto2 } >Frases do Dia</Text>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 20,
    backgroundColor: '#08509B',
    paddingTop: 15,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center'
  }
};
//criar o componente
const App = () => {
  return (
    <Text style={ Estilos.estiloTexto} >Frases do Dia</Text>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',
    marginTop: 30
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
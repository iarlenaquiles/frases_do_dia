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
  }
};
//criar o componente
const App = () => {

  const { estiloTexto } = Estilos;

  return (
    <View>
      <Text style={ estiloTexto } >Frases do Dia</Text>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {

  principal:{
    flex: 1, // 1:1
    backgroundColor: 'cornflowerblue'
  },
  topo:{
    flex: 1,
    backgroundColor: 'brown'
  },
  conteudo:{
    flex: 1,
    backgroundColor: 'yellowgreen'
  },
  rodape:{
    flex: 1,
    backgroundColor: 'orangered'
  }
};
//criar o componente
const App = () => {

  const { principal, topo, conteudo, rodape } = Estilos;

  return (
    <View style={ principal }>
      <Text style={ topo } >Topo</Text>
      <Text style={ conteudo } >Conteúdo</Text>
      <Text style={ rodape } >Rodapé</Text>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
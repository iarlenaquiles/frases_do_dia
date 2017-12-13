//Import
import React from 'react';
import { Text, AppRegistry, View, Image } from 'react-native';

//Formatações
const Estilos = {

  /*principal:{
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  topo:{
    flex: 2,
    backgroundColor: 'brown'
  },
  conteudo:{
    flex: 8,
    backgroundColor: 'yellowgreen'
  },
  rodape:{
    flex: 1,
    backgroundColor: 'orangered'
  }*/

  principal:{
    paddingTop: 40
  }
};

//criar o componente
const App = () => {

  const { principal } = Estilos;

  return (
    <View style={ principal }>
      <Image source={ {uri: 'https://reactjs.org/logo-og.png'} }
      style={{width: 300, height: 300}} />
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
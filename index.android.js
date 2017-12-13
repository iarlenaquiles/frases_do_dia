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
    paddingTop: 10
  },
  imagem:{
    justifyContent: 'flex-end',
    padding: 5
  }
};

//criar o componente
const App = () => {

  const { principal, imagem } = Estilos;

  return (
    <View style={ principal }>
      <Image style={ imagem } source={ require('./imgs/uvas.png') } >
      <Text>Legenda para a foto</Text>
      </Image>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
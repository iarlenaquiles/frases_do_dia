//Import
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

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
  },
  botao:{
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8
  },
  textoBotao:{
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

//criar o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={ principal }>
      <TouchableOpacity style={ botao }>
        <Text style={ textoBotao }>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
//Import
import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

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

const botaoPressionado = () => {
  alert('Botão pressionado');
};

//criar o componente
const App = () => {

  const { principal } = Estilos;

  return (
    <View style={ principal }>
      <Button title="Clique aqui" color="#841584" accessbilityLabel="Clique para abrir as notícias" onPress={botaoPressionado} />
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
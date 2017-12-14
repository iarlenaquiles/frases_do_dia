//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frases
  var frases = Array();
  frases[0] = 'Se você tem um teto pra morar, uma família pra amar, amigos para conversar e saúde para desfrutar, então você não tem do que reclamar.';
  frases[1] = 'Existe dois tipos de dores no mundo: A dor que te machuca e a dor que te muda.';
  frases[2] = 'Em um mundo feito de aparências, feliz daquele que é feito de verdades.';
  frases[3] = 'Lembre-se que existem os finais felizes e os finais necessários.';
  frases[4] = 'Às vezes é preciso dar uma pausa. Ter um pouco de silêncio. Sair de cena. E esperar que a sabedoria do tempo termine o espetáculo.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};
//criar o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={ principal }>
      <Image source={ require('./imgs/logo.png') } />

      <TouchableOpacity onPress={gerarNovaFrase} style={ botao }>
        <Text style={ textoBotao }>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};
//renderizar para o dispositivo

AppRegistry.registerComponent('frases_do_dia', () => App);
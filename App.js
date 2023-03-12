import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Pessoa from './src/Pessoa';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      nome: 'Shiro',
      cargo: 'Desenvolvedor Front end',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
    {
      id: 2,
      nome: 'Luis Fernando',
      cargo: 'Administrador de Contadorias e Registros Fiscais',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
    {
      id: 3,
      nome: 'Marcelo Manoel',
      cargo: 'Administrador de Edifícios',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
    {
      id: 4,
      nome: 'Sara Larissa Jesus',
      cargo: 'Administrador de Empresas',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
    {
      id: 5,
      nome: 'Gabriel Ricardo Lucca Rezende',
      cargo: 'Administrador de Empresas de Hospedagem',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
    {
      id: 6,
      nome: 'Diogo Cláudio Marcelo Aragão',
      cargo: 'Auxiliar de Técnico de Controle de Qualidade',
      imagem:
        'https://maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.boxNav}>
        <Text style={styles.navText}> Seja Bem Vindo !</Text>
      </View>

      <FlatList data={feed} renderItem={({item}) => <Pessoa data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxNav: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7bb7e3',
  },
  navText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#FBFCFC',
  },
});

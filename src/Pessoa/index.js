import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Image
        source={{uri: props.data.imagem}}
        style={{width: 150, height: 150}}
      />
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      <Text style={styles.textCargo}>{props.data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#4e6b91',
    height: 250,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPessoa: {
    color: '#070707',
    fontSize: 20,
  },
  textCargo: {
    color: '#FFF',
    fontSize: 15,
  },
});

export default Pessoa;

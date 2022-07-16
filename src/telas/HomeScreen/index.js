import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.emote}
        source={require('../../assets/neutral.png')}
      />
      <Text style={styles.text}>
        Você ainda não tem nenhum registro diário. Para começar, toque no ícone
        de adicionar na tela.
      </Text>
    </View>
  );
}

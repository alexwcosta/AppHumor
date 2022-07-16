import React, {useState} from 'react';
import { Image,
        SafeAreaView,
        Text,
        TextInput,
        TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} 
      source={require('../../../assets/login.png')} />
      <TextInput style={styles.input}
        placeholder="email"
        placeholderTextColor="#a9a9a9"
      />
      <TextInput style={styles.input}
        placeholder="senha"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao}
        onPress={() => {navigation.navigate('HomeScreen')}}>
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function HumorTabStack() {
  return (
    <HumorStack.Navigatior>
      <HumorStack.Screen name="Home Screen" component={HomeScreen}/>
    </HumorStack.Navigatior>
  );
}
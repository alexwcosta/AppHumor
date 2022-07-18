import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/telas/LoginScreen';
import HomeScreen from './src/telas/HomeScreen'

const Stack = createStackNavigator()

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>;
}
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';

import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import theme from './src/global/styles/theme';
import Home from './src/screens/Home'
import Standard from './src/screens/Standard';
import Customize from './src/screens/Customize';
import { propsNavigationStack } from './src/models';


export default function App() {

  const Stack = createNativeStackNavigator<propsNavigationStack>()

  const [fontsLoader] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoader) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./src/assets/logo.png')} style={{ width: 300, height: 300 }} />
    </View>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Standard'
            component={Standard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Customize'
            component={Customize}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </ThemeProvider>
  );
}
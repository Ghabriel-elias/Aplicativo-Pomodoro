import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './src/screens/home/home';
import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'
import { ActivityIndicator } from 'react-native';
import ChooseConfig from './src/screens/chooseConfig/chooseConfig';

export default function App() {

  const Stack = createNativeStackNavigator()

  const [fontsLoader] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoader) {
    return <ActivityIndicator size={45} color={"#000"} />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name='ChooseConfig'
            component={ChooseConfig}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
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
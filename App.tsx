import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './src/screens/home/home';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'
import { ActivityIndicator } from 'react-native';

export default function App() {

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
      <StatusBar style='light' />
      <Home />
    </ThemeProvider>
  );
}
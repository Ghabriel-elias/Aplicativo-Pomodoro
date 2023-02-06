import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Main,
  ViewModal,
  WelcomeTexts,
  Title,
  Texts,
  Touchable,
  TextTouchable,
  TextFooter
} from "./styles";

export default function ChooseConfig() {

  const navigation: any = useNavigation()

  return (
    <Container>
      <WelcomeTexts>
        <Title>Seja bem vindo ao Pomo Focus</Title>
        <Texts> Antes de iniciarmos de fato, preciso que você defina qual configuração a ser utilizada</Texts>
      </WelcomeTexts>
      <Main>
        <Touchable onPress={() => navigation.navigate('Home')}>
          <TextTouchable >Padrão</TextTouchable>
        </Touchable>
        <Touchable>
          <TextTouchable>Personalizada</TextTouchable>
        </Touchable>
      </Main>
      <ViewModal>
        <TouchableOpacity>
          <TextFooter>Como funciona?</TextFooter>
        </TouchableOpacity>
      </ViewModal>
    </Container>
  )
}
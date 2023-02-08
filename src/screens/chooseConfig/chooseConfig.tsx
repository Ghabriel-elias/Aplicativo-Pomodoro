import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  AreaModal,
  ModalContainer,
  Main,
  ViewModal,
  WelcomeTexts,
  Title,
  Texts,
  Touchable,
  TextTouchable,
  TextFooter,
  ContentModal,
  AreaClose,
  CloseTouchable,
  XForClose,
  ViewTextsModal,
  TitleModal,
  TextModal
} from "./styles";

export default function ChooseConfig() {

  const [containerBg, setContainerBg] = useState(1)

  const [modalVisible, setModalVisible] = useState(false)

  const navigation: any = useNavigation()

  function showModal() {
    setModalVisible(true)
    setContainerBg(0.8)
  }

  function hideModal() {
    setModalVisible(false)
    setContainerBg(1)
  }

  return (
    <Container style={{ opacity: containerBg }}>
      <ModalContainer transparent={true} animationType='slide' visible={modalVisible}>
        <AreaModal>
          <ContentModal>
            <AreaClose>
              <CloseTouchable onPress={() => hideModal()}>
                <XForClose>X</XForClose>
              </CloseTouchable>
            </AreaClose>
            <ViewTextsModal>
              <TitleModal>Padrão:</TitleModal>
              <TextModal>Com a configuração padrão você vai ter ciclos comuns da pomodoro com 25 minutos de foco, 5 de intervalo curto e 15 de intervalo longo.</TextModal>
            </ViewTextsModal>
            <ViewTextsModal>
              <TitleModal>Personalizada:</TitleModal>
              <TextModal>Com a configuração personalizada você vai ter ciclos comuns da pomodoro, porém poderá definir quantos minutos vai ter de foco, intervalo curto e intervalo longo. Mas com um limite de tempo de 30 minutos para cada.</TextModal>
            </ViewTextsModal>
          </ContentModal>
        </AreaModal>
      </ModalContainer>
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
        <TouchableOpacity onPress={() => showModal()}>
          <TextFooter>Como funciona?</TextFooter>
        </TouchableOpacity>
      </ViewModal>
    </Container>
  )
}
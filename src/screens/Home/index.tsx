import React, { useState } from "react";
import { TouchableOpacity, Linking, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../models";
import {
  Container,
  AreaModal,
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
  TextModal,
  CopyRight,
  ViewCopy
} from "./styles";

export default function ChooseConfig() {

  const [opacityContainer, setOpacityContainer] = useState(true)

  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation<PropsStack>()

  function showModal() {
    setModalVisible(true)
    setOpacityContainer(false)
  }

  function hideModal() {
    setModalVisible(false)
    setOpacityContainer(true)
  }

  return (
    <Container opacity={opacityContainer}>
      <Modal transparent={true} animationType='slide' visible={modalVisible}>
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
      </Modal>
      <WelcomeTexts>
        <Title>Seja bem vindo ao Pomo Focus</Title>
        <Texts>Antes de iniciarmos de fato, preciso que você defina qual configuração a ser utilizada</Texts>
      </WelcomeTexts>
      <Main>
        <Touchable onPress={() => navigation.navigate('Standard')}>
          <TextTouchable >Padrão</TextTouchable>
        </Touchable>
        <Touchable onPress={() => navigation.navigate('Customize')}>
          <TextTouchable >Personalizada</TextTouchable>
        </Touchable>
      </Main>
      <ViewModal>
        <TouchableOpacity onPress={() => showModal()}>
          <TextFooter>Como funciona?</TextFooter>
        </TouchableOpacity>
      </ViewModal>
      <ViewCopy>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ghabriel-elias/')}>
          <CopyRight>Desevolvido por ©Ghabriel Elias</CopyRight>
        </TouchableOpacity>
      </ViewCopy>
    </Container>
  )
}
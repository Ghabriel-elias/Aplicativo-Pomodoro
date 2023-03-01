import React, { useState } from "react";
import { TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PropsStack } from "../../models";
import { SafeArea } from "../Standard/style";
import { LinkedinLink } from "../../components/LinkedinLink";
import * as S from "./styles";

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
    <SafeArea colorBg='pomodoro'>
      <S.Container opacity={opacityContainer}>
        <Modal transparent={true} animationType='slide' visible={modalVisible}>
          <S.AreaModal>
            <S.ContentModal>
              <S.AreaClose>
                <S.CloseTouchable onPress={() => hideModal()}>
                  <S.XForClose>X</S.XForClose>
                </S.CloseTouchable>
              </S.AreaClose>
              <S.ViewTextsModal>
                <S.TitleModal>Padrão:</S.TitleModal>
                <S.TextModal>Com a configuração padrão você vai ter ciclos comuns da pomodoro com 25 minutos de foco, 5 de intervalo curto e 15 de intervalo longo.</S.TextModal>
              </S.ViewTextsModal>
              <S.ViewTextsModal>
                <S.TitleModal>Personalizada:</S.TitleModal>
                <S.TextModal>Com a configuração personalizada você vai ter ciclos comuns da pomodoro, porém poderá definir quantos minutos vai ter de foco, intervalo curto e intervalo longo. Mas com um limite de tempo de 30 minutos para cada.</S.TextModal>
              </S.ViewTextsModal>
            </S.ContentModal>
          </S.AreaModal>
        </Modal>
        <S.WelcomeTexts>
          <S.Title>Seja bem vindo ao Pomo Focus</S.Title>
          <S.Texts>Antes de iniciarmos de fato, preciso que você defina qual configuração a ser utilizada</S.Texts>
        </S.WelcomeTexts>
        <S.Main>
          <S.Touchable onPress={() => navigation.navigate('Standard')}>
            <S.TextTouchable>Padrão</S.TextTouchable>
          </S.Touchable>
          <S.Touchable onPress={() => navigation.navigate('Customize')}>
            <S.TextTouchable>Personalizada</S.TextTouchable>
          </S.Touchable>
        </S.Main>
        <S.ViewModal>
          <TouchableOpacity onPress={() => showModal()}>
            <S.TextFooter>Como funciona?</S.TextFooter>
          </TouchableOpacity>
        </S.ViewModal>
        <S.ViewCopy>
          <LinkedinLink />
        </S.ViewCopy>
      </S.Container>
    </SafeArea>
  )
}
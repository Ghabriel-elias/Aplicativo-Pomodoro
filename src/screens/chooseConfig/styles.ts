import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.initiaisScreens};
`

export const WelcomeTexts = styled.View`
  flex: 1.2;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(50)}px;
  margin-bottom: ${RFValue(35)}px;
`

export const Texts = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  width: 80%;
`

export const Main = styled.View`
 flex: 1;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
`

export const Touchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.text};
  width: 70%;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(15)}px;
  border-radius: 10px;
`

export const TextTouchable = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.initiaisScreens};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  padding: ${RFValue(5)}px ${RFValue(0)}px;
`

export const ViewModal = styled.View`
 flex: 1;
 justify-content: flex-start;
 align-items: center;
`

export const TextFooter = styled.Text`
 font-size: ${RFValue(20)}px;
 color: ${({ theme }) => theme.colors.text};
 font-family: ${({ theme }) => theme.fonts.semiBold};
`
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
interface OpacityContent {
  opacity: true | false
}

export const Container = styled.View<OpacityContent>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.pomodoro};
  ${(props => props.opacity === true && css`
    opacity: 1;
  `)}
  ${(props => props.opacity === false && css`
    opacity: 0.8;
  `)}
`

export const AreaModal = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items:center; 
  `

export const ContentModal = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  width: 100%;
  height: 70%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const AreaClose = styled.View`
  justify-content: center;
  align-items: flex-end;
`

export const CloseTouchable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(10)}px;
  margin-right: ${RFValue(10)}px;
  border-radius: ${RFValue(25)}px;
  padding: ${RFValue(5)}px ${RFValue(9)}px;
`

export const XForClose = styled.Text`
  color: ${({ theme }) => theme.colors.pomodoro};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const ViewTextsModal = styled.View`
  flex: 0.4;
  margin-left: ${RFValue(10)}px;
  width: 90%;
`

export const TitleModal = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.Bold};
`

export const TextModal = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const TextFooter = styled.Text`
 font-size: ${RFValue(16)}px;
 color: ${({ theme }) => theme.colors.text};
 font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const WelcomeTexts = styled.View`
  flex: 1.2;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(50)}px;
  margin-bottom: ${RFValue(35)}px;
  text-align: center;
`

export const Texts = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
  width: 80%;
  text-align: center;
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
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.pomodoro};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  padding: ${RFValue(5)}px ${RFValue(0)}px;
`

export const ViewModal = styled.View`
 flex: 0.5;
 justify-content: flex-start;
 align-items: center;
`

export const ViewCopy = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`
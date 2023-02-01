import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AreaTexts = styled.View`
  flex: 0.2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Main = styled.View`
  flex:1 ;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.pomodoroCont};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Indicators = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const IndicatorTouchble = styled.TouchableOpacity`
  padding: 8px 9px;
  margin-top: ${RFValue(20)}px;
  border-radius: 5px;
`

export const Indicator = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`

export const Cont = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Bold};
  font-size: ${RFValue(53)}px;
`

export const StartTouchble = styled.TouchableOpacity`
  margin-bottom: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.text};
  padding: 5px ${RFValue(58)}px;
  border-radius: 5px;
  `

export const Start = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(28)}px;
`

export const CopyRight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`
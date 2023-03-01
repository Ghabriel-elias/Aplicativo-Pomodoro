import React, { useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ViewMinutes,
  Minutes,
  ButtonConfirm,
  MinutesCard,
  IndicatorsMinute,
  Cards,
  Title,
  AreaCardsChangeMinute,
  CardsChangeMinute,
  TextIndicators,
  SpaceChangeMinute,
  TouchableIncrementeDescrement,
  Number,
  TextTouchable,
  Touchable,
  TextTouchableConfirm,
  CopyRight
} from './style'
import { PropsStack } from '../../models';


export default function Customize() {

  const navigation = useNavigation<PropsStack>()

  const [pomodoroMinutes, setPomodoroMinutes]: any = useState('00')

  const [shorMinutes, setShorMinutes]: any = useState('00')

  const [longMinutes, setLongMinutes]: any = useState('00')


  function descrement(element: any) {
    if (element === 'pomodoroMinutes') {
      if (pomodoroMinutes <= 10 && pomodoroMinutes > 0) {
        const format = `0${parseFloat(pomodoroMinutes) - 1}`
        setPomodoroMinutes(format)
      } else if (pomodoroMinutes === '00' || pomodoroMinutes == 0) {
        setPomodoroMinutes('00')
      } else {
        setPomodoroMinutes(pomodoroMinutes - 1)
      }
    } else if (element === 'shorMinutes') {
      if (shorMinutes <= 10 && shorMinutes > 0) {
        const format = `0${parseFloat(shorMinutes) - 1}`
        setShorMinutes(format)
      } else if (shorMinutes === '00' || shorMinutes == 0) {
        setShorMinutes('00')
      } else {
        setShorMinutes(shorMinutes - 1)
      }
    } else if (element === 'longMinutes') {
      if (longMinutes <= 10 && longMinutes > 0) {
        const format = `0${parseFloat(longMinutes) - 1}`
        setLongMinutes(format)
      } else if (longMinutes === '00' || longMinutes == 0) {
        setLongMinutes('00')
      } else {
        setLongMinutes(longMinutes - 1)
      }
    }
  }

  function increment(element: any) {
    if (element == 'pomodoroMinutes') {
      if (pomodoroMinutes < 9) {
        const format = `0${parseFloat(pomodoroMinutes) + 1}`
        setPomodoroMinutes(format)
      } else if (pomodoroMinutes === 30) {
        setPomodoroMinutes(30)
      } else {
        setPomodoroMinutes(parseFloat(pomodoroMinutes) + 1)
      }

    } else if (element == 'shorMinutes') {
      if (shorMinutes < 9) {
        const format = `0${parseFloat(shorMinutes) + 1}`
        setShorMinutes(format)
      } else if (shorMinutes === 30) {
        setShorMinutes(30)
      } else {
        setShorMinutes(parseFloat(shorMinutes) + 1)
      }
    } else if (element == 'longMinutes') {
      if (longMinutes < 9) {
        const format = `0${parseFloat(longMinutes) + 1}`
        setLongMinutes(format)
      } else if (longMinutes === 30) {
        setLongMinutes(30)
      } else {
        setLongMinutes(parseFloat(longMinutes) + 1)
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.pomodoro }}>
      <Container>
        <ViewMinutes>
          <MinutesCard>
            <Cards>{pomodoroMinutes}</Cards>
            <Cards>{shorMinutes}</Cards>
            <Cards>{longMinutes}</Cards>
          </MinutesCard>
          <MinutesCard>
            <IndicatorsMinute>Pomodoro</IndicatorsMinute>
            <IndicatorsMinute>Short Break</IndicatorsMinute>
            <IndicatorsMinute>Long Break</IndicatorsMinute>
          </MinutesCard>
        </ViewMinutes>
        <Minutes>
          <Title>Personalize:</Title>
          <AreaCardsChangeMinute>
            <CardsChangeMinute>
              <TextIndicators>Pomodoro:    </TextIndicators>
              <SpaceChangeMinute>
                <TouchableIncrementeDescrement onPress={() => descrement('pomodoroMinutes')}>
                  <TextTouchable>-</TextTouchable>
                </TouchableIncrementeDescrement>
                <Number>{pomodoroMinutes}</Number>
                <TouchableIncrementeDescrement onPress={() => increment('pomodoroMinutes')}>
                  <TextTouchable>+</TextTouchable>
                </TouchableIncrementeDescrement>
              </SpaceChangeMinute>
            </CardsChangeMinute>
            <CardsChangeMinute>
              <TextIndicators>Short Break:</TextIndicators>
              <SpaceChangeMinute>
                <TouchableIncrementeDescrement onPress={() => descrement('shorMinutes')}>
                  <TextTouchable>-</TextTouchable>
                </TouchableIncrementeDescrement>
                <Number>{shorMinutes}</Number>
                <TouchableIncrementeDescrement onPress={() => increment('shorMinutes')}>
                  <TextTouchable>+</TextTouchable>
                </TouchableIncrementeDescrement>
              </SpaceChangeMinute>
            </CardsChangeMinute>
            <CardsChangeMinute>
              <TextIndicators>Long Break:</TextIndicators>
              <SpaceChangeMinute>
                <TouchableIncrementeDescrement onPress={() => descrement('longMinutes')}>
                  <TextTouchable>-</TextTouchable>
                </TouchableIncrementeDescrement>
                <Number>{longMinutes}</Number>
                <TouchableIncrementeDescrement onPress={() => increment('longMinutes')}>
                  <TextTouchable>+</TextTouchable>
                </TouchableIncrementeDescrement>
              </SpaceChangeMinute>
            </CardsChangeMinute>
          </AreaCardsChangeMinute>
        </Minutes>
        <ButtonConfirm>
          <Touchable onPress={() => navigation.navigate('Standard', {
            pomodoro: pomodoroMinutes,
            shortBreak: shorMinutes,
            longBreak: longMinutes
          })}>
            <TextTouchableConfirm>Confirmar</TextTouchableConfirm>
          </Touchable>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ghabriel-elias/')}>
            <CopyRight>Desevolvido por ©Ghabriel Elias</CopyRight>
          </TouchableOpacity>
        </ButtonConfirm>
      </Container >
    </SafeAreaView >
  );
}
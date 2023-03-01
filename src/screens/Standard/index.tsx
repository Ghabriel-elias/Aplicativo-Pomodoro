import React, { useEffect, useState } from 'react';
import { Alert, Linking, TouchableOpacity } from 'react-native';

import {
  SafeArea,
  AreaTexts,
  Main,
  Container,
  Indicators,
  Indicator,
  IndicatorTouchble,
  Cont,
  Start,
  StartTouchble,
  CopyRight,
} from './style'

let timer: any

let ss = 0

let mm = 25

export default function Standard({ route }: any) {

  const [pomodoroMinutes, setPomodoroMinutes] = useState('')

  useEffect(() => {
    if (route.params?.pomodoro) {

    }
  }, [])

  const [BgColor, setBgColor] = useState('pomodoro')

  const [pomodoroIndicator, setPomodoroIndicator] = useState('active')
  const [shortIndicator, setShortIndicator] = useState('desactive')
  const [longIndicator, setLongIndicator] = useState('desactive')

  const [textButton, setTextButton] = useState('Start')

  const [contagem, setContagem] = useState('25:00')

  const [cont, setCont] = useState(1)
  const [pomodoroForShort, setPomodoroForLong] = useState(1)

  function changeForPomodoro() {

    setBgColor('pomodoro')

    setPomodoroIndicator('active')
    setShortIndicator('desactive')
    setLongIndicator('desactive')

    clearInterval(timer)
    setContagem('25:00')
    setTextButton('Start')
    ss = 0
    mm = 25

  }

  function changeForShort() {

    setBgColor('short')

    setShortIndicator('active')
    setPomodoroIndicator('desactive')
    setLongIndicator('desactive')

    clearInterval(timer)
    setContagem('05:00')
    setTextButton('Start')
    ss = 0
    mm = 5
  }

  function changeForLong() {

    setBgColor('long')

    setLongIndicator('active')
    setPomodoroIndicator('desactive')
    setShortIndicator('desactive')

    clearInterval(timer)
    setTextButton('Start')
    setContagem('15:00')

    ss = 0
    mm = 15
  }

  function start() {
    if (textButton === 'Stop') {
      setTextButton('Start')
      clearInterval(timer)
      timer = null
    } else {
      timer = setInterval(() => {

        if (ss === 0) {
          ss = 60
          mm--
        }
        ss--

        if (mm === 0 && ss === 0) {
          setCont(cont + 1)
          if (cont === 7) {
            changeForLong()
            setCont(1)
            setPomodoroForLong(0)
          } else if (pomodoroForShort === 0 || pomodoroForShort === 2 || pomodoroForShort === 4 || pomodoroForShort === 6) {
            changeForPomodoro()
            setPomodoroForLong(pomodoroForShort + 1)
          } else if (pomodoroForShort == 1 || pomodoroForShort === 3 || pomodoroForShort === 5) {
            changeForShort()
            setPomodoroForLong(pomodoroForShort + 1)
          }
        }

        let format = (mm < 10 ? `0${mm}` : mm) + ":" + (ss < 10 ? `0${ss}` : ss)
        setContagem(format)
      }, 1000)
      setTextButton('Stop')
    }
  }

  return (
    <SafeArea colorBg={BgColor}>
      <Container colorBg={BgColor}>
        <Main colorBg={BgColor}>
          <Indicators>
            <IndicatorTouchble onPress={changeForPomodoro} colorTextBg={pomodoroIndicator}>
              <Indicator colorTextBg={pomodoroIndicator}>Pomodoro</Indicator>
            </IndicatorTouchble>
            <IndicatorTouchble onPress={changeForShort} colorTextBg={shortIndicator}>
              <Indicator colorTextBg={shortIndicator}>Short Break</Indicator>
            </IndicatorTouchble>
            <IndicatorTouchble onPress={changeForLong} colorTextBg={longIndicator}>
              <Indicator colorTextBg={longIndicator}>Long Break</Indicator>
            </IndicatorTouchble>
          </Indicators>
          <Cont>{contagem}</Cont>
          <StartTouchble onPress={start}>
            <Start colorBg={BgColor}>{textButton}</Start>
          </StartTouchble>
        </Main>
        <AreaTexts>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ghabriel-elias/')}>
            <CopyRight>Desevolvido por ©Ghabriel Elias</CopyRight>
          </TouchableOpacity>
        </AreaTexts>
      </Container >
    </SafeArea >
  );
}
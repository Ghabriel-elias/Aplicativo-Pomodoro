import React, { useState } from 'react';
import theme from '../../global/styles/theme';

import { Linking, TouchableOpacity } from 'react-native';

import {
  AreaTexts,
  Main,
  Container,
  Indicators,
  Indicator,
  IndicatorTouchble,
  Cont,
  Start,
  StartTouchble,
  CopyRight
} from './style'

let timer: any

let ss = 0

let mm = 25

export default function Home() {

  const [pomodororBg, setpomodororBg] = useState(theme.colors.backgroundTexts)
  const [shortBg, setshortBg] = useState(theme.colors.pomodoroCont)
  const [longBg, setlongBg] = useState(theme.colors.pomodoroCont)

  const [pomodoroFontFamily, setpomodoroFontFamily] = useState(theme.fonts.Bold)
  const [shortFontFamily, setshortFontFamily] = useState(theme.fonts.regular)
  const [longFontFamily, setlongFontFamily] = useState(theme.fonts.regular)

  const [textButton, setTextButton] = useState('Start')

  const [backgroundContainer, setBackgroundContainer] = useState(theme.colors.pomodoro)
  const [backgroundMain, setBackgroundMain] = useState(theme.colors.pomodoroCont)

  const [contagem, setContagem] = useState('25:00')

  const [verification, setVerification] = useState('pomodoro')

  function changeForPomodoro() {

    setVerification('pomodoro')

    setpomodororBg(theme.colors.backgroundTexts)
    setshortBg(theme.colors.backgroundTextsTransparente)
    setlongBg(theme.colors.backgroundTextsTransparente)

    setpomodoroFontFamily(theme.fonts.Bold)
    setshortFontFamily(theme.fonts.regular)
    setlongFontFamily(theme.fonts.regular)

    setBackgroundContainer(theme.colors.pomodoro)
    setBackgroundMain(theme.colors.pomodoroCont)

    clearInterval(timer)
    setContagem('25:00')
    setTextButton('Start')
    ss = 0
    mm = 25
  }

  function changeForShort() {

    setVerification('short')

    setshortBg(theme.colors.backgroundTexts)
    setpomodororBg(theme.colors.backgroundTextsTransparente)
    setlongBg(theme.colors.backgroundTextsTransparente)


    setshortFontFamily(theme.fonts.Bold)
    setpomodoroFontFamily(theme.fonts.regular)
    setlongFontFamily(theme.fonts.regular)

    setBackgroundContainer(theme.colors.shortBreak)
    setBackgroundMain(theme.colors.shortBrakCont)

    clearInterval(timer)
    setContagem('05:00')
    setTextButton('Start')
    ss = 0
    mm = 5
  }

  function changeForLong() {

    setVerification('long')

    setlongBg(theme.colors.backgroundTexts)
    setpomodororBg(theme.colors.backgroundTextsTransparente)
    setshortBg(theme.colors.backgroundTextsTransparente)


    setlongFontFamily(theme.fonts.Bold)
    setpomodoroFontFamily(theme.fonts.regular)
    setshortFontFamily(theme.fonts.regular)

    setBackgroundContainer(theme.colors.longBreak)
    setBackgroundMain(theme.colors.longBreakCont)

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
          ss = 59
          mm--
        }
        ss--

        let format = (mm < 10 ? `0${mm}` : mm) + ":" + (ss < 10 ? `0${ss}` : ss)
        setContagem(format)
      }, 100)
      setTextButton('Stop')
    }
  }

  return (
    <Container style={{ backgroundColor: backgroundContainer }}>
      <AreaTexts></AreaTexts>
      <Main style={{ backgroundColor: backgroundMain }}>
        <Indicators>
          <IndicatorTouchble onPress={changeForPomodoro} style={{ backgroundColor: pomodororBg }}>
            <Indicator style={{ fontFamily: pomodoroFontFamily }}>Pomodoro</Indicator>
          </IndicatorTouchble>
          <IndicatorTouchble onPress={changeForShort} style={{ backgroundColor: shortBg }}>
            <Indicator style={{ fontFamily: shortFontFamily }}>Short Break</Indicator>
          </IndicatorTouchble>
          <IndicatorTouchble onPress={changeForLong} style={{ backgroundColor: longBg }}>
            <Indicator style={{ fontFamily: longFontFamily }}>Long Break</Indicator>
          </IndicatorTouchble>
        </Indicators>
        <Cont>{contagem}</Cont>
        <StartTouchble onPress={start}>
          <Start style={{ color: backgroundMain }}>{textButton}</Start>
        </StartTouchble>
      </Main>
      <AreaTexts>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ghabriel-elias/')}>
          <CopyRight>Desevolvido por ©Ghabriel Elias</CopyRight>
        </TouchableOpacity>
      </AreaTexts>
    </Container >
  );
}
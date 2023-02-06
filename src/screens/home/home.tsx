import React, { useEffect, useState } from 'react';
import theme from '../../global/styles/theme';

import { Linking, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

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
  CopyRight,
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

  const [cont, setCont] = useState(1)
  const [pomodoroForShort, setPomodoroForLong] = useState(1)

  function changeForPomodoro() {

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
    <Container style={{ backgroundColor: backgroundContainer }}>
      <SafeAreaView>
        {/* <TouchableBack onPress={() => navigation.goBack()}>
            <ArrowBack>←</ArrowBack>
          </TouchableBack> */}
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
      </SafeAreaView >
    </Container >
  );
}
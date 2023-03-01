import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined
  Standard: {
    pomodoro?: string,
    shortBreak?: string,
    longBreak?: string
  }
  Customize: undefined
}

export type PropsStack = NativeStackNavigationProp<propsNavigationStack>
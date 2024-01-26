import React, {createContext, useEffect} from 'react';
import {lightColors, darkColors} from './color';
import {useColorScheme} from 'react-native';
export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = props => {
  const colorScheme = useColorSchem();
  const [isDark, setIsDark] = useState(colorScheme == 'dark');
  useEffect(() => {
    setIsDark(colorScheme == 'dark');
  }, [colorScheme]);
};

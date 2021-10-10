import React from 'react';
import { useFonts } from '@use-expo/font';
import { useColorScheme } from 'react-native-appearance';

import { FONTS } from './constants/typography';
import { THEME_DARK, THEME_LIGHT } from './constants/theme';
import Context from './context';

import AppNavigation from './AppNavigation';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? THEME_DARK : THEME_LIGHT;
  let [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) return null;

  return (
    <Context.Provider value={{
      theme,
      toggleTheme(theme) { 
        this.theme = theme;
      }
    }}>
      <AppNavigation />
    </Context.Provider>
  );
};

export default App;
import React from 'react';
import { THEME_LIGHT, THEME_DARK } from './constants/theme';

export type ThemeType = typeof THEME_LIGHT | typeof THEME_DARK;

type ContextType = {
  theme: ThemeType;
  toggleTheme(theme: ThemeType): void;
};

const context = React.createContext<ContextType>({
  theme: THEME_LIGHT,
  toggleTheme() {}
});

export default context;
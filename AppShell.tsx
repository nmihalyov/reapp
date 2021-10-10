import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

import type { ThemeType } from './context';
import { THEMES, THEME_DARK, THEME_LIGHT } from './constants/theme';

import context from './context';

const AppShell: React.FC<{
  children: React.ReactNode,
  style?: ViewStyle
}> = props => {  
  const themeObject = useContext(context);
  const { children, style } = props;

  const theme = useColorScheme() === 'dark' ? THEME_DARK : THEME_LIGHT;
  themeObject.toggleTheme(theme);

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'default' : theme === THEME_LIGHT ? 'dark-content' : 'light-content'} />
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={64}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppShell;

const getStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES[theme].background.default
  }
});
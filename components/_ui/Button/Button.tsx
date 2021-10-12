import React, { useContext } from 'react';
import type { TextProps, ViewStyle } from 'react-native';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Platform } from 'react-native';

import type { ThemeType } from '../../../context';
import context from '../../../context';

import { THEMES } from '../../../constants/theme';
import { TYPOGRAPHY } from '../../../constants/typography';

const Button: React.FC<{
  title: string;
  small?: boolean;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  buttonOnPress: () => void;
}> = props => {
  const { title, small, style, disabled, loading, buttonOnPress } = props;
  const { theme } = useContext(context);

  const styles = getStyles(theme);

  return (
    <View pointerEvents={(disabled || loading) ? 'none' : 'auto'}>
      <TouchableOpacity activeOpacity={0.7} onPress={buttonOnPress}>
        {loading ?
          <ActivityIndicator style={[small ? styles.buttonSmall : styles.button, styles.buttonDisabled, style]} /> :
          <Text
            style={[small ? (styles.buttonSmall as TextProps) : styles.button, disabled && styles.buttonDisabled, style]}>
            {title}
          </Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
  button: {
    overflow: 'hidden',
    height: 56,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: THEMES[theme].accent,
    textAlign: 'center',
    color: THEMES[theme].onAccent,
    ...TYPOGRAPHY.button.default,
    lineHeight: Platform.OS === 'ios' ? 0 : 16
  },
  buttonSmall: {
    height: 32,
    padding: 8,
    color: THEMES[theme].surface.onAccent,
    textAlign: 'center',
    ...TYPOGRAPHY.button.small,
    lineHeight: Platform.OS === 'ios' ? 0 : 16
  },
  buttonDisabled: {
    backgroundColor: THEMES[theme].surface.secondary,
    color: THEMES[theme].surface.onAccent
  }
});

export default Button;
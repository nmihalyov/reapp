import React, { useState, useContext } from 'react';
import type { KeyboardType, TextInputProps, TextProps } from 'react-native';
import { Text, TextInput, View, StyleSheet, Platform } from 'react-native';

import type { ThemeType } from '../../../context';
import { THEMES, THEME_LIGHT } from '../../../constants/theme';
import { TYPOGRAPHY } from '../../../constants/typography';
import context from '../../../context';

const Input: React.FC<{
  val?: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  name: string;
  onChange?: (val: string) => void;
  error?: string | false;
  secureTextEntry?: boolean;
}> = props => {
  const [value, setValue] = useState(props.val || '');
  const { placeholder, keyboardType, name, error, secureTextEntry } = props;
  const { theme } = useContext(context);

  const styles = getStyles(theme);

  const changeValue = (val: string): void => {
    const { onChange } = props;

    setValue(val);
    onChange && onChange(val);
  }

  const inputOptions = {
    placeholder,
    value,
    onChangeText: changeValue,
    style: styles.input as TextInputProps,
    name,
    placeholderTextColor: THEMES[theme].input.placeholder,
    keyboardAppearance: theme === THEME_LIGHT ? 'light' : 'dark' as 'light' | 'dark',
    keyboardType: keyboardType || 'default',
    secureTextEntry: secureTextEntry || false
  };

  return (
    <View>
      <TextInput {...inputOptions} />
      {error &&
        <Text style={styles.inputError as TextProps}>{error}</Text>
      }
    </View>
  );
};

const getStyles = (theme: ThemeType) => StyleSheet.create({
  input: {
    textAlignVertical: 'auto',
    height: 48,
    marginBottom: 24,
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: THEMES[theme].input.default,
    color: THEMES[theme].background.onPrimary,
    ...TYPOGRAPHY.body.body1,
    lineHeight: Platform.OS === 'ios' ? 0 : 24
  },
  inputError: {
    marginTop: -20,
    marginBottom: 7,
    color: THEMES[theme].surface.onAlert,
    marginLeft: 24,
    ...TYPOGRAPHY.caption
  }
});

export default Input;
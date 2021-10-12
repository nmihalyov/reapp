import React, { useState, useContext, useEffect } from 'react';
import type { TextProps } from 'react-native';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';

import usersData from '../../api/login.json';
import type User from '../../types/user';
import type { ThemeType } from '../../context';
import context from '../../context';

import { THEMES } from '../../constants/theme';
import { TYPOGRAPHY } from '../../constants/typography';
import useInput from '../../hooks/useInput';

import AppShell from '../../components/AppShell/AppShell';
import Container from '../../components/_ui/Container/Container';
import Button from '../../components/_ui/Button/Button';
import Input from '../../components/_ui/Input/Input';

const AuthMain: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [emailValue, setEmailValue, emailError, setEmailError] = useInput();
  const [passwordValue, setPasswordValue, passwordError, setPasswordError] = useInput();

  const { theme } = useContext(context);
  const navigation = useNavigation();
  const styles = getStyles(theme);

  const goToMainScreen = (): void => navigation.dispatch(StackActions.replace('Main'));

  useEffect(() => {
    (async () => {
      const userLoggedIn = await JSON.parse(await AsyncStorage.getItem('user:logged_in') || 'false');

      if (userLoggedIn) {
        goToMainScreen();
      }
    })();
  }, []);

  const login = async () => {
    setLoading(true);
    let isValid = true;
    
    if (emailValue.trim() === '' || !emailValue.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/)) {
      setEmailError(true);
      isValid = false;
    }
    
    if (passwordValue.trim().length < 8) {
      setPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      const user = usersData.users.find((user: User) => user.email === emailValue && user.password === passwordValue);

      if (user) {
        await AsyncStorage.setItem('user:logged_in', 'true');
        await AsyncStorage.setItem('user:info', JSON.stringify(user));

        setTimeout(goToMainScreen, 1000);
      } else {
        setLoading(false);
        Alert.alert(
          'Invalid user',
          'User with such email and password pair doesn\'t exist',
          [{text: 'ОК'}],
          {cancelable: false}
        );
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <AppShell>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <Container style={styles.container}>
            <View style={styles.actionContainer}>
              <Text style={styles.text as TextProps}>Please, login to access Re:App!</Text>
              <Input
                onChange={setEmailValue}
                placeholder='Email'
                name='email'
                key='email'
                keyboardType="email-address"
                error={emailError && 'Email doesn\'t matches pattern mail@example.com'} />
              <Input
                onChange={setPasswordValue}
                placeholder='Password'
                name='password'
                key='password'
                secureTextEntry={true}
                error={passwordError && 'Password must be at least 8 characters'} />
            </View>
            <Button title='Login' buttonOnPress={login} loading={loading} disabled={!emailValue || !passwordValue} />
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </AppShell>
  );
};

const getStyles = (theme: ThemeType) => StyleSheet.create({
  heading: {
    color: THEMES[theme].background.onPrimary
  },
  container: {
    justifyContent: 'flex-end',
  },
  actionContainer: {
    minHeight: 200,
    height: '65%'
  },
  text: {
    marginBottom: 16,
    textAlign: 'center',
    color: THEMES[theme].background.onPrimary,
    ...TYPOGRAPHY.subtitle.subtitle2
  }
});

export default AuthMain;
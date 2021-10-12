import React, { useState, useEffect, useContext } from 'react';
import { TextProps } from 'react-native';
import { Text, View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import { vw } from 'react-native-expo-viewport-units';

import type User from '../../types/user';
import type { ThemeType } from '../../context';
import context from '../../context';
import { THEMES } from '../../constants/theme';
import { TYPOGRAPHY } from '../../constants/typography';

import AppShell from '../../components/AppShell/AppShell';
import Container from '../../components/_ui/Container/Container';
import Button from '../../components/_ui/Button/Button';
import { AddressIcon, InfoIcon } from '../../assets/svg';

import ProfileImage from '../../assets/profile.png';

const ProfileMain: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation();
  const { theme } = useContext(context);
  const styles = getStyles(theme);

  useEffect(() => {
    (async () => {
      const user: User = JSON.parse((await AsyncStorage.getItem('user:info'))!);

      setUser(user);
    })();
  }, []);

  const logout = async () => {
    await AsyncStorage.multiRemove([
      'user:logged_in',
      'user:info'
    ]);

    navigation.dispatch(StackActions.replace('Auth'));
  };

  return (
    <AppShell>
      <Container style={styles.container}>
        <View>
          <View style={styles.head}>
            <Image source={ProfileImage} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{user?.username}</Text>
              <Text style={styles.email}>{user?.email}</Text>
              <Text style={styles.email}>{user?.phone.toString().replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5")}</Text>
            </View>
          </View>
          <View style={styles.item}>
            <AddressIcon style={styles.itemIcon} color={THEMES[theme].accent} />
            <Text style={styles.itemText}>{user?.address}</Text>
          </View>
          <View style={styles.item}>
            <InfoIcon style={styles.itemIcon} color={THEMES[theme].accent} />
            <Text style={styles.itemText}>{user?.about}</Text>
          </View>
        </View>
        <Button title="Logout" buttonOnPress={logout} small />
      </Container>
    </AppShell>
  );
};

const getStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    marginBottom: 24
  },
  image: {
    width: 96,
    height: 96
  },
  info: {
    justifyContent: 'center',
    paddingLeft: 24
  },
  name: {
    marginBottom: 4,
    color: THEMES[theme].surface.onPrimary,
    ...TYPOGRAPHY.accident.accident1 as TextProps
  },
  email: {
    color: THEMES[theme].surface.onPrimary,
    ...TYPOGRAPHY.body.body1 as TextProps
  },
  item: {
    flexDirection: 'row',
    marginBottom: 12
  },
  itemIcon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  itemText: {
    width: vw(100) - 64,
    paddingTop: 4,
    color: THEMES[theme].surface.onPrimary,
    ...TYPOGRAPHY.body.body2 as TextProps
  }
});

export default ProfileMain;
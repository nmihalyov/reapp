import React, { useContext } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Platform } from 'react-native';
import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import type { HeaderOptionsType } from './hooks/useHeaderOptions';
import { ProfileIcon, HomeIcon } from './assets/svg';

import AuthScreen from './screens/AuthScreen/AuthScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';

import context from './context';
import { TYPOGRAPHY } from './constants/typography';
import { THEMES, THEME_DARK } from './constants/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type ScreenOptionsType = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
};

type TabBarIconType = {
  focused: boolean;
  color: string;
  size: number;
};

const AppNavigation = () => {
  const isAndroid = Platform.OS === 'android';
  const { theme } = useContext(context);

  const screenOptions = ({ route }: ScreenOptionsType): BottomTabNavigationOptions => ({
    tabBarIcon: ({ focused, size }: TabBarIconType) => {
      const iconProps = {
        style: {width: size, height: size},
        color: focused ? THEMES[theme].surface.onAccent : THEMES[theme].surface.onPrimary
      };

      let icon;
  
      switch (route.name) {
        case 'Feed':
          icon = <HomeIcon {...iconProps} />
          break;
        case 'Profile':
          icon = <ProfileIcon {...iconProps} />
          break;
      }
  
      return icon;
    }
  });

  const tabBarOptions = (title: string): BottomTabNavigationOptions => ({
    title,
    headerShown: false,
    tabBarActiveTintColor: THEMES[theme].surface.onAccent,
    tabBarInactiveTintColor: THEMES[theme].surface.onSecondary,
    tabBarStyle: {
      elevation: 0,
      borderTopWidth: 0,
      borderColor: 'transparent',
      shadowOpacity: 0.05,
      shadowColor: 'rgb(50, 50, 50)',
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: -4
      }
    },
    tabBarLabelStyle: TYPOGRAPHY.caption as StyleProp<TextStyle>
  });

  const headerRightIconStyles = {
    width: 24,
    height: 24,
    marginRight: 16
  };

  const headerLeftIconStyles = {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 32
  };

  const navigationTheme = {
    colors: {
      primary: isAndroid ? THEMES[theme].surface.onAccent : THEMES[theme].background.onPrimary,
      background: THEMES[theme].surface.default,
      card: THEMES[theme].surface.edging,
      text: THEMES[theme].accent,
      border: THEMES[theme].border,
      notification: THEMES[theme].accent
    },
    dark: theme === THEME_DARK
  };

  const headerOptions = (icon?: React.ReactNode, title?: string): HeaderOptionsType => ({
    icon: icon,
    headerLeftIconStyles,
    arrowIconColor: THEMES[theme].background.onPrimary,
    options: {
      title,
      headerStyle: {
        shadowOpacity: 0.05,
        shadowColor: 'rgb(50, 50, 50)',
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4
        }
      },
      headerRight: (icon && !isAndroid) ? () => icon : undefined,
      headerBackTitle: undefined,
      headerTitleStyle: {
        color: isAndroid ? THEMES[theme].surface.onPrimary : THEMES[theme].background.onPrimary,
        ...TYPOGRAPHY.heading.heading4 as TextStyle
      }
    }
  });

  const screenHeaderIconStyle = isAndroid ? headerLeftIconStyles : headerRightIconStyles;
  const screenHeaderIconColor = isAndroid ? THEMES[theme].background.onPrimary : THEMES[theme].surface.onAccent;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>

        <Stack.Screen
          name="Auth"
          options={{headerShown: false}}>
          {() => <AuthScreen headerOptions={headerOptions()} />}
        </Stack.Screen>

        <Stack.Screen
          name="Main"
          options={{headerShown: false}}>
          {() =>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Feed" options={() => tabBarOptions('Feed')}>
                {() => <FeedScreen headerOptions={headerOptions(
                  <HomeIcon style={screenHeaderIconStyle} color={screenHeaderIconColor} />, 'Feed'
                )} />}
              </Tab.Screen>
            </Tab.Navigator>
          }
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
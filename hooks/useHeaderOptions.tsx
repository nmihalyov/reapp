import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import type { StackNavigationOptions } from '@react-navigation/stack';

import { ArrowIcon } from '../assets/svg';

const useHeaderOptions = (headerOptions: {
  icon: React.ReactNode,
  headerLeftIconStyles: any,
  arrowIconColor: string,
  options: StackNavigationOptions
}) => {
  const { icon, headerLeftIconStyles, arrowIconColor, options } = headerOptions;

  const getOptions = (navigation: any): StackNavigationOptions => {
    if (Platform.OS === 'android') {
      options.headerLeft = ({ canGoBack }) => {
        if (canGoBack) {
          return (
            <TouchableOpacity onPress={navigation.goBack}>
              <ArrowIcon style={headerLeftIconStyles} color={arrowIconColor} />
            </TouchableOpacity>
          );
        } else {
          return icon;
        }
      }
    }

    return options;
  };

  return getOptions;
};

export default useHeaderOptions;
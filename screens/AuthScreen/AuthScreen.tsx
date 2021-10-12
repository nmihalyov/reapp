import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { HeaderOptionsType } from '../../hooks/useHeaderOptions';
import useHeaderOptions from '../../hooks/useHeaderOptions';
import AuthMain from './AuthMain';

const Stack = createStackNavigator();

const AuthScreen: React.FC<{
  headerOptions: HeaderOptionsType;
}> = props => {
  const screenHeaderOptions = useHeaderOptions(props.headerOptions);

  return (
    <Stack.Navigator screenOptions={({ navigation }) => screenHeaderOptions(navigation)}>
      <Stack.Screen name="Authorization" component={AuthMain} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
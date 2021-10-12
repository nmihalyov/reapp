import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { HeaderOptionsType } from '../../hooks/useHeaderOptions';
import useHeaderOptions from '../../hooks/useHeaderOptions';
import ProfileMain from './ProfileMain';

const Stack = createStackNavigator();

const ProfileScreen: React.FC<{
  headerOptions: HeaderOptionsType;
}> = props => {
  const screenHeaderOptions = useHeaderOptions(props.headerOptions);

  return (
    <Stack.Navigator screenOptions={({ navigation }) => screenHeaderOptions(navigation)}>
      <Stack.Screen
        name="ProfileMain"
        options={{title: 'Profile'}}
        component={ProfileMain} />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
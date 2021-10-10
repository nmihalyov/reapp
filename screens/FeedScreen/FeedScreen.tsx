import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { HeaderOptionsType } from '../../hooks/useHeaderOptions';
import useHeaderOptions from '../../hooks/useHeaderOptions';
import FeedMain from './FeedMain';

const Stack = createStackNavigator();

const FeedScreen: React.FC<{
  headerOptions: HeaderOptionsType
}> = props => {
  const screenHeaderOptions = useHeaderOptions(props.headerOptions);

  return (
    <Stack.Navigator screenOptions={({ navigation }) => screenHeaderOptions(navigation)}>
      <Stack.Screen
        name="FeedMain"
        options={{headerShown: false, title: 'Feed', }}
        component={FeedMain} />
    </Stack.Navigator>
  );
};

export default FeedScreen;
import React from 'react';
import type { ViewStyle } from 'react-native';
import { View, StyleSheet } from 'react-native';

const Container: React.FC<{
  children: React.ReactNode;
  style?: ViewStyle;
}> = props => {
  const { children, style } = props;

  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16
  }
});

export default Container;
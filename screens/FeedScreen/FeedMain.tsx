import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AppShell from '../../components/AppShell/AppShell';
import type { ThemeType } from '../../context';
import context from '../../context';
import { THEMES } from '../../constants/theme';
import Container from '../../components/_ui/Container/Container';

const FeedMain: React.FC = () => {
  const { theme } = useContext(context);
  const styles = getStyles(theme);

  return (
    <AppShell>
      <Container>
        <View>
          <Text style={styles.heading}>Hellow World!</Text>
        </View>
      </Container>
    </AppShell>
  );
};

const getStyles = (theme: ThemeType) => StyleSheet.create({
  heading: {
    color: THEMES[theme].background.onPrimary
  }
});

export default FeedMain;
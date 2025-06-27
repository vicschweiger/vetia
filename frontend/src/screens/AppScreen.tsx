import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import AppTab from '../routes/AppTab';
import { Footer } from '../components/Footer/Footer';

import { COLORS } from '../constants/theme';

export default function AppScreen() {

  return (
    <SafeAreaView style={styles.container}>
        <AppTab />
        <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
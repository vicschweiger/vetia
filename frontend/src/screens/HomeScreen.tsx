import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';

import { COLORS } from '../constants/theme';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Main />  
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
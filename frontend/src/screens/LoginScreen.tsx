import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../constants/theme';
import { LoginForm } from '../components/Forms/LoginForm';
import { Footer } from '../components/Footer/Footer';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
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
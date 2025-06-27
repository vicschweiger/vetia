import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../constants/theme';

import SignUpTab from '../routes/SignUpTab';
import { Footer } from '../components/Footer/Footer';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={[styles.container, styles.flex]}>
      <View style={[styles.maxwidth]}>
        <Text style={styles.title}>
          Cadastro
        </Text>
      </View>
      <View style={[styles.maxwidth, styles.flex]}>
        <SignUpTab />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: COLORS.black,
      marginBottom: 20,
      alignSelf: 'center',
  },
  maxwidth: {
    width: '100%',
  },
  flex: {
    flex: 1,
  }
});
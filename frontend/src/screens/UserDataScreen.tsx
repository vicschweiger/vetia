import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../constants/theme';
import { Footer } from '../components/Footer/Footer';
import { CustomText } from '../components/CustomText';

export default function UserDataScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <CustomText
            value='Dados de Usuário'
            style={styles.title}
        />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.black,
  }
});


import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../constants/theme';
import { CustomButton } from './Buttons/CustomButton';
import { SendButton } from './Buttons/SendButton';
import ReplyBox from './ReplyBox';
import SendBar from './SendBar';

  export function AcademicComponent() {
  return (
    <View style={styles.container}>
      <ReplyBox />
      <SendBar />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 15,
      padding: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.background,
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor: COLORS.red,
  },
});
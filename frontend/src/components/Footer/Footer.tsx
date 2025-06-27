import { StyleSheet, View, Text } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export function Footer() {
  return (
    <View style={styles.footer}>
        <Text>
            VetIA © 2025
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  footer: {
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    width: '100%',
  }
});
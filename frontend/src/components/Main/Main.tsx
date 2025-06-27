import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { VideoBanner } from '../VideoBanner';

export function Main() {
  return (
    <View style={styles.main}>
        <Text 
            style={styles.title}
        >
            Sua solução acadêmica!
        </Text>
        <VideoBanner />
    </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.background,
        flex: 1,
        width: '100%',
        height: '90%',
    },
    title: {
        fontSize: SIZES.xlarge,
        paddingVertical: SIZES.padding,
        alignContent: 'center',
        textAlign: 'center',
    }
});
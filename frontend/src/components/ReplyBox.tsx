import { Text, ScrollView } from "react-native-gesture-handler"
import { StyleSheet } from "react-native"
import { COLORS } from "../constants/theme"

export default function ReplyBox() {
    return (
        <ScrollView style={styles.replybox}>
        <Text style={styles.text}>
            Resposta!!!
        </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    replybox: {
    width: '100%',
    padding: 5,
    borderColor: COLORS.red,
    borderWidth: 1,
    borderRadius: 5
    },
    text: {
        width: Text.length,
        alignSelf: 'auto',
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingHorizontal: 15
        
    }
})
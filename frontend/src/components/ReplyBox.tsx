import { ScrollView, Text } from "react-native-gesture-handler"
import { StyleSheet, View } from "react-native"
import { COLORS, SIZES } from "../constants/theme"

interface ReplyBoxProps {
    messages: string[];
}

export default function ReplyBox({ messages }: ReplyBoxProps) {
    return (
        <ScrollView style={styles.replybox}>
            {messages.map((msg, index) => (
                <View key={index} style={styles.messageContainer}>
                    <Text style={styles.username}>
                        Nome do Usuário
                    </Text>
                    <Text style={styles.text}>
                        {msg}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    replybox: {
        flex: 1,
        width: '100%',
        padding: 5,
        borderColor: COLORS.red,
        borderWidth: 1,
        borderRadius: 5
    },
    messageContainer: {
        backgroundColor: COLORS.white,
        marginVertical: 4,
        alignSelf: 'flex-end',
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    username: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: SIZES.small
    },
    text: {
        fontSize: SIZES.font
    }
})
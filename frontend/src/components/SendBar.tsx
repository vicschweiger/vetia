import { View } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { StyleSheet } from "react-native"
import React, { useState } from "react"

import { COLORS } from "../constants/theme"

import { SendButton } from "./Buttons/SendButton"

interface SendBarProps {
  onSendMessage: (message: string) => void;
}

export default function SendBar ({ onSendMessage }: SendBarProps) {

    const [message, setMessage] = useState('');

    const handleSend = () => {
      onSendMessage(message);
      setMessage('');
    };

    return (
      <View style={styles.container}>
        <ScrollView>
            <TextInput
            style={styles.input}
            placeholder='Digite sua consulta'
            editable
            multiline
            value={message}
            onChangeText={setMessage}
            />
        </ScrollView>
        <SendButton 
          task={handleSend}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%' ,
        minHeight: 50,
        gap: 10,
        alignItems: 'center',
        marginHorizontal: 30
  },
    input: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        borderRadius: 10,
  },
})
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import ReplyBox from './ReplyBox';
import SendBar from './SendBar';

  export function ZoonosesComponent() {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
      if (message.trim()) {
        setMessages(prevMessages => [...prevMessages, message]);
      }
    };

  return (
    <View style={styles.container}>
      <ReplyBox messages={messages} />
      <SendBar onSendMessage={handleSendMessage} />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 5,
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
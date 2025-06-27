import { Text, StyleSheet, ViewStyle } from 'react-native';

interface TextProps {
    value: string;
    style: ViewStyle;
}

  export function CustomText({ value, style }: TextProps) {
  return (
        <Text style={[styles.text, style]}>
          {value}
        </Text>
    );
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  }
});
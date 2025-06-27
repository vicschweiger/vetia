import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
interface ButtonProps {
  style: ViewStyle;
  value: string;
  route: any;
}

export function CustomButton({ style, value, route }: ButtonProps) {
return (
    <TouchableOpacity 
      style={[styles.button, style]}
      onPress={route}
    >
      <Text>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  }
});
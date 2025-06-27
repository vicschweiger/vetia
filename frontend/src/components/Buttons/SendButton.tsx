import { StyleSheet, TouchableOpacity, ViewStyle, Image } from 'react-native';
import { COLORS } from '../../constants/theme';

interface SendProps {
  task: any;
}

export function SendButton({ task }: SendProps) {
return (
    <TouchableOpacity 
      style={styles.button}
      onPress={task}
    >
        <Image 
            source={require('../../../assets/images/right-arrow.png')}
            style={{width:40, height: 40}}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: COLORS.primary
  }
});
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from './CustomButton';
import { COLORS } from '../../constants/theme';

export default function AppButtons() {

 const navigation = useNavigation();

  function navToUserData() {
    navigation.navigate('UserData');
  }

  return (
    <View style={styles.container}>
        <CustomButton
            value="Minha Conta"
            route={navToUserData}
            style={{ 
                backgroundColor: COLORS.primary,
                paddingVertical: 8,
                paddingHorizontal: 8    
            }}
        />
        <CustomButton
            value="Sair"
            route={() => console.log('Button Sair pressed')}
            style={{ 
                backgroundColor: COLORS.primary, 
                paddingVertical: 8, 
                paddingHorizontal: 15  
            }}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    marginLeft: 120
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
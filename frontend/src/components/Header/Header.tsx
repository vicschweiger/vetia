import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../Logo';
import { CustomButton } from '../Buttons/CustomButton';

import { COLORS, SIZES, FONTS } from '../../constants/theme';

export function Header() {
  
  const navigation = useNavigation();

  function navToLogin() {
    navigation.navigate('Login');
  }

  function navToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.header}>
        <Logo style={{ 
          width: 60, 
          height: 60, 
          marginRight: 10 
          }} 
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            value='Login'
            route={navToLogin}
            style={{
            backgroundColor: COLORS.background          
            }} 
          />
          <CustomButton
            value='Cadastre-se'
            route={navToSignUp}
            style={{
            backgroundColor: COLORS.background,
            }} 
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '100%',
    height: '10%',
    paddingHorizontal: SIZES.padding,
    
  },
  buttonContainer: {
    flexDirection: 'row',
  }
})
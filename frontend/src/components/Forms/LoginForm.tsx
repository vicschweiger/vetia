import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../Buttons/CustomButton';
import { COLORS } from '../../constants/theme';

export function LoginForm() {

  const navigation = useNavigation();

  function navToApp() {
    navigation.navigate('App');
  }

  return (
    <View style={style.container}>
        <Text style={style.title}>  
            Entre!
        </Text>
        <TextInput 
            style={style.input}
            placeholder='Email' 
        />
        <TextInput
            style={style.input}
            placeholder='Password' 
        />
        <CustomButton
            value='Login'
            route={navToApp}
            style={{
            backgroundColor: COLORS.primary  
        }}
        />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        borderRadius: 10,
  },
});
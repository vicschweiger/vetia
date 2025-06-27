import { View, Text, TextInput, StyleSheet } from 'react-native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  

export function SignUpForm() {
  return (
    <View style={style.container}>
        <Text style={style.title}>  
            Entre!
        </Text>
        <TextInput 
            style={style.input}
            placeholder='Nome' 
        />
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
            route={() => console.log('Login button pressed')}
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
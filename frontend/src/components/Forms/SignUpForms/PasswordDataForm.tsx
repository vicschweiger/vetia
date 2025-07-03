import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  



export function PasswordDataForm({ formData, setFormData }) {

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('Term');
    }

    const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    };

    const [passwordCriteria, setPasswordCriteria] = useState({
        hasMinLength: false,
        hasUppercase: false,
        hasNumber: false,
        hasSymbol: false,
        });
    
    const handlePasswordChange = (text) => {
        setFormData((prev) => ({ ...prev, password: text }));

        setPasswordCriteria({
        hasMinLength: text.length >= 8,
        hasUppercase: /[A-Z]/.test(text),
        hasNumber: /\d/.test(text),
        hasSymbol: /[\W_]/.test(text),
    });
};

    const isConfirmed = 
        formData.password.length > 0 &&
        formData.confirmPassword.length > 0 &&
        formData.password === formData.confirmPassword;


    const verifyPasswordData = () => {
            if (formData.email === '' || !isEmailValid(formData.email)) {
        return Alert.alert('E-mail inválido', 'Por favor, insira um e-mail válido.');
        }
        
        if (
            !passwordCriteria.hasMinLength ||
            !passwordCriteria.hasUppercase ||
            !passwordCriteria.hasNumber ||
            !passwordCriteria.hasSymbol ||
            !isConfirmed
            ) {
            return Alert.alert('Erro ao Cadastrar Senha', 'A senha não está seguindo todos os critérios.');
        }
        else
          return (
            handleNext()
          );
    }


  return (
    <View style={style.container}>
        <TextInput
            style={style.input}
            placeholder='E-mail'
            value={formData.email}
            onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, email: text }))
        }
        />
        <TextInput
        style={style.input}
        placeholder='Senha'
        value={formData.password}
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        />
        <TextInput 
            style={style.input}
            placeholder='Repita a Senha' 
            value={formData.confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, confirmPassword: text }))
            }
        />
        <View style={style.checkbox}>
            <Text>{passwordCriteria.hasMinLength ? '✅' : '❌'} Mínimo 8 caracteres</Text>
            <Text>{passwordCriteria.hasUppercase ? '✅' : '❌'} 1 letra maiúscula</Text>
            <Text>{passwordCriteria.hasNumber ? '✅' : '❌'} 1 número</Text>
            <Text>{passwordCriteria.hasSymbol ? '✅' : '❌'} 1 símbolo</Text>
            <Text>{isConfirmed ? '✅' : '❌'} Senhas coincidem</Text>
        </View>
        <CustomButton
            value='Proximo >'
            route={verifyPasswordData}
            style={{
            backgroundColor: COLORS.primary,
            alignSelf: 'flex-end',
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
    checkbox: {
        paddingLeft: 10,
        alignSelf: 'flex-start',
        gap: 2,
    }
});
import { View, Text, TextInput, StyleSheet, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  
import { CustomText } from '../../CustomText';



export function WarningDataForm({ formData, setFormData }) {

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('App');
    }

    const toggleSwitch = () => {
    setFormData((prev) => ({
        ...prev,
        acceptWarning: prev.acceptWarning === false ? true : false,
    }));
    };

    const verifyWarningData = () => {
    if (formData.acceptWarning === false) 
        return (
            Alert.alert('Aviso Não Aceito!', 'Por favor, leia e aceite os Avisos Legais para continuar.')
        )
    else
        return;
    }

    const verifyFormData = () => {
        if (formData.name === '' || 
            formData.lastname === '' || 
            formData.birthdate === '' || 
            formData.gender === '' || 
            formData.cep === '' || 
            formData.street === '' || 
            formData.number === '' || 
            formData.neighborhood === '' || 
            formData.city === '' || 
            formData.state === '' || 
            formData.vacancy === '' || 
            formData.password === '' || 
            formData.confirmPassword === '' || 
            formData.acceptTerms === false || 
            formData.acceptWarning === false)
                return (
                    console.log("Dados preenchidos:",
                                "Nome:", formData.name,
                                "Sobrenome:", formData.lastname,
                                "Data de Nascimento:", formData.birthdate,
                                "Gênero:", formData.gender,
                                "CEP:", formData.cep,
                                "Rua:", formData.street,
                                "Número:", formData.number,
                                'Complemento:', formData.complement,
                                "Bairro:", formData.neighborhood,
                                "Cidade:", formData.city,
                                "Estado:", formData.state,
                                "Ocupação:", formData.vacancy,
                                "Senha:", formData.password,
                                "Confirmar Senha:", formData.confirmPassword,
                                "Termos de Uso:", formData.acceptTerms,
                                'Aviso Legal:', formData.acceptWarning,                        
                            ),
                    Alert.alert('Dados Incompletos!', 'Alguma aba não foi preenchida corretamente. Por favor, preencha todos os campos para continuar.')
                )
        else 
            return (
                console.log("Dados preenchidos:",
                    "Nome:", formData.name,
                    "Sobrenome:", formData.lastname,
                    "Data de Nascimento:", formData.birthdate,
                    "Gênero:", formData.gender,
                    "CEP:", formData.cep,
                    "Rua:", formData.street,
                    "Número:", formData.number,
                    'Complemento:', formData.complement,
                    "Bairro:", formData.neighborhood,
                    "Cidade:", formData.city,
                    "Estado:", formData.state,
                    "Ocupação:", formData.vacancy,
                    "Senha:", formData.password,
                    "Confirmar Senha:", formData.confirmPassword,
                    "Termos de Uso:", formData.acceptTerms,
                    'Aviso Legal:', formData.acceptWarning,                        
                ),
                verifyWarningData(),
                handleNext()
        )
    }
    

  return (
    <View style={style.container}>
        <CustomText
            style={style.title}
            value='Avisos Legais'
        />
        <ScrollView>
            <CustomText
                style={style.text}
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
        </ScrollView>
        <View style={style.switchContainer}>
            <Switch
                value={formData.acceptWarning}
                onValueChange={toggleSwitch}
                thumbColor={COLORS.primary}
                trackColor={{ false: '#ccc', true: COLORS.primary }}
            />
            <Text style={{ fontWeight: 'bold' }}>Eu concordo com os avisos legais</Text>
        </View>
        <CustomButton
            value='Proximo >'
            route={verifyFormData}
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
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 20,
    },
    text: {
        fontSize: 10,
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
     },
});
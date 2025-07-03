import { View, Text, TextInput, StyleSheet, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  
import { CustomText } from '../../CustomText';
import { ScrollView } from 'react-native-gesture-handler';



export function TermDataForm({ formData, setFormData }) {

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('Warning');
    }

    const toggleSwitch = () => {
        setFormData((prev) => ({
        ...prev,
        acceptTerms: prev.acceptTerms === false ? true : false,
        }));
     };

    
    const verifyTermsData = () => {
        if (formData.acceptTerms === false) 
          return (
            Alert.alert('Termo Não Aceito!', 'Por favor, leia e aceite o Termo de Consentimento e Políticas de Privacidade de Dados para continuar.')
          )
          else
            return (
              handleNext()
            )
    }
    

  return (
    <View style={style.container}>
        <CustomText
            style={style.title}
            value='Termos de Uso'
        />
        <ScrollView style={{ width: '100%' }}>
            <CustomText
                style={style.text}
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
        </ScrollView>
        <View style={style.switchContainer}>
            <Switch
                value={formData.acceptTerms}
                onValueChange={toggleSwitch}
                thumbColor={COLORS.primary}
                trackColor={{ false: '#ccc', true: COLORS.primary }}
            />
            <Text style={{ fontWeight: 'bold' }}>Eu concordo com os termos de uso</Text>
        </View>
        <CustomButton
            value='Proximo >'
            route={verifyTermsData}
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
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  



export function AddressDataForm() {

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('Vacancy');
    }
    

  return (
    <View style={style.container}>
        <TextInput
            style={style.input}
            placeholder='CEP'
            keyboardType='numeric'
        />
        <TextInput 
            style={style.input}
            placeholder='Rua' 
        />
                <TextInput
            style={style.input}
            placeholder='Número'
            keyboardType='numeric'
        />
        <TextInput
            style={style.input}
            placeholder='Cidade' 
        />
        <TextInput
            style={style.input}
            placeholder='UF'
        />
          <CustomButton
            value='Proximo >'
            route={handleNext}
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
});
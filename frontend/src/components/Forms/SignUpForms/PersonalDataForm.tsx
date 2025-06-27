import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  
import { CustomText } from '../../CustomText';



export function PersonalDataForm() {

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('Address');
    }
    

  return (
    <View style={style.container}>
        <TextInput 
            style={style.input}
            placeholder='Nome'
        />
        <TextInput
            style={style.input}
            placeholder='Sobremome' 
        />
        <TextInput
            style={style.input}
            placeholder='Data de Nascimento'
            keyboardType='numeric'
        />
        <TextInput
            style={style.input}
            placeholder='Gênero'
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
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 20,
        backgroundColor: COLORS.white,
        overflow: 'visible',
        width: '100%',
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        borderRadius: 10,
  },
});
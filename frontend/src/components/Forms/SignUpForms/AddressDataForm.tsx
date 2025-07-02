import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';  



export function AddressDataForm({ formData, setFormData }) {

  
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');

    const navigation = useNavigation();
  
    const handleNext = () => {
      navigation.navigate('Vacancy');
    }
    
    const fetchAddressFromCep = async () => {
      const cleanCep = cep.replace(/\D/g, ''); // tira traço e espaço
      if (cleanCep.length !== 8) {
        Alert.alert('CEP inválido', 'Digite um CEP com 8 dígitos.');
        return;
      }

      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = response.data;

        if (data.erro) {
          Alert.alert('CEP não encontrado', 'Verifique se o CEP está correto.');
          return;
        }

      setStreet(data.logradouro || '');
      setNeighborhood(data.bairro || '');
      setCity(data.localidade || '');
      setState(data.uf || '');

    } catch (error) {
      Alert.alert('Erro ao buscar CEP', 'Tente novamente mais tarde.');
    }
  };

  const verifyCEP = () => {
    if (cep === '') return (
      Alert.alert('CEP inválido', 'Digite um CEP com 8 dígitos para efetuar seu cadastro.')
    )
    else
      return (
        handleNext()
    )
  }

  return (
    <View style={style.container}>
       <TextInput
          style={style.input}
          placeholder='CEP'
          keyboardType='numeric'
          value={cep}
          onChangeText={setCep}
          onBlur={fetchAddressFromCep} // CHAMADA DA API AQUI
        />
        <TextInput 
          style={style.input}
          placeholder='Rua'
          value={street}
          onChangeText={setStreet}
        />
        <TextInput
          style={style.input}
          placeholder='Número'
          keyboardType='numeric'
          value={number}
          onChangeText={setNumber}
        />
        <TextInput
          style={style.input}
          placeholder='Bairro'
          value={neighborhood}
          onChangeText={setNeighborhood}
        />
        <View style={{flexDirection: 'row', gap: 10, width: '100%', justifyContent: 'space-between'}}>
          <TextInput
            style={style.city_input}
            placeholder='Cidade'
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={style.uf_input}
            placeholder='UF'
            value={state}
            onChangeText={setState}
          />
        </View>
        <CustomButton
          value='Proximo >'
          route={verifyCEP}
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
    city_input: {
      width: '60%',
      height: 50,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      borderRadius: 10,
    },
    uf_input: {
      width: '35%',
      height: 50,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      borderRadius: 10,
    }
});
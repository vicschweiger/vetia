import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';

export function AddressDataForm({ formData, setFormData }) {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Vacancy');
  };

  const fetchAddressFromCep = async () => {
    const cleanCep = formData.cep?.replace(/\D/g, '');
    if (!cleanCep || cleanCep.length !== 8) {
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

      setFormData((prev) => ({
        ...prev,
        street: data.logradouro || '',
        neighborhood: data.bairro || '',
        city: data.localidade || '',
        state: data.uf || '',
      }));
    } catch (error) {
      Alert.alert('Erro ao buscar CEP', 'Tente novamente mais tarde.');
    }
  };

  const verifyAddressData = () => {
    const { cep, street, neighborhood, city, state, number } = formData;
    if (!cep || !street || !neighborhood || !city || !state || !number) {
      Alert.alert(
        'Dados Incompletos!',
        'Por favor, preencha todos os campos para continuar. Digite um CEP com 8 dígitos para começar.'
      );
      return;
    }
    handleNext();
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder='CEP'
        keyboardType='numeric'
        value={formData.cep}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, cep: text }))}
        onBlur={fetchAddressFromCep}
      />
      <TextInput
        style={style.input}
        placeholder='Rua'
        value={formData.street}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, street: text }))}
      />
      <TextInput
        style={style.input}
        placeholder='Número'
        keyboardType='numeric'
        value={formData.number}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, number: text }))}
      />
      <TextInput
        style={style.input}
        placeholder='Bairro'
        value={formData.neighborhood}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, neighborhood: text }))}
      />
      <View style={{ flexDirection: 'row', gap: 10, width: '100%', justifyContent: 'space-between' }}>
        <TextInput
          style={style.city_input}
          placeholder='Cidade'
          value={formData.city}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, city: text }))}
        />
        <TextInput
          style={style.uf_input}
          placeholder='UF'
          value={formData.state}
          onChangeText={(text) => setFormData((prev) => ({ ...prev, state: text }))}
        />
      </View>
      <CustomButton
        value='Próximo >'
        route={verifyAddressData}
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
  },
});

import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';

export function PersonalDataForm({ formData, setFormData }) {
  const navigation = useNavigation();
  const [showPicker, setShowPicker] = useState(false);

  const handleNext = () => {
    console.log('Dados preenchidos:', formData);
    navigation.navigate('Address');
  };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios'); // no Android, fecha sozinho
    if (selectedDate) {
      const formatted = selectedDate.toISOString().split('T')[0]; // yyyy-mm-dd
      setFormData((prev) => ({ ...prev, birthdate: formatted }));
    }
  };

  const verifyPersonalData = () => {
    if (formData.name === '' || formData.lastname === '' || formData.birthdate === '' || formData.gender === '') 
      return (
        Alert.alert('Dados Incompletos', 'Por favor, preencha todos os campos para continuar.')
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
        placeholder='Nome'
        value={formData.name}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, name: text }))
        }
      />
      <TextInput
        style={style.input}
        placeholder='Sobrenome'
        value={formData.lastname}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, lastname: text }))
        }
      />

      {/* Campo de Data de Nascimento */}
      <Pressable onPress={() => setShowPicker(true)} style={{ width: '100%' }}>
        <TextInput
          style={style.input}
          placeholder='Data de Nascimento'
          value={formData.birthdate}
          editable={false}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={formData.birthdate ? new Date(formData.birthdate) : new Date()}
          mode='date'
          display='default'
          maximumDate={new Date()}
          onChange={handleDateChange}
        />
      )}

      <Picker
        selectedValue={formData.gender}
        onValueChange={(itemValue) =>
          setFormData((prev) => ({ ...prev, gender: itemValue }))
        }
        style={style.picker}
      >
        <Picker.Item label="Selecione o Gênero" value="" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <CustomButton
        value='Próximo >'
        route={verifyPersonalData}
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
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center', 
  },
});

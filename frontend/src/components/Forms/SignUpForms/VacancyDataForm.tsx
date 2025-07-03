import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../Buttons/CustomButton';
import { COLORS } from '../../../constants/theme';

interface SwitchProps {
    name: string;
    key: string;
}

export function VacancyDataForm({ formData, setFormData }) {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Password');
  };

  const toggleSwitch = () => {
    setFormData((prev) => ({
      ...prev,
      vacancy: prev.vacancy === 'Student' ? 'Veterinary Doctor' : 'Student',
    }));
  };

  const verifyVacancyData = () => {
    if (formData.vacancy === '') 
      return (
        Alert.alert('Dados Incompletos!', 'Por favor, selecione uma opção para continuar.')
      )
    else
      return (
        handleNext()
      )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ocupação:</Text>
      <View style={styles.switchContainer}>
        <Text style={{ fontWeight: 'bold' }}>Estudante</Text>
        <Switch
          value={formData.vacancy === 'Veterinary Doctor'}
          onValueChange={toggleSwitch}
          thumbColor={COLORS.primary}
          trackColor={{ false: '#ccc', true: COLORS.primary }}
        />
        <Text style={{ fontWeight: 'bold' }}>Médico(a) Veterinário(a)</Text>
      </View>
      <CustomButton
        value="Próximo >"
        route={verifyVacancyData}
        style={{
          backgroundColor: COLORS.primary,
          alignSelf: 'flex-end',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  value: {
    marginTop: 10,
    fontStyle: 'italic',
  },
});

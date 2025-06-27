import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '../constants/theme';

import { LoginForm } from '../components/Forms/LoginForm';
import { PersonalDataForm } from '../components/Forms/SignUpForms/PersonalDataForm';
import { AddressDataForm } from '../components/Forms/SignUpForms/AddressDataForm';
import { VacancyDataForm } from '../components/Forms/SignUpForms/VacancyDataForm';
import { PasswordDataForm } from '../components/Forms/SignUpForms/PasswordDataForm';
import { TermDataForm } from '../components/Forms/SignUpForms/TermDataForm';
import { WarningDataForm } from '../components/Forms/SignUpForms/WarningDataForm';

const Tab = createBottomTabNavigator();

const tabScreens = [
     {
      name: 'Personal Data',
      component: PersonalDataForm,
      options: {
        title: 'Dados Pessoais',
      },
    },
    {
      name: 'Address',
      component: AddressDataForm,
      options: {
        title: 'Endereço',
      },
    },
    {
      name: 'Vacancy',
      component: VacancyDataForm,
      options: {
        title: 'Ocupação',
      },
    },
            {
      name: 'Password',
      component: PasswordDataForm,
      options: {
        title: 'Senha',
      },
    },
            {
      name: 'Term',
      component: TermDataForm,
      options: {
        title: 'Termo de Consentimento e Políticas de Uso de Dados',
      },
    },
    {
      name: 'Warning',
      component: WarningDataForm,
      options: {
        title: 'Aviso',
      },
    },
];

export default function SignUpTab() {

  return (
    <Tab.Navigator
      initialRouteName={tabScreens[0].name}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
            height: 80,
            paddingBottom: 10
          }
      }}
    >
 {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name} // Use screen.name como key
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.options.title,
            headerTitle: screen.options.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
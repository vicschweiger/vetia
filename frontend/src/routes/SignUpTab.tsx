import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { COLORS } from '../constants/theme';

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
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="person" size={25} color={color} />
        ),
      },
    },
    {
      name: 'Address',
      component: AddressDataForm,
      options: {
        title: 'Endereço',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={25} color={color} />
        ),
      },
    },
    {
      name: 'Vacancy',
      component: VacancyDataForm,
      options: {
        title: 'Ocupação',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hospital-alt" size={20} color={color} />
        ),
      },  
    },
            {
      name: 'Password',
      component: PasswordDataForm,
      options: {
        title: 'Senha',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="lock" size={25} color={color} />
        ),
      },
    },
            {
      name: 'Term',
      component: TermDataForm,
      options: {
        title: 'Termo de Consentimento e Políticas de Uso de Dados',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="newspaper" size={25} color={color} />
        ),
      },
    },
    {
      name: 'Warning',
      component: WarningDataForm,
      options: {
        title: 'Aviso',

        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="warning" size={20} color={color} />
        ),
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
            tabBarIcon: screen.options.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
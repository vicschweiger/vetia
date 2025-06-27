import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../constants/theme';

import { LoginForm } from '../components/Forms/LoginForm';
import { PersonalDataForm } from '../components/Forms/SignUpForms/PersonalDataForm';
import { AddressDataForm } from '../components/Forms/SignUpForms/AddressDataForm';
import { VacancyDataForm } from '../components/Forms/SignUpForms/VacancyDataForm';
import { AcademicComponent } from '../components/AcademicComponent';

const Tab = createMaterialTopTabNavigator();

const tabScreens = [
     {
      name: 'Academic',
      component: AcademicComponent,
      options: {
        title: 'Consulta Acadêmica',
      },
    },
    {
      name: 'Zoonoses',
      component: VacancyDataForm,
      options: {
        title: 'Zoonoses',
      },
    },
    {
      name: 'Exams',
      component: AddressDataForm,
      options: {
        title: 'Exames Laboratoriais (em breve)',
      },
    },
];

export default function AppTab() {

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
            height:80
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
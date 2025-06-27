import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton, HeaderShownContext } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

const { Screen, Navigator } = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AppScreen from '../screens/AppScreen';

import { Logo } from "../components/Logo";
import AppButtons from "../components/Buttons/AppButtons";
import UserDataScreen from "../screens/UserDataScreen";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false
          }}
      />
      <Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerTitle: 'Voltar',
          headerRight: () => (
            <Logo style={{ width: 60, height: 60, marginRight: 10 }} />
             ),
         }}
      />
      <Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{
          headerTitle: 'Voltar',
          headerRight: () => (
            <Logo style={{ 
              width: 60, 
              height: 60, 
              marginRight: 10 
              }} 
            />
          ),
        }}
      />
      <Screen 
        name="App" 
        component={AppScreen} 
        options={{
          headerTitle: '',
          headerRight: () => (
            <AppButtons />
          ),
          headerLeft: () => (
            <Logo style={{ 
              width: 60, 
              height: 60, 
              marginLeft: 10 }} 
            />
            )
        }}
      />
      <Screen 
        name="UserData" 
        component={UserDataScreen} 
        options={{
          headerTitle: 'Voltar',
          headerRight: () => (
            <Logo style={{ 
              width: 60, 
              height: 60, 
              marginRight: 10 
              }} 
            />
          ),
        }}
      />
    </Navigator>
  );
}
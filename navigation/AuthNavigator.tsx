// navigation/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSelectionScreen from '../screens/Auth/LoginSelectionScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { RouteProp } from '@react-navigation/native';

const Stack = createStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
  LoginSelection: undefined;
  Login: { role: 'NGO' | 'Community' | 'Panchayat' | 'NCCC' };
  RegisterScreen: undefined;
};

export type LoginScreenProps = {
  route: RouteProp<AuthStackParamList, 'Login'>;
  setUserRole: (role: 'NGO' | 'Community' | 'Panchayat' | 'NCCC') => void;
  navigation: any;
};

export default function AuthNavigator({
  setUserRole,
}: {
  setUserRole: (role: 'NGO' | 'Community' | 'Panchayat' | 'NCCC') => void;
}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} />
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setUserRole={setUserRole} />}
      </Stack.Screen>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

// navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import NGONavigator from './NGONav';
import { Dispatch, SetStateAction } from 'react';
import CommunityNavigator from './CommunityNav';
import PanchayatNavigator from './PanchayatNav';
import NCCCNavigator from './NCCCNav';

type RootStackParamList = {
  Auth: undefined;
  NGO: undefined;
  Community: undefined;
  Panchayat: undefined;
  NCCC: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootNavigator({
  userRole,
  setUserRole,
}: {
  userRole: 'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null;
  setUserRole: Dispatch<SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>>;
}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userRole === null ? (
        <Stack.Screen name="Auth">
          {(props) => <AuthNavigator {...props} setUserRole={setUserRole} />}
        </Stack.Screen>
      ) : userRole === 'NGO' ? (
        <Stack.Screen name="NGO">
          {(props) => <NGONavigator {...props} setUserRole={setUserRole} />}
        </Stack.Screen>
      ) : userRole === 'Community' ? (
        <Stack.Screen name="Community">
          {(props) => <CommunityNavigator {...props} setUserRole={setUserRole} />}
        </Stack.Screen>
      ) : userRole === 'Panchayat' ? (
        <Stack.Screen name="Panchayat">
          {(props) => <PanchayatNavigator {...props} setUserRole={setUserRole} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="NCCC">
          {(props) => <NCCCNavigator {...props} setUserRole={setUserRole} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}

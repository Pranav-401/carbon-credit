// navigation/RootNavigator.tsx
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import NGONavigator from './NGONav';
import CommunityNavigator from './CommunityNav';
import PanchayatNavigator from './PanchayatNav';
import NCCCNavigator from './NCCCNav';

const Stack = createStackNavigator();

type UserRole = 'NGO' | 'Community' | 'Panchayat' | 'NCCC';

export default function RootNavigator() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!userRole ? (
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

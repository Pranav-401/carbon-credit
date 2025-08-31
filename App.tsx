// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  const [userRole, setUserRole] = useState<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator userRole={userRole} setUserRole={setUserRole} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

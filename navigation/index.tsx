import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator
        userRole={null}
        setUserRole={function (
          value: React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </NavigationContainer>
  );
}

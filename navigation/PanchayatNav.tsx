import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanchayatDashboard from 'screens/Panchayat/PanchayatDashboard';
import PanchayatReport from 'screens/Panchayat/PanchayatReport';
import PanchayatProfile from 'screens/Panchayat/PanchayatProfile';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function PanchayatNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={PanchayatDashboard} />
      <Tab.Screen name="Reports" component={PanchayatReport} />
      <Tab.Screen name="Profile" component={PanchayatProfile} />
    </Tab.Navigator>
  );
}

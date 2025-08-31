import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NCCCDashboard from 'screens/NCCC/NCCCDashboard';
import NCCCReport from 'screens/NCCC/NCCCReport';
import NCCCProfile from 'screens/NCCC/NCCCProfile';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NCCCNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={NCCCDashboard} />
      <Tab.Screen name="Reports" component={NCCCReport} />
      <Tab.Screen name="Profile" component={NCCCProfile} />
    </Tab.Navigator>
  );
}

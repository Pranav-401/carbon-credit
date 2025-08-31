import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityDashboard from 'screens/Community/CommunityDashboard';
import CommunityReports from 'screens/Community/CommunityReport';
import CommunityProfile from 'screens/Community/CommunityProfile';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function CommunityNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={CommunityDashboard} />
      <Tab.Screen name="Reports" component={CommunityReports} />
      <Tab.Screen name="Profile" component={CommunityProfile} />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NGODashboard from 'screens/NGO/NGODashboard';
import NGOReports from 'screens/NGO/NGOReport';
import NGOProfile from 'screens/NGO/NGOProfile';
import UploadReport from 'components/UploadReport'
import ViewReports from 'components/ViewReports';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NGONavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={NGODashboard} />
      <Tab.Screen name="Reports" component={NGOReports} />
      <Tab.Screen name="Profile" component={NGOProfile} />
      <Tab.Screen name="UploadReport" component={UploadReport} />
      <Tab.Screen name="ViewReports" component={ViewReports} />
    </Tab.Navigator>

  );
}

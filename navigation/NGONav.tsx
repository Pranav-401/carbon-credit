import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NGODashboard from 'screens/NGO/NGODashboard';
import NGOReports from 'screens/NGO/NGOReport';
import NGOProfile from 'screens/NGO/NGOProfile';
import UploadReport from 'screens/NGO/NGOUploadReport';
import ViewReports from 'screens/NGO/NGOViewReports';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NGONavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={NGODashboard} initialParams={{ userRole: 'NGO' }} />
      <Tab.Screen name="Reports" component={NGOReports} initialParams={{ userRole: 'NGO' }} />
      <Tab.Screen name="Profile" component={NGOProfile} initialParams={{ userRole: 'NGO' }} />
      <Tab.Screen
        name="UploadReport"
        component={UploadReport}
        initialParams={{ userRole: 'NGO' }}
      />
      <Tab.Screen name="ViewReports" component={ViewReports} initialParams={{ userRole: 'NGO' }} />
    </Tab.Navigator>
  );
}

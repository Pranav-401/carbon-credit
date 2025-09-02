import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanchayatDashboard from 'screens/Panchayat/PanchayatDashboard';
import PanchayatReport from 'screens/Panchayat/PanchayatReport';
import PanchayatProfile from 'screens/Panchayat/PanchayatProfile';
import ViewReports from 'screens/Panchayat/PanchayatViewReports';
import UploadReport from 'screens/Panchayat/PanchayatUploadReport';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function PanchayatNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={PanchayatDashboard}
        initialParams={{ userRole: 'Panchayat' }}
      />
      <Tab.Screen
        name="Reports"
        component={PanchayatReport}
        initialParams={{ userRole: 'Panchayat' }}
      />
      <Tab.Screen
        name="Profile"
        component={PanchayatProfile}
        initialParams={{ userRole: 'Panchayat' }}
      />
      <Tab.Screen
        name="UploadReport"
        component={UploadReport}
        initialParams={{ userRole: 'Panchayat' }}
      />
      <Tab.Screen
        name="ViewReports"
        component={ViewReports}
        initialParams={{ userRole: 'Panchayat' }}
      />
    </Tab.Navigator>
  );
}

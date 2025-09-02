import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NCCCDashboard from 'screens/NCCC/NCCCDashboard';
import NCCCReport from 'screens/NCCC/NCCCReport';
import NCCCProfile from 'screens/NCCC/NCCCProfile';
import UploadReport from 'screens/NCCC/NCCCUploadReport';
import ViewReports from 'screens/NCCC/NCCCViewReports';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NCCCNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={NCCCDashboard} initialParams={{ userRole: 'NCCC' }} />
      <Tab.Screen name="Reports" component={NCCCReport} initialParams={{ userRole: 'NCCC' }} />
      <Tab.Screen name="Profile" component={NCCCProfile} initialParams={{ userRole: 'NCCC' }} />
      <Tab.Screen
        name="UploadReport"
        component={UploadReport}
        initialParams={{ userRole: 'NCCC' }}
      />
      <Tab.Screen name="ViewReports" component={ViewReports} initialParams={{ userRole: 'NCCC' }} />
    </Tab.Navigator>
  );
}

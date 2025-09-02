import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityDashboard from 'screens/Community/CommunityDashboard';
import CommunityReports from 'screens/Community/CommunityReport';
import CommunityProfile from 'screens/Community/CommunityProfile';
import UploadReport from 'screens/Community/CommunityUploadReport';
import ViewReports from 'screens/Community/CommunityViewReports';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function CommunityNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={CommunityDashboard}
        initialParams={{ userRole: 'Community' }}
      />
      <Tab.Screen
        name="Reports"
        component={CommunityReports}
        initialParams={{ userRole: 'Community' }}
      />
      <Tab.Screen
        name="Profile"
        component={CommunityProfile}
        initialParams={{ userRole: 'Community' }}
      />
      <Tab.Screen
        name="UploadReport"
        component={UploadReport}
        initialParams={{ userRole: 'Community' }}
      />
      <Tab.Screen
        name="ViewReports"
        component={ViewReports}
        initialParams={{ userRole: 'Community' }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityDashboard from 'screens/Community/CommunityDashboard';
import CommunityReports from 'screens/Community/CommunityReport';
import CommunityProfile from 'screens/Community/CommunityProfile';
import UploadReport from 'screens/Community/CommunityUploadReport';
import ViewReports from 'screens/Community/CommunityViewReports';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function CommunityNavigator({ setUserRole }: Props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle'; // default icon

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'UploadReport') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          } else if (route.name === 'ViewReports') {
            iconName = focused ? 'eye' : 'eye-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
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

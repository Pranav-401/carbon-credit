import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanchayatDashboard from 'screens/Panchayat/PanchayatDashboard';
import PanchayatReport from 'screens/Panchayat/PanchayatReport';
import PanchayatProfile from 'screens/Panchayat/PanchayatProfile';
import ViewReports from 'screens/Panchayat/PanchayatViewReports';
import UploadReport from 'screens/Panchayat/PanchayatUploadReport';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function PanchayatNavigator({ setUserRole }: Props) {
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

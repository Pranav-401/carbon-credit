import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NGODashboard from 'screens/NGO/NGODashboard';
import NGOReports from 'screens/NGO/NGOReport';
import NGOProfile from 'screens/NGO/NGOProfile';
import UploadReport from 'screens/NGO/NGOUploadReport';
import ViewReports from 'screens/NGO/NGOViewReports';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NGONavigator({ setUserRole }: Props) {
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

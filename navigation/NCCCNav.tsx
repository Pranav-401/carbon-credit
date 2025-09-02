import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NCCCDashboard from 'screens/NCCC/NCCCDashboard';
import NCCCReport from 'screens/NCCC/NCCCReport';
import NCCCProfile from 'screens/NCCC/NCCCProfile';
import UploadReport from 'screens/NCCC/NCCCUploadReport';
import ViewReports from 'screens/NCCC/NCCCViewReports';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  setUserRole: React.Dispatch<
    React.SetStateAction<'NGO' | 'Community' | 'Panchayat' | 'NCCC' | null>
  >;
};

const Tab = createBottomTabNavigator();

export default function NCCCNavigator({ setUserRole }: Props) {
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

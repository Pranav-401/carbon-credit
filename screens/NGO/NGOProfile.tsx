import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation, route }: any) {
  const userType = route?.params?.userType || 'User';
  const { userRole } = route.params || { userRole: 'NGO' };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{userType[0]}</Text>
        </View>
        <Text style={styles.name}>{userType} Name</Text>
        <Text style={styles.role}>{userType}</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <Text style={styles.label}>Email: example@email.com</Text>
        <Text style={styles.label}>Phone: +91 9876543210</Text>
        <Text style={styles.label}>Location: Navi Mumbai, India</Text>
      </View>

      {/* Actions */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Reports')}>
          <Text style={styles.buttonText}>View Reports</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2fdf5', // eco-friendly soft green
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  role: {
    fontSize: 16,
    color: '#388E3C',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2E7D32',
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

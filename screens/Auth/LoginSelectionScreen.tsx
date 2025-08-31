// screens/Auth/LoginSelectionScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginSelectionScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Login Type</Text>

      {['NGO', 'Community', 'Panchayat', 'NCCC'].map((role) => (
        <TouchableOpacity
          key={role}
          style={styles.card}
          onPress={() => navigation.navigate('Login', { role })}>
          <Text style={styles.cardText}>{role} Login</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  card: { backgroundColor: '#3A3D6B', padding: 20, marginVertical: 10, borderRadius: 10 },
  cardText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});

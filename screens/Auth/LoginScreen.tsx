// screens/Auth/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { LoginScreenProps } from '../../navigation/AuthNavigator';

export default function LoginScreen({ route, setUserRole }: LoginScreenProps) {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fakeUsers = {
    NGO: { email: 'ngo@test.com', password: '1234' },
    Community: { email: 'community@test.com', password: '1234' },
    Panchayat: { email: 'panchayat@test.com', password: '1234' },
    NCCC: { email: 'nccc@test.com', password: '1234' },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{role} Login</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Login"
        onPress={() => {
          const validUser = fakeUsers[role];
          if (email === validUser.email && password === validUser.password) {
            setUserRole(role);
          } else {
            Alert.alert('Invalid Credentials', 'Try again!');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12, borderRadius: 8 },
});

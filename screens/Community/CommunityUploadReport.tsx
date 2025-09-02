'use client';

import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export default function UploadReport({ route, navigation }: { route: any; navigation: any }) {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');

  // 👇 Get userRole from navigation params
  const { userRole } = route.params || { userRole: 'Community' };

  const submitReport = async () => {
    if (!name || !height) return alert('Please fill all fields');

    // 👇 Decide collection name dynamically
    let collectionName = 'reports';
    if (userRole === 'NGO') collectionName = 'ngoreport';
    else if (userRole === 'Panchayat') collectionName = 'panchayatreport';
    else if (userRole === 'Community') collectionName = 'communityreport';

    try {
      await addDoc(collection(db, collectionName), {
        name,
        height,
        accept: 0,
        reject: 0,
        createdAt: new Date(),
      });
      alert(`${userRole} report submitted successfully!`);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding report: ', error);
      alert('Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Report ({userRole})</Text>

      {/* Name input */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Dropdown for Tree Height */}
      <Text style={styles.label}>Tree Height</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={height} onValueChange={(itemValue) => setHeight(itemValue)}>
          <Picker.Item label="Select Height" value="" />
          <Picker.Item label="Small" value="Small" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Big" value="Big" />
        </Picker>
      </View>

      {/* Submit button */}
      <Pressable onPress={submitReport} style={styles.button}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FDF5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#4B5563',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom: 16,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

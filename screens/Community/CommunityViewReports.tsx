import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseconfig'; // adjust path

const ViewReports = ({ route, navigation }: { route: any; navigation: any }) => {
  const role = route?.params?.role || 'community';
  const userRole = route?.params?.userRole || 'Community';
  const [allReports, setAllReports] = useState<any[]>([]);
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    let collectionName = '';

    if (role === 'ngo') collectionName = 'ngoreport';
    else if (role === 'community') collectionName = 'communityreport';
    else if (role === 'panchayat') collectionName = 'panchayatreport';
    if (!collectionName) return;

    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
      const reports: any[] = [];
      snapshot.forEach((doc) => {
        reports.push({ id: doc.id, ...doc.data() });
      });
      setAllReports(reports);
    });

    return () => unsubscribe();
  }, [role]);

  // 👇 Filter based on dropdown
  const getFilteredReports = () => {
    if (filter === 'pending') {
      return allReports.filter((r) => r.accept === 0 && r.reject === 0);
    } else if (filter === 'accepted') {
      return allReports.filter((r) => r.accept === 1 && r.reject === 0);
    } else if (filter === 'rejected') {
      return allReports.filter((r) => r.reject === 1 && r.accept === 0);
    }
    return allReports;
  };

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.treeName}>🌱 {item.name}</Text>
      <Text style={styles.treeHeight}>Height: {item.height}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Dropdown for selecting filter */}
      <Picker
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
        style={styles.dropdown}>
        <Picker.Item label="📌 Pending Reports" value="pending" />
        <Picker.Item label="✅ Accepted Reports" value="accepted" />
        <Picker.Item label="❌ Rejected Reports" value="rejected" />
      </Picker>

      {/* Filtered reports */}
      <FlatList
        data={getFilteredReports()}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>No reports found</Text>}
      />
    </View>
  );
};

export default ViewReports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 15,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginBottom: 15,
  },
  card: {
    flexDirection: 'column', // 👈 fixed typo
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12, // 👈 vertical spacing between cards
    borderRadius: 8,
    borderWidth: 2, // thicker border like your screenshot
    borderColor: '#000', // black border
  },
  treeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  treeHeight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  empty: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 20,
  },
});

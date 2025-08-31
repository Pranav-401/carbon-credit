import { View, Text, StyleSheet } from 'react-native';

export default function CommunityReports({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Community Report</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 8 },
});

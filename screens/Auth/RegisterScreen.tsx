import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function RegisterScreen({ route, navigation }: any) {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', `${role} registered successfully!`);
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/logo-white.png')} style={styles.logo} />
          <Text style={styles.title}>{role} Register</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Animated.View style={{ opacity: fadeAnim }}>
          <TouchableOpacity onPress={handleRegister} style={styles.card} activeOpacity={0.8}>
            <LinearGradient
              colors={['#4facfe', '#43e97b']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}>
              <Text style={styles.cardText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.registerText}>
            Already have an account? <Text style={styles.registerLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.4)' },
  imageContainer: { justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  logo: { width: 180, height: 180, resizeMode: 'contain', marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
  },
  card: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  button: { padding: 15, borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
  cardText: { color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: '600' },
  registerText: { marginTop: 20, textAlign: 'center', color: '#fff' },
  registerLink: { color: '#4facfe', fontWeight: 'bold' },
});

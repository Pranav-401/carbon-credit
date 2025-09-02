import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Image,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginScreenProps } from '../../navigation/AuthNavigator';

export default function LoginScreen({ route, navigation, setUserRole }: LoginScreenProps) {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const fakeUsers = {
    NGO: { email: 'ngo@test.com', password: '1234' },
    Community: { email: 'community@test.com', password: '1234' },
    Panchayat: { email: 'panchayat@test.com', password: '1234' },
    NCCC: { email: 'nccc@test.com', password: '1234' },
  };

  const handleLogin = () => {
    const validUser = fakeUsers[role];
    if (email === validUser.email && password === validUser.password) {
      setUserRole(role);
    } else {
      Alert.alert('Invalid Credentials', 'Try again!');
    }
  };

  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          enableOnAndroid={true}
          extraScrollHeight={40}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {/* Everything stacked together */}
          <View style={styles.container}>
            <Image source={require('../../assets/logo-white.png')} style={styles.logo} />
            <Text style={styles.title}>{role} Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Animated.View style={{ opacity: fadeAnim, width: '100%' }}>
              <TouchableOpacity onPress={handleLogin} style={styles.card} activeOpacity={0.8}>
                <LinearGradient
                  colors={['#4facfe', '#43e97b']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.button}>
                  <Text style={styles.cardText}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen', { role })}>
              <Text style={styles.registerText}>
                Don’t have an account? <Text style={styles.registerLink}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 20 },

  container: { alignItems: 'center', justifyContent: 'center' },

  logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
  },

  card: {
    width: '100%',
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

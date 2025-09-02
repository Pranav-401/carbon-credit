// screens/Auth/LoginSelectionScreen.tsx
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function LoginSelectionScreen({ navigation }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const roles = ['NGO', 'Community', 'Panchayat', 'NCCC'];

  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/logo-white.png')} style={styles.logo} />
          <Text style={styles.title}>Select Your Role</Text>
        </View>

        {roles.map((role, index) => (
          <Animated.View key={role} style={{ opacity: fadeAnim, marginVertical: 8 }}>
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login', { role })}>
              <LinearGradient
                colors={['#4facfe', '#43e97b']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}>
                <Text style={styles.cardText}>{role} Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    width: '80%', // responsive width
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

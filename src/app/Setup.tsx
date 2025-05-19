import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PinDots from '../components/PinDots';
import PinKeyboard from '../components/PinKeyboard';

const { width } = Dimensions.get('window');

const PIN_LENGTH = 6;

export default function PinSetupScreen () {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleKeyPress = (key: string) => {
    if (key === 'del') {
      setPin(pin.slice(0, -1));
    } else if (pin.length < PIN_LENGTH) {
      setPin(pin + key);
    }
  };

  const handleContinue = () => {
    if (pin.length === PIN_LENGTH) {
      router.push('/(home)/home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Up PIN</Text>
      <Text style={styles.subtitle}>Create a PIN to Protect</Text>
      <Text style={styles.description}>
        You'll use this PIN whenever you add{"\n"}money or make a transaction.
      </Text>
      <PinDots pinLength={PIN_LENGTH} pin={pin} />
      <TouchableOpacity
        style={[styles.continueButton, pin.length !== PIN_LENGTH && { opacity: 0.5 }]}
        disabled={pin.length !== PIN_LENGTH}
        onPress={handleContinue}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <PinKeyboard onKeyPress={handleKeyPress} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
    width: width * 0.8,
  },
  continueButton: {
    backgroundColor: '#7DB6F5',
    borderRadius: 24,
    paddingVertical: 12,
    width: width * 0.8,
    alignItems: 'center',
    marginBottom: 32,
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

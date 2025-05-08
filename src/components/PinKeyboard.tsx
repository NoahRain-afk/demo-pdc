import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface PinKeyboardProps {
  onKeyPress: (key: string) => void;
}

const PinKeyboard: React.FC<PinKeyboardProps> = ({ onKeyPress }) => {
  const renderKey = (key: string, flex?: number) => (
    <TouchableOpacity
      key={key}
      style={[styles.key, flex ? { flex } : null]}
      onPress={() => onKeyPress(key)}
      disabled={key === ''}
    >
      <Text style={styles.keyText}>{key === 'del' ? '⌫' : key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.keyboard}>
      <View style={styles.keyRow}>
        {['1', '2', '3'].map(renderKey)}
      </View>
      <View style={styles.keyRow}>
        {['4', '5', '6'].map(renderKey)}
      </View>
      <View style={styles.keyRow}>
        {['7', '8', '9'].map(renderKey)}
      </View>
      <View style={styles.keyRow}>
        {['', '0', 'del'].map(renderKey)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  key: {
    width: 64,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  keyText: {
    fontSize: 22,
    color: '#222',
  },
});

export default PinKeyboard; 
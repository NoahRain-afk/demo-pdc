import React from 'react';
import { StyleSheet, View } from 'react-native';

interface PinDotsProps {
  pinLength: number;
  pin: string;
}

const PinDots: React.FC<PinDotsProps> = ({ pinLength, pin }) => {
  return (
    <View style={styles.pinContainer}>
      {[...Array(pinLength)].map((_, i) => (
        <View
          key={i}
          style={[styles.pinDot, pin.length === i && styles.pinDotActive]}
        >
          {pin.length > i ? <View style={styles.filledDot} /> : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  pinDot: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },
  pinDotActive: {
    borderColor: '#FFB800',
  },
  filledDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFB800',
  },
});

export default PinDots; 
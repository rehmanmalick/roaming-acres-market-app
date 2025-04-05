import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const VerificationCodeInput = ({ onCodeFilled }) => {
  const [code, setCode] = useState('');

  const handleChange = (text) => {
    // Remove non-digit characters
    const cleanedText = text.replace(/[^0-9]/g, '');
    
    // Limit to 4 digits
    const newCode = cleanedText.slice(0, 4);
    setCode(newCode);

    if (newCode.length === 4) {
      onCodeFilled(newCode);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.hiddenInput}
        keyboardType="number-pad"
        maxLength={4}
        value={code}
        onChangeText={handleChange}
      />
      <View style={styles.displayContainer}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={styles.displayDigit}>
            <Text style={styles.digitText}>
              {code[i] || ''}
            </Text>
            <View style={code.length === i ? styles.cursor : null} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hiddenInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  displayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  displayDigit: {
    width: 40,
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitText: {
    fontSize: 24,
  },
  cursor: {
    position: 'absolute',
    bottom: 5,
    width: 2,
    height: 20,
    backgroundColor: 'black',
  },
});

export default VerificationCodeInput;
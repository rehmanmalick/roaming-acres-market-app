import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
  const [isOn, setIsOn] = useState(value);
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // Adjust for circle padding inside the switch
  });

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onValueChange(!isOn);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View style={styles.switchContainer}>
        <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007C7C', // teal color
    padding: 2,
    justifyContent: 'center',
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
  },
});

export default CustomSwitch;

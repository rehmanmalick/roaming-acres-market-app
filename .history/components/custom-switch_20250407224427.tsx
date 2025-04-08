import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onValueChange }) => {
  const [isOn, setIsOn] = useState<boolean>(value);
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn, animation]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // adjust as needed
  });

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View style={styles.switchContainer}>
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ translateX }] } as Animated.WithAnimatedObject<ViewStyle>,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007C7C',
    padding: 2,
    justifyContent: 'center',
  },
  circle: {
    width: 20, // reduced thumb size as requested
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default CustomSwitch;

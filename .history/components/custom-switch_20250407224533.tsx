import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import { View } from 'react-native';
import { styled } from 'nativewind';

const AnimatedView = Animated.createAnimatedComponent(styled(View));

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (val: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onValueChange }) => {
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
    outputRange: [2, 26], // change based on knob size
  });

  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={toggle}>
      <View className="w-[52px] h-[30px] bg-teal-700 rounded-full p-[2px] justify-center">
        <AnimatedView
          style={{ transform: [{ translateX }] }}
          className="w-[20px] h-[20px] rounded-full bg-white"
        />
      </View>
    </Pressable>
  );
};

export default CustomSwitch;

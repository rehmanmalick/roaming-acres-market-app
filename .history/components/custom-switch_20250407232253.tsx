import React, { useEffect, useRef, useState } from "react";
import { View, Pressable, Animated } from "react-native";

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
}) => {
  const [isOn, setIsOn] = useState(value);
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Interpolate the background color based on isOn
  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d1d1d1", "#008080"], // Grey to teal when toggled on
  });

  // Interpolate the knob's translation position
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 28], // Knob movement from left to right
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={toggle}>
      <Animated.View
        style={{
          width: 56,
          height: 30,
          backgroundColor, // Apply animated background color
          borderRadius: 15,
          padding: 2,
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            transform: [{ translateX }],
            width: 22,
            height: 22,
            borderRadius: 9999,
            backgroundColor: "#ffffff", // The knob color
          }}
        />
      </Animated.View>
    </Pressable>
  );
};

export default CustomSwitch;

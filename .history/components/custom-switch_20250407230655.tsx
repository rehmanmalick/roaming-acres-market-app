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

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 28], // knob movement
  });

  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={toggle}>
      <View className="w-[44px] h-[24px] bg-teal-700 rounded-full p-[2px] justify-center">
        <Animated.View
          style={{
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, 22], // Adjusts the position smoothly from left to right
                }),
              },
            ],
            width: 18, // Width of the toggle circle
            height: 18, // Height of the toggle circle
            borderRadius: 9999, // Makes the toggle circle round
            backgroundColor: "#ffffff",
            margin: 2, // Ensures the toggle stays within the bounds of the outer container
          }}
        />
      </View>
    </Pressable>
  );
};

export default CustomSwitch;

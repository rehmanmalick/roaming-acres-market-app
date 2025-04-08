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
                  outputRange: [2, 22],
                }),
              },
            ],
            width: 18,
            height: 18,
            borderRadius: 9999,
            backgroundColor: "#ffffff",
            borderWidth: 2, // Optional, for better border visibility
            borderColor: "transparent", // Optional, to ensure no border color mismatch
          }}
        />
      </View>
    </Pressable>
  );
};

export default CustomSwitch;

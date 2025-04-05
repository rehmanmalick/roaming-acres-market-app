import React, { forwardRef, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

type OTPInputProps = {
  code: string;
  setCode: (code: string) => void;
  maximumLength: number;
};

const OTPInput = forwardRef<TextInput, OTPInputProps>(
  ({ code, setCode, maximumLength }, ref) => {
    const inputRef = useRef<TextInput>(null);
    const boxArray = new Array(maximumLength).fill(0);

    const handleOnPress = () => {
      inputRef.current?.focus();
    };

    const handleTextChange = (text: string) => {
      setCode(text.replace(/[^0-9]/g, ""));
    };

    useEffect(() => {
      if (code.length === maximumLength) {
        inputRef.current?.blur();
      }
    }, [code]);

    return (
      <View className="flex-row justify-center mb-6">
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleTextChange}
          maxLength={maximumLength}
          keyboardType="number-pad"
          className="absolute opacity-0"
        />

        {boxArray.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={handleOnPress}
            className={`w-16 h-16 border-2 mx-2 rounded-lg flex items-center justify-center ${
              code.length === index ? "border-[#008080]" : "border-gray-300"
            }`}
          >
            <Text className="text-2xl font-bold text-gray-800">
              {code[index] || ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);

export default OTPInput;

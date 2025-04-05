import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import OTPInput from "../../components/otpinput";

const VerifyCodeScreen = () => {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const otpRef = useRef(null);

  const handleVerify = async () => {
    if (code.length !== 4) {
      Alert.alert("Validation Error", "Please enter the 4-digit code");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API verification
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      Alert.alert("Error", "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
        Verify Phone Number
      </Text>

      <Text className="text-gray-600 text-center mb-8">
        Enter the 4-digit code sent to {phone}
      </Text>

      <OTPInput ref={otpRef} code={code} setCode={setCode} maximumLength={4} />

      <TouchableOpacity
        className={`w-full py-4 rounded-lg ${
          code.length === 4 ? "bg-blue-600" : "bg-blue-400"
        } flex items-center justify-center mt-8`}
        onPress={handleVerify}
        disabled={code.length !== 4 || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold">Verify Code</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Didn't receive code? </Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-semibold">Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyCodeScreen;

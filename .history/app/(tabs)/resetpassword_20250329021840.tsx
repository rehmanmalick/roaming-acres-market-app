import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../components/CustomTextInput";

const ResetPasswordScreen = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const phoneRef = useRef<TextInput>(null);

  // Simple phone number validation (adjust as needed)
  const isPhoneValid = (phone: string) => phone.length >= 10;

  const handleSendCode = async () => {
    if (!isPhoneValid(phone)) {
      Alert.alert("Validation Error", "Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to send verification code
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push({
        pathname: "/verify-code",
        params: { phone },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to send verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
        Reset Password
      </Text>

      <Text className="text-gray-600 text-center mb-8">
        Enter your phone number to receive a verification code
      </Text>

      <CustomTextInput
        ref={phoneRef}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        returnKeyType="send"
        onSubmitEditing={handleSendCode}
        validationIcon={
          phone
            ? isPhoneValid(phone)
              ? "checkmark-circle"
              : "close-circle"
            : undefined
        }
        validationIconColor={isPhoneValid(phone) ? "#4CAF50" : "#F44336"}
        showValidationIcon={!!phone}
      />

      <TouchableOpacity
        className={`w-full py-4 rounded-lg ${
          isPhoneValid(phone) ? "bg-blue-600" : "bg-blue-400"
        } flex items-center justify-center mt-2`}
        onPress={handleSendCode}
        disabled={!isPhoneValid(phone) || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold">Send Code</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center mt-6">
        <Text
          className="text-gray-600"
          onPress={() => router.push("/resetpassd")}
        >
          Remember your password?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-blue-600 font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

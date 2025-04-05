import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custominput";
import Wrapper from "@/components/wrapper";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

const ResetPasswordScreen = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);
  const phoneRef = useRef<TextInput>(null);

  // Phone number validation (adjust as needed)
  const isPhoneValid = (phone: string) => phone.length >= 10;

  const handleSendCode = async () => {
    setShowAllErrors(true);

    if (!isPhoneValid(phone)) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to send verification code
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/verificationcode");
    } catch (error) {
      Alert.alert("Error", "Failed to send verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 w-full bg-white px-6 justify-start mt-8">
            <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-2">
              Registration
            </Text>

            <Text className="text-[#9796A1] text-start mb-8">
              Enter your phone number to verify your account
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
                showAllErrors && phone
                  ? isPhoneValid(phone)
                    ? "checkmark-circle"
                    : "close-circle"
                  : undefined
              }
              validationIconColor={
                isPhoneValid(phone) ? COLORS.primary : "#E26D08"
              }
              showValidationIcon={showAllErrors && !!phone}
              errorMessage={
                showAllErrors && !isPhoneValid(phone)
                  ? "Please enter a valid phone number"
                  : undefined
              }
            />

            <TouchableOpacity
              className={`w-full py-4 rounded-[3px] bg-[${COLORS.primary}] flex items-center justify-center mt-2`}
              onPress={handleSendCode}
              disabled={!isPhoneValid(phone) || isLoading}
              accessibilityLabel="Send verification code"
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                  Send
                </Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                Remember your password?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/login")}
                accessibilityLabel="Go to login"
                accessibilityRole="link"
              >
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default ResetPasswordScreen;

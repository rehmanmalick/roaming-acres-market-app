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

const EmailVerificationScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);
  const emailRef = useRef<TextInput>(null);

  // Email validation
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = async () => {
    setShowAllErrors(true);

    if (!isEmailValid(email)) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to send verification code
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push({
        pathname: "/verificationcode",
        params: { email: formData.email  },
      });
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
              Enter your email address to verify your account
            </Text>

            <CustomTextInput
              ref={emailRef}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              returnKeyType="send"
              onSubmitEditing={handleSendCode}
              validationIcon={
                showAllErrors && email
                  ? isEmailValid(email)
                    ? "checkmark-circle"
                    : "close-circle"
                  : undefined
              }
              validationIconColor={
                isEmailValid(email) ? COLORS.primary : "#E26D08"
              }
              showValidationIcon={showAllErrors && !!email}
              errorMessage={
                showAllErrors && !isEmailValid(email)
                  ? "Please enter a valid email address"
                  : undefined
              }
            />

            <TouchableOpacity
              className={`w-full py-4 rounded-[3px] bg-[${COLORS.primary}] flex items-center justify-center mt-2`}
              onPress={handleSendCode}
              disabled={!isEmailValid(email) || isLoading}
              accessibilityLabel="Send verification code"
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                  Send Code
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default EmailVerificationScreen;

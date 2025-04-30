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
  TextInput,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router"; // ✅ added useLocalSearchParams
import CustomTextInput from "./custom-input";
import Wrapper from "@/components/common/wrapper";

interface ResetComponentProps {
  verificationPath?: any;
}

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

const ResetComponent: React.FC<ResetComponentProps> = ({
  verificationPath = "",
}) => {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>(); // ✅ get role here
  const [email, setEmail] = useState("");
  const [showAllErrors, setShowAllErrors] = useState(false);
  const emailRef = useRef<TextInput>(null);

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = () => {
    setShowAllErrors(true);

    if (!isEmailValid(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    router.push({
      pathname: verificationPath,
      params: { email }, // ✅ pass both email and role
    });
  };

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1  mt-20">
            <Text className="text-4xl font-medium text-start text-gray-800 mb-2">
              Reset Password
            </Text>

            <Text className="text-[#9796A1] text-start mb-8">
              Please enter your email address to request a password reset
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
              className={` py-4 rounded-md bg-[${COLORS.primary}] flex items-center justify-center mt-2`}
              onPress={handleSendCode}
              disabled={!isEmailValid(email)}
              accessibilityLabel="Send verification code"
              accessibilityRole="button"
            >
              <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                Send Code
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default ResetComponent;

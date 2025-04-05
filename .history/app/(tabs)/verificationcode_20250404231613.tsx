import React, { useState, useRef } from "react";
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
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import OTPInput from "../../components/otpinput";
import Wrapper from "@/components/wrapper";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

const VerifyCodeScreen = () => {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);
  const otpRef = useRef(null);

  const handleVerify = async () => {
    setShowAllErrors(true);

    if (code.length !== 4) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API verification
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/home-screen");
    } catch (error) {
      Alert.alert("Error", "Invalid verification code");
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
              Verify Phone Number
            </Text>

            <Text className="text-[#111719] text-start mb-8">
              Enter the 4-digit code sent to {phone}
            </Text>

            <OTPInput
              ref={otpRef}
              code={code}
              setCode={setCode}
              maximumLength={4}
              error={
                showAllErrors && code.length !== 4
                  ? "Please enter the 4-digit code"
                  : null
              }
            />

            <TouchableOpacity
              className={`w-full py-4 rounded-[3px] bg-[${COLORS.primary}] flex items-center justify-center mt-8`}
              onPress={handleVerify}
              disabled={code.length !== 4 || isLoading}
              accessibilityLabel="Verify code"
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                  Verify Code
                </Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                I don’t receive a code!{" "}
              </Text>
              <TouchableOpacity
                accessibilityLabel="Resend verification code"
                accessibilityRole="button"
              >
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Please resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default VerifyCodeScreen;

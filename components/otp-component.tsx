import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import OTPInput from "./otp-input";
import Wrapper from "@/components/common/wrapper";
import Button from "./button"; // Your custom button component

interface OtpComponentProps {
  verifyPath?: any;
  resendPath?: any;
  email?: any;
}

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

const OtpComponent: React.FC<OtpComponentProps> = ({
  verifyPath = "",
  resendPath = "",
  email = "",
}) => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const otpRef = useRef(null);

  const handleVerify = () => {
    if (code.length !== 4) {
      Alert.alert("Error", "Please enter a 4-digit verification code");
      return;
    }
    router.push(verifyPath);
  };

  const handleResendCode = () => {
    if (!email) {
      Alert.alert("Error", "Email is missing. Cannot resend code.");
      return;
    }
    router.push({
      pathname: resendPath,
      params: { email },
    });
  };

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 mt-5">
            <Text className="text-4xl font-medium text-start text-gray-800 mb-2">
              Verification Code
            </Text>
            <Text className="text-[#9796A1] text-start mb-8">
              {email
                ? `Enter the 4-digit code sent to ${email}`
                : "Enter the 4-digit code"}
            </Text>

            <OTPInput
              ref={otpRef}
              code={code}
              setCode={setCode}
              maximumLength={4}
            />

            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                I don't receive a code!{" "}
              </Text>
              <TouchableOpacity
                onPress={handleResendCode}
                accessibilityLabel="Resend verification code"
                accessibilityRole="button"
              >
                <Text className="text-[#008080] px-2 font-semibold">
                  Please resend
                </Text>
              </TouchableOpacity>
            </View>

            {/* TouchableOpacity button */}
            <TouchableOpacity
              className={`w-full py-4 rounded-md bg-[${COLORS.primary}] flex items-center justify-center mt-8`}
              onPress={handleVerify}
              disabled={code.length !== 4}
              accessibilityLabel="Verify code"
              accessibilityRole="button"
            >
              <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                Verify Code
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default OtpComponent;

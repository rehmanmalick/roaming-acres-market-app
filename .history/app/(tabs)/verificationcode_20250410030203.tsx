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
import OTPInput from "../../components/otp-input";
import Wrapper from "@/components/wrapper";
import OtpComponent from "@/components/otp-component";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

const VerifyCodeScreen = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams();
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
      router.push("/verifycode");
    } catch (error) {
      Alert.alert("Error", "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <OtpComponent
  );
};

export default VerifyCodeScreen;

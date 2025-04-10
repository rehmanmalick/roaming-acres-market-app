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
import CustomTextInput from "../../components/custom-input";
import Wrapper from "@/components/wrapper";
import ResetComponent from './../../components/reset-password-component';



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
        params: { email },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to send verification code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <>
   <ResetComponent></ResetComponent>
   </>
  );
};

export default EmailVerificationScreen;

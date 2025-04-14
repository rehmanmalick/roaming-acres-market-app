import React, { useRef, useState, useMemo } from "react";
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
import SignupComponent from "../../components/signup-component";

const SignupScreen = () => {
  const router = useRouter();

  return (
    <>
      <SignupComponent
        verificationPath={"/seller/verification-code"}
        loginPath={"/seller/login"}
      />
    </>
  );
};

export default SignupScreen;

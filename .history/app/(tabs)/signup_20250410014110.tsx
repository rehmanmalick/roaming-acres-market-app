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
import CustomTextInput from "../../components//signup-component";
import Wrapper from "@/components/wrapper";
import { SignupComponent } from "@/components/signup-component";

const SignupScreen = () => {
  const router = useRouter();

  return (
    <>
      <SignupComponent onEmailPress={() => router.push("/signup")} />
    </>
  );
};

export default SignupScreen;

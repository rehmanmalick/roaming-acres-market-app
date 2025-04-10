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
import CustomTextInput from "../../components/custom-input";
import Wrapper from "@/components/wrapper";

// Constants moved to a separate config file would be better
const COLORS = {
  primary: "#008080",
  weak: "#FF4444",
  medium: "#FFBB33",
  strong: "#00C851",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const SignupScreen = () => {
  const router = useRouter();
 

  return (
    <>
    
    </>
  );
};

export default SignupScreen;

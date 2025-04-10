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
import SignupComponent  from "../../components/signup-component";
import Wrapper from "@/components/wrapper";


const SignupScreen = () => {
  const router = useRouter();

  return (
    <>
      <SignupComponent verificationPath={() => router.push("/signup")} LogIN={() => router.push("/signup")}  />
    </>
  );
};

export default SignupScreen;

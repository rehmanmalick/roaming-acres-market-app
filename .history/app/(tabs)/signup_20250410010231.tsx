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
import SignupComponent from "@/components/signup-component";

const SignupScreen = () => {
  const router = useRouter();
  return (
    <>
      <SignupComponent
        onlogInPress={/login")}
        onSignInPress={() => router.push("/login")}
      />
    </>
  );
};

export default SignupScreen;

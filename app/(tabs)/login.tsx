import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/ui/custom-input";
import Wrapper from "@/components/wrapper";
import LoginComponent from "../../components/login-component";

const LoginScreen = () => {
  return (
    <>
      <LoginComponent
        ResetpasswordPath={"/resetpassword"}
        buttonPath={{
          pathname: "/home-screen",
          params: { showLocationModal: "true" },
        }}
        SigninPath={"/(tabs)/signup"}
      />
    </>
  );
};

export default LoginScreen;

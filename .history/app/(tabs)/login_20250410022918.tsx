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
import CustomTextInput from "../../components/custom-input";
import Wrapper from "@/components/wrapper";
import LoginScreen from '../../components/login-component';


  return (
    <>
    <LoginScreen ResetpasswordPath={"/reset"}/>
    </>

  );
};

export default LoginScreen;

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



const ResetScreen = () => {
  
  return (
   <>
   <ResetComponent></ResetComponent>
   </>
  );
};

export default EmailVerificationScreen;

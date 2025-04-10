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



const VerificationCodeScreen = () => {


  return <OtpComponent verifyPath={"./verification-success"} />;
};

export default VerificationCodeScreen;

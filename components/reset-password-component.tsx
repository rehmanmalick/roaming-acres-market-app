import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useForm } from "react-hook-form";
import CustomTextInput from "./ui/custom-input";
import Wrapper from "@/components/common/wrapper";
import Button from "./button";

interface ResetComponentProps {
  verificationPath?: any;
}

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  email: string;
};

const ResetComponent: React.FC<ResetComponentProps> = ({
  verificationPath = "",
}) => {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = (data: FormData) => {
    if (!isEmailValid(data.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    router.push({
      pathname: verificationPath,
      params: { email: data.email },
    });
  };

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 mt-20">
            <Text className="text-4xl font-medium text-start text-gray-800 mb-2">
              Reset Password
            </Text>

            <Text className="text-[#9796A1] text-start mb-8">
              Please enter your email address to request a password reset
            </Text>

            {/* Email Input */}
            <CustomTextInput<FormData>
              control={control}
              name="email"
              label="Email"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              textContentType="emailAddress"
              autoCorrect={false}
              rules={{
                required: "Email is required",
                validate: (value) =>
                  isEmailValid(value) || "Enter valid email address",
              }}
            />
            {/* Login Button */}
            <Button
              state="primary"
              title="Send Code"
              onPress={handleSubmit(handleSendCode)}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default ResetComponent;

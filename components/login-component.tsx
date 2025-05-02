import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter, Href } from "expo-router";
import { useForm } from "react-hook-form";
import CustomTextInput from "./ui/custom-input";
import Wrapper from "@/components/common/wrapper";
import Button from "./button";

interface LoginComponentProps {
  buttonPath: Href;
  SigninPath: Href;
  ResetpasswordPath: Href;
}

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  email: string;
  password: string;
};

const LoginComponent: React.FC<LoginComponentProps> = ({
  buttonPath,
  SigninPath,
  ResetpasswordPath,
}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleLogin = (data: FormData) => {
    console.log("Form Data Submitted:", data); // Logs the form data
    router.push(buttonPath);
  };

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 mt-20">
            <Text className="text-4xl font-medium text-start text-gray-800 mb-8">
              Login
            </Text>

            {/* Email Input */}
            <CustomTextInput
              control={control}
              name="email"
              label="Email"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              rules={{
                required: "Email is required",
                validate: (value) =>
                  isEmailValid(value) || "Enter valid email address",
              }}
            />

            {/* Password Input */}
            <CustomTextInput
              control={control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              iconRight={showPassword ? "eye" : "eye-off"}
              onIconRightPress={() => setShowPassword((prev) => !prev)}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters",
                },
              }}
            />

            {/* Forgot Password Link */}
            <TouchableWithoutFeedback
              onPress={() => router.push(ResetpasswordPath as Href)}
            >
              <Text className="text-[#008080] text-sm self-end mb-6">
                Forgot Password?
              </Text>
            </TouchableWithoutFeedback>

            {/* Login Button */}
            <Button
              state="primary"
              title="LOGIN"
              onPress={handleSubmit(handleLogin)}
            />

            {/* Sign Up Navigation */}
            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                Don't have an account?{" "}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => router.push(SigninPath as Href)}
              >
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Sign Up
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default LoginComponent;

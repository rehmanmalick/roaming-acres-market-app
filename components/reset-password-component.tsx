import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";

import Wrapper from "@/components/common/wrapper";
import PasswordStrengthMeter from "@/components/ui/password-strength-meter";
import CustomTextInput from "./ui/custom-input"; // Updated input with Controller inside

/** ---------------- Types ---------------- */
interface SignupScreenProps {
  verificationPath: string;
  loginPath: string;
}

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

/** ---------------- Validation Helpers ---------------- */
const isEmailValid = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isPasswordValid = (password: string) => password.length >= 6;

const validateField = (name: keyof FormData, value: string): string => {
  switch (name) {
    case "fullName":
      return value.trim() ? "" : "Full name is required";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!isEmailValid(value)) return "Invalid email format";
      return "";
    case "password":
      if (!value) return "Password is required";
      if (!isPasswordValid(value))
        return "Password must be at least 6 characters";
      return "";
    default:
      return "";
  }
};

/** ---------------- Component ---------------- */
const SignupScreen: React.FC<SignupScreenProps> = ({
  verificationPath,
  loginPath,
}) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (data: FormData) => {
    router.push({
      pathname: verificationPath,
      params: { email: data.email },
    });
  };

  const handleNavigateToLogin = () => {
    router.push(loginPath);
  };

  const passwordValue = watch("password");

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 mt-20">
            <Text className="text-4xl font-medium text-start text-gray-800 mb-8">
              Sign Up
            </Text>

            {/* Full Name Input */}
            <CustomTextInput
              control={control}
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              errorMessage={errors.fullName?.message}
            />

            {/* Email Input */}
            <CustomTextInput
              control={control}
              name="email"
              label="E-mail"
              placeholder="Email Address"
              errorMessage={errors.email?.message}
            />

            {/* Password Input */}
            <CustomTextInput
              control={control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              onIconRightPress={() => setShowPassword(!showPassword)}
              iconRight={showPassword ? "eye" : "eye-off"}
              errorMessage={errors.password?.message}
            />

            {/* Password Strength Meter */}
            <PasswordStrengthMeter password={passwordValue} />

            {/* Sign Up Button */}
            <TouchableOpacity
              className="py-4 rounded-md bg-[#008080] flex items-center justify-center mt-2"
              onPress={handleSubmit(handleSignup)}
            >
              <Text className="text-white text-center text-lg uppercase font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* Login Navigation */}
            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={handleNavigateToLogin}>
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default SignupScreen;

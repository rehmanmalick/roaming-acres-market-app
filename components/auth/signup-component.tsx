import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter, Href } from "expo-router";
import { useForm } from "react-hook-form";

import Wrapper from "@/components/common/wrapper";
import PasswordStrengthMeter from "@/components/ui/password-strength-meter";
import CustomTextInput from "../ui/custom-input";
import Button from "../ui/button";

/** ---------------- Types ---------------- */
interface SignupScreenProps {
  verificationPath: Href; // Use Href for paths
  loginPath: Href; // Use Href for paths
}

const SignupScreen: React.FC<SignupScreenProps> = ({
  verificationPath,
  loginPath,
}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const passwordValue = watch("password");

  const handleSignup = (data: any) => {
    console.log("Form Submitted:", data);
    router.push(verificationPath); // No need to cast here
  };

  const handleNavigateToLogin = () => {
    router.push(loginPath); // No need to cast here
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      <Wrapper showBackButton={true}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 mt-5">
              <Text className="text-4xl font-medium text-start text-gray-800 mb-8">
                Sign Up
              </Text>

              {/* Full Name Input */}
              <CustomTextInput
                control={control}
                name="fullName"
                label="Full Name"
                placeholder="Full Name"
                rules={{
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                }}
              />

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
                  validate: (value: string) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Enter a valid email",
                }}
              />

              {/* Password Input */}
              <CustomTextInput
                control={control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                onIconRightPress={() => setShowPassword((prev) => !prev)}
                iconRight={showPassword ? "eye" : "eye-off"}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters",
                  },
                }}
              />

              {/* Password Strength Meter */}
              <PasswordStrengthMeter password={passwordValue} />

              {/* Sign Up Button */}
              <Button
                state="primary"
                title="SIGN UP"
                onPress={handleSubmit(handleSignup)}
                disabled={!isValid} // Button disabled if the form is invalid
              />

              {/* Login Navigation */}
              <View className="flex-row justify-center mt-6">
                <Text className="text-[#111719] font-medium">
                  Already have an account?
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
    </ScrollView>
  );
};

export default SignupScreen;

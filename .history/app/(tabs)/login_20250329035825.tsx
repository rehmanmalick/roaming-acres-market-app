import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custominput";
import Wrapper from "@/components/wrapper";

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Validation functions
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password: string) => password.length >= 6;
  const isFormValid = () =>
    isEmailValid(formData.email) && isPasswordValid(formData.password);

  const handleLogin = async () => {
    if (!isFormValid()) {
      Alert.alert("Validation Error", "Please enter valid email and password");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/");
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 w-full bg-white px-6 justify-center">
        {/* Title */}
        <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-8">
          Login
        </Text>
         
        <View>
          <Text className="text-[#9796A1] font-semibold text-start px-2 text-[#9796A1] mb-2">
            Full Name
          </Text> 
        {/* Email Input */}
        <CustomTextInput
          ref={emailRef}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          validationIcon={
            formData.email
              ? isEmailValid(formData.email)
                ? "checkmark-circle"
                : "close-circle"
              : undefined
          }
          validationIconColor={
            isEmailValid(formData.email) ? "#4CAF50" : "#F44336"
          }
          showValidationIcon={!!formData.email}
        />
        
        {/* Password Input */}
        <CustomTextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
          iconRight={showPassword ? "eye-off" : "eye"}
          onIconRightPress={() => setShowPassword(!showPassword)}
          validationIcon={
            formData.password
              ? isPasswordValid(formData.password)
                ? "checkmark-circle"
                : "close-circle"
              : undefined
          }
          validationIconColor={
            isPasswordValid(formData.password) ? "#4CAF50" : "#F44336"
          }
          showValidationIcon={!!formData.password}
        />

        {/* Forgot Password Link */}
        <TouchableOpacity
          className="self-end mb-6"
          onPress={() => router.push("/resetpassword")}
        >
          <Text className="text-blue-600 text-sm">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          className={`w-full py-4 rounded-lg ${
            isFormValid() ? "bg-blue-600" : "bg-blue-400"
          } flex items-center justify-center`}
          onPress={handleLogin}
          disabled={!isFormValid() || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold">Login</Text>
          )}
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;

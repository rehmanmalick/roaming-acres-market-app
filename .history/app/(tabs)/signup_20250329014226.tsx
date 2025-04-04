import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "../../components/ui/CustomTextInput";
import { TextInput } from "react-native";

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

const SignupScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Refs for inputs
  const fullNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Validation functions
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password: string) => password.length >= 6;
  const isFormValid = () =>
    formData.fullName &&
    isEmailValid(formData.email) &&
    isPasswordValid(formData.password);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert("Validation Error", "Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Success", "Account created successfully!");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Title */}
      <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create Account
      </Text>

      {/* Full Name Input */}
      <CustomTextInput
        ref={fullNameRef}
        placeholder="Full Name"
        value={formData.fullName}
        onChangeText={(text) => handleChange("fullName", text)}
        autoCapitalize="words"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
      />

      {/* Email Input */}
      <CustomTextInput
        ref={emailRef}
        placeholder="Email Address"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
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
          formData.email
            ? isEmailValid(formData.email)
              ? "#4CAF50"
              : "#F44336"
            : "#666"
        }
      />

      {/* Password Input */}
      <CustomTextInput
        ref={passwordRef}
        placeholder="Password (min 6 characters)"
        secureTextEntry={!showPassword}
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        returnKeyType="done"
        onSubmitEditing={handleSignup}
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
          formData.password
            ? isPasswordValid(formData.password)
              ? "#4CAF50"
              : "#F44336"
            : "#666"
        }
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        className={`w-full py-4 rounded-lg ${
          isFormValid() ? "bg-blue-600" : "bg-blue-400"
        } flex items-center justify-center`}
        onPress={handleSignup}
        disabled={!isFormValid() || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold">Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Login Link */}
      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-blue-600 font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SignupScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  // Refs for inputs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Validation functions
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordValid = () => formData.password.length >= 6;
  const isFormValid = () =>
    formData.fullName && isEmailValid() && isPasswordValid();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
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

  // Helper function to determine border color
  const getBorderColor = (inputName) => {
    return focusedInput === inputName ? "border-blue-500" : "border-gray-300";
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Title */}
      <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create Account
      </Text>

      {/* Full Name Input */}
      <View className="mb-4">
        <TextInput
          ref={fullNameRef}
          className={`w-full h-14 border rounded-lg px-4 text-base ${getBorderColor(
            "fullName"
          )}`}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleChange("fullName", text)}
          autoCapitalize="words"
          onFocus={() => handleFocus("fullName")}
          onBlur={handleBlur}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
      </View>

      {/* Email Input */}
      <View className="mb-4 relative">
        <TextInput
          ref={emailRef}
          className={`w-full h-14 border rounded-lg px-4 text-base pr-12 ${getBorderColor(
            "email"
          )}`}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        {formData.email && (
          <View className="absolute right-3 top-4">
            <Ionicons
              name={isEmailValid() ? "checkmark-circle" : "close-circle"}
              size={20}
              color={isEmailValid() ? "#4CAF50" : "#F44336"}
            />
          </View>
        )}
      </View>

      {/* Password Input */}
      <View className="mb-6 relative">
        <TextInput
          ref={passwordRef}
          className={`w-full h-14 border rounded-lg px-4 text-base pr-16 ${getBorderColor(
            "password"
          )}`}
          placeholder="Password (min 6 characters)"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          returnKeyType="done"
          onSubmitEditing={handleSignup}
        />
        <TouchableOpacity
          className="absolute right-3 top-4"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
        {formData.password && (
          <View className="absolute right-10 top-4">
            <Ionicons
              name={isPasswordValid() ? "checkmark-circle" : "close-circle"}
              size={20}
              color={isPasswordValid() ? "#4CAF50" : "#F44336"}
            />
          </View>
        )}
      </View>

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

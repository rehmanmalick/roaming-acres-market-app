import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

const SignupScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Email & password validation
  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 6;

  const handleSignup = () => {
    if (!isEmailValid) {
      Alert.alert("Invalid Email", "Please enter a valid email with '@'.");
      return;
    }
    if (!isPasswordValid) {
      Alert.alert("Weak Password", "Password must be at least 6 characters.");
      return;
    }
    Alert.alert("Success", "Signup successful!");
    router.push("/home"); // Redirect to home page after signup
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-3xl font-bold text-center text-gray-900 mb-6">
        Sign Up
      </Text>

      {/* Full Name Input */}
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-4"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email Input */}
      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-4"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input with Eye Button */}
      <View className="relative w-full">
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base pr-12"
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        {/* Eye Icon (Fixed) */}
        <TouchableOpacity
          className="absolute right-4 top-3"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Signup Button */}
      <TouchableOpacity
        className={`w-full py-3 rounded-lg mt-4 ${
          isEmailValid && isPasswordValid ? "bg-teal-600" : "bg-gray-400"
        }`}
        disabled={!isEmailValid || !isPasswordValid}
        onPress={handleSignup}
      >
        <Text className="text-white text-lg font-semibold text-center">
          SIGN UP
        </Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <Text
          className="text-teal-600 font-bold"
          onPress={() => router.push("/signup")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignupScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

const SignupScreen = () => {
    const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if email contains @
  const isEmailValid = email.includes("@");

  // Check if password is at least 6 characters
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
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-3xl font-bold text-center text-gray-900 mb-6">Sign Up</Text>

      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-4"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-4"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full h-12 border border-gray-300 rounded-lg px-4 text-base mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className={`w-full py-3 rounded-lg mt-4 ${
          isEmailValid && isPasswordValid ? "bg-teal-600" : "bg-gray-400"
        }`}
        disabled={!isEmailValid || !isPasswordValid}
        onPress={handleSignup}
      >
        <Text className="text-white text-lg font-semibold text-center">SIGN UP</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-600 mt-4">
        Already have an Account?{" "}
        <Text className="text-teal-600 font-bold" onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignupScreen;

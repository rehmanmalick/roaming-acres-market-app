import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const SignupScreen = () => {
    const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <TouchableOpacity className="bg-teal-600 w-full py-3 rounded-lg mt-4">
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

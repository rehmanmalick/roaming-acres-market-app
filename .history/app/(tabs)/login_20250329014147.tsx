import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "./CustomTextInput";
import { TextInput } from "react-native";

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

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/home");
    }, 1000);
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome Back
      </Text>

      <CustomTextInput
        ref={emailRef}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />

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
      />

      <TouchableOpacity
        className="w-full py-4 bg-blue-600 rounded-lg mt-4"
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">
            Login
          </Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-blue-600 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
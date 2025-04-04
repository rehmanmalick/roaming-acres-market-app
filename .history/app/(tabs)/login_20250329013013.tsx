import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../components/CustomTextInput";
import useAuthForm from "../hooks/useAuthForm";

const LoginScreen = () => {
  const router = useRouter();
  const {
    formData,
    showPassword,
    setShowPassword,
    isLoading,
    inputRefs,
    isFormValid,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    getBorderColor,
  } = useAuthForm({ email: "", password: "" }, "/dashboard");

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-8">
        Login
      </Text>

      <CustomTextInput
        inputRef={inputRefs.email}
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => handleFocus("email")}
        onBlur={handleBlur}
        returnKeyType="next"
        onSubmitEditing={() => inputRefs.password.current.focus()}
        isValid={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
        inputName="email"
        getBorderColor={getBorderColor}
      />

      <CustomTextInput
        inputRef={inputRefs.password}
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        placeholder="Password"
        secureTextEntry={!showPassword}
        onFocus={() => handleFocus("password")}
        onBlur={handleBlur}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        showPasswordToggle={true}
        showPassword={showPassword}
        togglePassword={() => setShowPassword(!showPassword)}
        isValid={formData.password.length >= 6}
        inputName="password"
        getBorderColor={getBorderColor}
      />

      <TouchableOpacity
        className={`w-full py-4 rounded-lg ${
          isFormValid() ? "bg-blue-600" : "bg-blue-400"
        } flex items-center justify-center`}
        onPress={handleSubmit}
        disabled={!isFormValid() || isLoading}
      >
        {isLoading ? <ActivityIndicator color="#fff" /> : <Text className="text-white text-lg font-semibold">Login</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

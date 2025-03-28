import { useState, useRef } from "react";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

const useAuthForm = (initialState, successRoute) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const inputRefs = {
    fullName: useRef(),
    email: useRef(),
    password: useRef(),
  };

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordValid = () => formData.password.length >= 6;
  const isFormValid = () =>
    (!formData.fullName || formData.fullName.trim() !== "") &&
    isEmailValid() &&
    isPasswordValid();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      Alert.alert("Validation Error", "Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Success", "Action completed successfully!");
      router.push(successRoute);
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getBorderColor = (inputName) => {
    return focusedInput === inputName ? "border-blue-500" : "border-gray-300";
  };

  return {
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
  };
};

export default useAuthForm;

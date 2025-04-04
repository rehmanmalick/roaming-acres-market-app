import { useState, useRef } from "react";
import { Alert, TextInput } from "react-native";
import { useRouter } from "expo-router";

interface AuthFormState {
  fullName?: string;
  email: string;
  password: string;
}

const useAuthForm = (initialState: AuthFormState, successRoute: string) => {
  const router = useRouter();
  const [formData, setFormData] = useState<AuthFormState>(initialState);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputRefs = {
    fullName: useRef<TextInput>(null),
    email: useRef<TextInput>(null),
    password: useRef<TextInput>(null),
  };

  const isEmailValid = (): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isPasswordValid = (): boolean => formData.password.length >= 6;

  const isFormValid = (): boolean =>
    (!formData.fullName || formData.fullName.trim() !== "") &&
    isEmailValid() &&
    isPasswordValid();

  const handleChange = (name: keyof AuthFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (inputName: string) => {
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

  const getBorderColor = (inputName: string) => {
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

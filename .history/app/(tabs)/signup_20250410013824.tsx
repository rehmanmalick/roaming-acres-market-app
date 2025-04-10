import React, { useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custom-input";
import Wrapper from "@/components/wrapper";

// Constants moved to a separate config file would be better
const COLORS = {
  primary: "#008080",
  weak: "#FF4444",
  medium: "#FFBB33",
  strong: "#00C851",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const SignupScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);

  const fullNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Password strength calculation
  const passwordStrength = useMemo(() => {
    if (!formData.password) return 0;

    let strength = 0;
    // Length checks
    if (formData.password.length >= 6) strength += 1;
    if (formData.password.length >= 8) strength += 1;
    // Complexity checks
    if (/[A-Z]/.test(formData.password)) strength += 1;
    if (/[0-9]/.test(formData.password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;

    return Math.min(strength, 5); // Cap at 5 for the strength meter
  }, [formData.password]);

  // Get strength color and label
  const { strengthColor, strengthLabel } = useMemo(() => {
    if (passwordStrength <= 2)
      return { strengthColor: COLORS.weak, strengthLabel: "Weak" };
    if (passwordStrength <= 4)
      return { strengthColor: COLORS.medium, strengthLabel: "Medium" };
    return { strengthColor: COLORS.strong, strengthLabel: "Strong" };
  }, [passwordStrength]);

  // Validation functions
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password: string) => password.length >= 6;

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "fullName":
        return value.trim() ? "" : "Full name is required";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!isEmailValid(value)) return "Invalid email format";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (!isPasswordValid(value))
          return "Password must be at least 6 characters";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSignup = () => {
    setShowAllErrors(true);

    if (validateForm()) {
      router.push({
        pathname: "/verificationcode",
        params: { email: formData.email },
      });
    }
  };

  return (
    <>
    
    </>
  );
};

export default SignupScreen;

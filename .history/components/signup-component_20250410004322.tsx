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

import Wrapper from "@/components/wrapper";
import CustomTextInput from "./custom-input";

interface SignupComponent {
  
  onLogInPress?: () => void;
  onSignInPress?: () => void;
}

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

const SignupComponent = ({
  
  onLoginInPress = () => {},
  onSignInPress = () => {},
}: SignupComponent) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSignup = async () => {
    setShowAllErrors(true);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Replace this with actual API call
      // Example:
      // const response = await fetch('your-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Signup failed');

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Mock API call
      router.push({
        pathname: "/verificationcode",
        params: { email: formData.email },
      });
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 w-full bg-white px-6 justify-start mt-8">
            <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-8">
              Sign Up
            </Text>

            <CustomTextInput
              label="Full Name"
              ref={fullNameRef}
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={(text) => handleChange("fullName", text)}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current?.focus()}
              errorMessage={showAllErrors ? errors.fullName : undefined}
            />

            <CustomTextInput
              label="E-mail"
              ref={emailRef}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
              validationIcon={
                showAllErrors && errors.email && formData.email
                  ? isEmailValid(formData.email)
                    ? "checkmark-circle"
                    : "close-circle"
                  : undefined
              }
              validationIconColor={
                isEmailValid(formData.email) ? COLORS.primary : "#E26D08"
              }
              showValidationIcon={
                showAllErrors && !!errors.email && !!formData.email
              }
              errorMessage={showAllErrors ? errors.email : undefined}
            />

            <CustomTextInput
              label="Password"
              ref={passwordRef}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
              returnKeyType="done"
              onSubmitEditing={handleSignup}
              iconRight={showPassword ? "eye" : "eye-off"}
              onIconRightPress={() => setShowPassword(!showPassword)}
              validationIcon={
                showAllErrors && errors.password && formData.password
                  ? isPasswordValid(formData.password)
                    ? "checkmark-circle"
                    : "close-circle"
                  : undefined
              }
              validationIconColor={
                isPasswordValid(formData.password) ? COLORS.primary : "#E26D08"
              }
              showValidationIcon={
                showAllErrors && !!errors.password && !!formData.password
              }
              errorMessage={showAllErrors ? errors.password : undefined}
            />

            {formData.password && (
              <View className="mt-2 mb-4">
                <View className="flex-row justify-between mb-1">
                  <Text className="text-xs text-gray-500">
                    Password Strength:
                  </Text>
                  <Text
                    className="text-xs font-medium"
                    style={{ color: strengthColor }}
                  >
                    {strengthLabel}
                  </Text>
                </View>
                <View className="flex-row h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <View
                      key={`strength-${index}`} // Stable key using prefix
                      className="flex-1 h-full"
                      style={{
                        backgroundColor:
                          index < passwordStrength
                            ? strengthColor
                            : COLORS.gray,
                        marginRight: index < 4 ? 2 : 0,
                      }}
                    />
                  ))}
                </View>
              </View>
            )}

            <TouchableOpacity
              className={`w-full py-4 rounded-[3px] bg-[#008080] flex items-center justify-center mt-2`}
              onPress={handleSignup}
              disabled={isLoading}
              accessibilityLabel="Sign up"
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                  Sign Up
                </Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <Text className="text-[#111719] font-medium">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/login")}
                accessibilityLabel="Go to login"
                accessibilityRole="link"
              >
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default SignupComponent;

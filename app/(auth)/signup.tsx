import React from "react";
import { Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import SignupComponent from "@/components/signup-component";

const SignupScreen = () => {
  const { role } = useLocalSearchParams<{ role?: string }>();
  const router = useRouter();

  // const navigateToAuth = (authType: "login" | "signup") => {
  //   router.push(`/(auth)/${authType}?role=${role}`);
  // };

  return (
    <SignupComponent
      verificationPath="/(auth)/otpVerification"
      loginPath={`/(auth)/login?role=${role}`}
    />
  );
};

export default SignupScreen;

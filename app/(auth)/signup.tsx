import React from "react";
import SignupComponent from "@/components/auth/signup-component";
import { useUserStore } from "@/store/useUserStore";
import { Href } from "expo-router";

const SignupScreen = () => {
  const userType = useUserStore((state) => state.userType);

  // Cast to Href or use explicit union types
  const verificationPath =
    userType === "Seller"
      ? "/(auth)/register-your-business"
      : "/(auth)/verify-otp";

  return (
    <SignupComponent
      verificationPath={verificationPath}
      loginPath="/(auth)/login"
    />
  );
};

export default SignupScreen;

import React from "react";
import SignupComponent from "@/components/signup-component";
import { useUserStore } from "@/store/useUserStore";
import { Href } from "expo-router";

const SignupScreen = () => {
  const userType = useUserStore((state) => state.userType);

  // Cast to Href or use explicit union types
  const verificationPath =
    userType === "seller"
      ? "/(auth)/register-your-business"
      : "/(auth)/verification-code";

  return (
    <SignupComponent
      verificationPath={verificationPath}
      loginPath="/(auth)/login"
    />
  );
};

export default SignupScreen;

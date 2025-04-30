import React from "react";
import SignupComponent from "@/components/signup-component";
import { useUserStore } from "@/store/useUserStore";

const SignupScreen = () => {
  const userType = useUserStore((state) => state.userType);
  const homePath =
    userType === "seller"
      ? "/(auth)/register-your-business"
      : "/(auth)/verification-code";
  return (
    <SignupComponent verificationPath={homePath} loginPath="/(auth)/login" />
  );
};

export default SignupScreen;

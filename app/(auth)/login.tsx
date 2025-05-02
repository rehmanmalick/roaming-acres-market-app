import LoginComponent from "@/components/login-component";
import { useUserStore } from "@/store/useUserStore";
import { Href } from "expo-router";

const LoginScreen = () => {
  const userType = useUserStore((state) => state.userType);

  // Type-safe path handling
  const homePath = (
    userType === "seller" ? "/(seller)/home" : "/(buyer)/home"
  ) as Href;

  return (
    <LoginComponent
      ResetpasswordPath={"/(auth)/reset-password" as Href}
      buttonPath={homePath}
      SigninPath={"/(auth)/signup" as Href}
    />
  );
};

export default LoginScreen;

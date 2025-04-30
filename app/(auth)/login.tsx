import LoginComponent from "@/components/login-component";
import { useUserStore } from "@/store/useUserStore";

const LoginScreen = () => {
  const userType = useUserStore((state) => state.userType);

  // Paths
  const homePath = userType === "seller" ? "/(seller)/home" : "/(buyer)/home";

  return (
    <LoginComponent
      ResetpasswordPath="/(auth)/reset-password"
      buttonPath={homePath}
      SigninPath="/(auth)/signup"
    />
  );
};

export default LoginScreen;

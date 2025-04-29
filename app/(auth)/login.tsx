import { Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import LoginComponent from "@/components/login-component";

const LoginScreen = () => {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role?: string }>();

  if (!role) {
    return (
      <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Role is missing. Please go back and select your account.
      </Text>
    );
  }

  // Paths
  const homePath = role === "seller" ? "/(seller)/home" : "/(buyer)/home";
  const signupPath = `/(auth)/signup?role=${role}`; // 👈 signup path must be ready

  return (
    <LoginComponent
      ResetpasswordPath="/(auth)/reset-password?role=${role}"
      buttonPath={homePath}
      SigninPath={signupPath} // 👈 Now directly pass the string path!
    />
  );
};

export default LoginScreen;

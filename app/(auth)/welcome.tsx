import { Text } from "react-native";
import { useRouter } from "expo-router";
import WelcomeComponent from "@/components/welcome-component";
import { useUserStore } from "@/store/useUserStore";

export default function Welcome() {
  const router = useRouter();
  const userType = useUserStore((state) => state.userType);

  const handleSkip = () => {
    if (userType === "Seller") {
      router.push(`/(seller)/(home)/home`);
    } else {
      router.push(`/(buyer)/home`);
    }
  };

  return (
    <WelcomeComponent
      onSkip={handleSkip}
      onEmailPress={() => router.push("/(auth)/signup")}
      onSignInPress={() => router.push("/(auth)/login")}
    />
  );
}

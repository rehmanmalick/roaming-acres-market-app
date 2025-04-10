import WelcomeComponent from "./../../../components/welcome-component";
import { useRouter } from "expo-router";

export default function welcome() {
  const router = useRouter();
  return (
    <>
      <WelcomeComponent
        onSkip={() => router.push("/home-screen")}
        onEmailPress={() => router.push('SELL')}
        onSignInPress={() => router.push("")}
      />
    </>
  );
}

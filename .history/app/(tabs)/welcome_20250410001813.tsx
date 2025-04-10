import WelcomeComponent from "./../../components/welcome-component";
import { useRouter } from "expo-router";

export default function welcome() {
  const router = useRouter();
  return (
    
    <>
      <WelcomeComponent
        onSkip={() => router.push()}
        onEmailPress={() => router.push(emailRoute)}
        onSignInPress={() => router.push(emailRoute)}
      />
    </>
  );
}

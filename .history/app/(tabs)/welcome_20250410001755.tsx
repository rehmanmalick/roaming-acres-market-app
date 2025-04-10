import WelcomeComponent from "./../../components/welcome-component";

export default function welcome() {
  return (
    const router = useRouter();
    <>
      <WelcomeComponent
        onSkip={() => router.push(emailRoute)}
        onEmailPress={() => router.push(emailRoute)}
        onSignInPress={() => router.push(emailRoute)}
      />
    </>
  );
}

import WelcomeComponent from "./../../components/welcome-component";

export default function welcome() {
  return (
    <>
      <WelcomeComponent
        onSkip={() => router.push(emailRoute)}
        onEmailPress={() => router.push(emailRoute)}
        onSignInPress={() => navigation.navigate("SignIn")}
      />
    </>
  );
}

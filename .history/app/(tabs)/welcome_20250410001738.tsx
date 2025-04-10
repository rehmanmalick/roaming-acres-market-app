import WelcomeComponent from "./../../components/welcome-component";

export default function welcome() {
  return (
    <>
      <WelcomeComponent
        onSkip={() => router.push(emailRoute)}
        onEmailPress={() => navigation.navigate("EmailSignUp")}
        onSignInPress={() => navigation.navigate("SignIn")}
      />
    </>
  );
}

import WelcomeComponent from "./../../components/welcome-component";

export default function welcome() {
  return (
    <>
      <WelcomeComponent
        onSkip={() => navigation.navigate("Home")}
        onEmailPress={() => navigation.navigate("EmailSignUp")}
        onSignInPress={() => navigation.navigate("SignIn")}
      />
    </>
  );
}

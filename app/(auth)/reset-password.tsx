import ResetComponent from "@/components/auth/reset-password-component";

const ResetScreen = () => {
  return <ResetComponent verificationPath="/(auth)/verification-code" />;
};

export default ResetScreen;

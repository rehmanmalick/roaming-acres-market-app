import OtpComponent from "@/components/auth/otp-component";
import { useLocalSearchParams } from "expo-router";

const VerificationCodeScreen = () => {
  const { email } = useLocalSearchParams<{ email?: string }>();

  return <OtpComponent verifyPath={"/(auth)/verify-code"} email={email} />;
};

export default VerificationCodeScreen;

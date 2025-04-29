import OtpComponent from "@/components/otp-component";
import { useLocalSearchParams } from "expo-router";

const VerificationCodeScreen = () => {
  const { role, email } = useLocalSearchParams<{
    role?: string;
    email?: string;
  }>();

  return (
    <OtpComponent
      verifyPath={`/(auth)/verify-code`}
      email={email}
      role={role}
    />
  );
};

export default VerificationCodeScreen;

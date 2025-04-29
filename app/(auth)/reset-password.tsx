import { useLocalSearchParams } from "expo-router";
import ResetComponent from "../../components/reset-password-component";

const ResetScreen = () => {
  const { role } = useLocalSearchParams<{ role?: string }>();

  return (
    <>
      <ResetComponent
        verificationPath="/(auth)/verification-code" // ✅ only path — no parameters here
        role={role} // ✅ pass role separately
      />
    </>
  );
};

export default ResetScreen;

import ResetComponent from "../../../components/reset-password-component";

const ResetScreen = () => {
  return (
    <>
      <ResetComponent verificationPath={"/verification-code"} />
    </>
  );
};

export default ResetScreen;

import React, { useEffect } from "react";
import CongratulationComponent from "@/components/congratulation-component";
import { useUserStore } from "@/store/useUserStore";

const VerificationSuccessScreen = () => {
  const userType = useUserStore((state) => state.userType);

  // Set the home path based on the userType
  const homePath =
    userType === "Seller" ? "/(seller)/(home)/home" : "/(buyer)/home";

  return <CongratulationComponent continuePath={homePath} />;
};

export default VerificationSuccessScreen;

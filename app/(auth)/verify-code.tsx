import React, { useEffect } from "react";
import CongratulationComponent from "@/components/congratulation-component";
import { useLocalSearchParams } from "expo-router";

const VerificationSuccessScreen = () => {
  // Extract role parameter from the query string, setting default value if undefined
  const { role } = useLocalSearchParams<{ role?: string }>() || { role: "" };

  useEffect(() => {
    console.log("VerificationSuccessScreen Params:", { role });
  }, [role]);

  // Set the home path based on the role
  const homePath =
    role === "seller" ? "/(seller)/(home)/home" : "/(buyer)/home";

  return <CongratulationComponent continuePath={homePath} role={role} />;
};

export default VerificationSuccessScreen;

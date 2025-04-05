import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Wrapper from "@/components/wrapper";
import Button from "@/components/button";

const COLORS = {
  primary: "#008080",
  white: "#FFFFFF",
} as const;

const VerificationSuccessScreen = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/home-screen"); // Replace with your desired route
  };

  return (
    <Wrapper>
      <View className="flex-1 w-full bg-white px-6 justify-center items-center">
        <View>
          {/* Success Image */}
          <Image
            source={require("../../assets/images/congratulation.png")} // Replace with your image path
            className="w-[200px] h-[200px] mb-8"
            resizeMode="contain"
          />

          {/* Congratulations Heading */}
          <Text className="text-[32px] font-bold text-center text-gray-800 mb-4">
            Congratulations!
          </Text>

          {/* Success Message */}
          <Text className="text-[16px] text-center text-[#9796A1] mb-8 px-4">
            Your account has been successfully verify, enjoy our service!
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          className={`w-full py-4 rounded-[3px] bg-[${COLORS.primary}] flex items-center justify-center mt-18`}
          onPress={handleContinue}
          accessibilityLabel="Continue to app"
          accessibilityRole="button"
        >
          <Text className="text-white text-lg uppercase font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

export default VerificationSuccessScreen;

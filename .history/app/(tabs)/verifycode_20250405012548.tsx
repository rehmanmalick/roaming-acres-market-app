import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Wrapper from "@/components/wrapper";

const COLORS = {
  primary: "#008080",
  white: "#FFFFFF",
} as const;

const VerificationSuccessScreen = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/home-screen");
  };

  return (
    <Wrapper>
      <View className="flex-1 bg-white px-6">
        {/* Main content container - takes all available space */}
        <View className="flex-1 justify-center items-center">
          {/* Success Image */}
          <Image
            source={require("../../assets/images/congratulation.png")}
            className="w-[200px] h-[200px] mb-8"
            resizeMode="contain"
          />

          {/* Congratulations Heading */}
          <Text className="text-[32px] font-bold text-center text-gray-800 mb-4">
            Congratulations!
          </Text>

          {/* Success Message */}
          <Text className="text-[16px] text-center text-[#9796A1] mb-8 px-4">
            Your account has been successfully verified, enjoy our service!
          </Text>
        </View>

        {/* Button container - slightly above bottom */}
        <View className="w-full mb-8">
          <TouchableOpacity
            className={`w-full py-4 rounded-[3px] bg-[${COLORS.primary}] items-center justify-center`}
            onPress={handleContinue}
            accessibilityLabel="Continue to app"
            accessibilityRole="button"
          >
            <Text className="text-white text-lg uppercase font-semibold">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default VerificationSuccessScreen;

import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useUserStore } from "@/store/useUserStore";

interface ProfileHeaderProps {
  route?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ route }) => {
  const userType = useUserStore((state) => state.userType);
  console.log("Current user type is:", userType);

  if (userType === "Seller") {
    // show seller-specific form
  } else if (userType === "Buyer") {
    // show buyer-specific form
  }
  const router = useRouter();

  return (
    <View className="relative flex-row items-center  justify-center ">
      <View className="flex-row absolute  justify-center   ">
        <TouchableOpacity
          onPress={() =>
            router.push((route || "/(buyer)/(home)/buyer-account") as any)
          }
          className=" rounded-full  border-white"
        >
          <Image
            source={require("../assets/images/profile.png")}
            className="w-20 h-20 border-4 rounded-full  border-white"
          />
        </TouchableOpacity>
        <View className="flex-col justify-center ml-2.5">
          <Text className="text-xl font-bold">Try Temp</Text>
          <Text className="text-md text-[#9796A1]">{userType} Account</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

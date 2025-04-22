import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface ProfileHeaderProps {
  route?: string;
  account?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  route,
  account = "Buyer",
}) => {
  const router = useRouter();

  return (
    <View className="relative flex items-center ml-4  justify-center mb-12">
      <View className="flex-row justify-center absolute top-0 ">
        <TouchableOpacity
          onPress={() => router.push((route || "/(tabs)/buyer-account") as any)}
        >
          <Image
            source={require("../assets/images/profile.png")}
            className="w-20 h-20 rounded-full border-[7px] border-white"
          />
        </TouchableOpacity>
        <View className="flex-col justify-center ml-2.5">
          <Text className="text-xl font-bold">Try Temp</Text>
          <Text className="text-md text-[#9796A1]">{account} Account</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

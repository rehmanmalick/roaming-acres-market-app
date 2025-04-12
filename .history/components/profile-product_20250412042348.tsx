import React from "react";
import { View, Text, Image } from "react-native";

interface PostProps {
  profileImage: any; // require or uri
  name: string;
  time: string;
  caption: string;
  postImage: any; // require or uri
}

const ProfileProduct = ({
  profileImage,
  name,
  time,
  caption,
  postImage,
}: PostProps) => {
  return (
    <View className="bg-white p-4 rounded-xl mb-4">
         {/* Post Image */}
      <View className="rounded-xl overflow-hidden">
        <Image source={postImage} className="w-full h-64" resizeMode="cover" />
      </View>
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Image
          source={profileImage}
          className="w-10 h-10 rounded-full mr-3"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-base font-semibold">{name}</Text>
          <Text className="text-xs text-gray-500">{time}</Text>
        </View>
      </View>

      
     
    </View>
  );
};

export default ProfileProduct;

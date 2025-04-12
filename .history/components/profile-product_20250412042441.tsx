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
      {/* Caption */}
      <Text className="text-sm text-gray-800 mb-3">{caption}</Text>
    </View>
  );
};

export default ProfileProduct;

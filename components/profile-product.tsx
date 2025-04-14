import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProfileProductProps {
  name: string;
  price: number | string;
  caption: string;
  postImage: any;
  onAddToCart?: () => void;
}

const ProfileProduct = ({
  name,
  price,
  caption,
  postImage,
  onAddToCart,
}: ProfileProductProps) => {
  return (
    <View className="bg-white  rounded-xl">
      <View className="rounded-xl overflow-hidden mb-2">
        <Image source={postImage} className="w-full h-24" resizeMode="cover" />
      </View>
      <View className="mb-1 flex-row items-center">
        <Text className="font-bold text-sm text-gray-900">
          ${price.toFixed(2)}
        </Text>
        <Text
          className="font-semibold text-sm text-gray-900 ml-1 flex-1"
          numberOfLines={1}
        >
          {name}
        </Text>
      </View>
      <Text className="text-xs text-gray-500 mb-2">{caption}</Text>
      <TouchableOpacity onPress={onAddToCart}>
        <Text className="text-teal-600 text-sm font-bold">ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileProduct;

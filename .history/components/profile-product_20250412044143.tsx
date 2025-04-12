import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface ProductCardProps {
  postImage: any; // require('...') or { uri: '...' }
  title: string;
  price: string;
  description: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  postImage,
  title,
  price,
  description,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <View className="bg-white p-4 rounded-2xl mb-4 w-full">
      {/* Product Image */}
      <View className="rounded-2xl overflow-hidden mb-3">
        <Image source={postImage} className="w-full h-48" resizeMode="cover" />
      </View>

      {/* Price and Title */}
      <View className="flex-row items-center mb-1">
        <Text className="text-lg font-bold text-gray-900 mr-2">${price}</Text>
        <Text className="text-lg font-semibold text-gray-900" numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Description */}
      <Text className="text-gray-500 text-sm mb-3">{description}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity onPress={onAddToCart}>
        <Text className="text-teal-600 font-bold text-base">ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

interface TopSellersComponentProps {
  name: string;
  rating?: number;
  subText?: string;
  source?: { uri: string };
  onViewProfile?: () => void;
  showIcon?: boolean;
  showButton?: boolean;
  showtotalProduct?: boolean;
  buttonText?: string;
}

const TopSellersComponent = ({
  name,
  rating,
  source,
  subText,
  onViewProfile,
  showIcon,
  showButton,
  buttonText,
  showtotalProduct,
}: TopSellersComponentProps) => {
  const router = useRouter();
  const defaultOnPress = () => {
    router.push("/(tabs)/profile-buyer");
  };
  const handlePress = onViewProfile || defaultOnPress;

  return (
    <View className="flex-row items-center bg-white rounded-lg p-3 my-2">
      <View className="w-12 h-12 rounded-full bg-teal-50 justify-center items-center mr-3">
        <View className="bg-[#ECE8E8] p-2 rounded-full">
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/profile-buyer")}
          >
            <Image
              source={source}
              style={{ height: 60, width: 60 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 pl-4">
        <Text className="text-[14px] font-bold mb-1">{name}</Text>

        {showIcon && (
          <View className="flex-row items-center mb-1">
            <Ionicons name="star-outline" size={14} color="#E26D08" />
            <Text className="text-sm text-gray-600 ml-1">{rating}</Text>
          </View>
        )}
        {rating !== undefined && (
          <View className="flex-row items-center mb-1">
            <Ionicons name="star-outline" size={14} color="#E26D08" />
            <Text className="text-sm text-gray-600 ml-1">
              {rating.toFixed(1)}
            </Text>
          </View>
        )}
        {showtotalProduct && (
          <Text className="text-sm text-gray-600">Total Product:{subText}</Text>
        )}
      </View>

      {showButton && (
        <TouchableOpacity className="rounded" onPress={handlePress}>
          <Text
            style={{
              backgroundColor: "#008080",
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 90,
            }}
            className="text-white text-sm font-bold px-6"
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopSellersComponent;

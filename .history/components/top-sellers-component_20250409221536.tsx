import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TopSellersComponentProps {
  name: string;
  rating?: number;
  subText: string;
  source?: { uri: string };
  onViewProfile?: () => void;
  showIcon?: boolean;
  showButton?: boolean;
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
}: TopSellersComponentProps) => {
  return (
    <View className="flex-row items-center bg-white rounded-lg p-3 my-2">
      <View className="w-12 h-12 rounded-full bg-teal-50 justify-center items-center mr-3">
        <View className="bg-[#ECE8E8] p-2 rounded-full">
          <Image
            source={source}
            style={{ height: 60, width: 60 }}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="flex-1 pl-4">
        <Text className="text-xl font-bold mb-1">{name}</Text>

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
        <Text className="text-sm text-gray-600">{subText}</Text>
      </View>

      {showButton && (
        <TouchableOpacity
          className="pl-3 py-1.5 rounded"
          onPress={onViewProfile}
        >
          <Text
            style={{
              backgroundColor: "#008080",
              padding: 10,
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

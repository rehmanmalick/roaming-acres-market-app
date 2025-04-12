import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckoutComponent: React.FC<{
  mainText: string;
  subText: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  TextIcon?: boolean;
  ViewMap?: boolean;
}> = ({ mainText, subText, icon, TextIcon, ViewMap, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between p-4 rounded-xl bg-gray-100 mx-5 mt-4"
    >
      <View className="w-10 h-10 justify-center items-center mr-3">
        <Ionicons name={icon} size={24} color="#4B5563" />
      </View>
      <View className="flex-1 ml-2">
        <Text className="text-md font-medium text-gray-500 mb-1">
          {subText}
        </Text>
        <Text className="text-['] font-semibold">{mainText}</Text>
      </View>
      {TextIcon ? (
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      ) : ViewMap ? (
        <Text className="text-gray-500">View in Map</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckoutComponent;

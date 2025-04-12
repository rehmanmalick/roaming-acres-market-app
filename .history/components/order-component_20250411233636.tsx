import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface TopSellersComponentProps {
  name: string;
  price?: number;
  subText: string;
  source?: { uri: string };
  onPress?: () => void;
  buttonText?: string;
}

const OrderComponent = ({
  name,
  price,
  source,
  subText,
  onPress,
  buttonText,
}: TopSellersComponentProps) => {
  return (
    <View className="flex-row items-center bg-white rounded-lg  my-2">
      <View className="w-24 h-24 rounded-lg justify-center items-center mr-3 bg-white overflow-hidden">
        <Image
          source={source}
          className="w-full h-full"
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 pl-2">
        <Text className="text-xl font-bold mb-1">{name}</Text>

        <View className="flex-row items-center mb-1">
          <Text className="text-sm text-gray-600 ml-1">$ {price}</Text>
        </View>

        <Text className="text-sm text-gray-600">{subText}</Text>
      </View>

      <TouchableOpacity className=" " onPress={onPress}>
        <Text
          style={{
            backgroundColor: "#008080",
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderRadius: 5,
          }}
          className="text-white text-sm font-bold px-6"
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderComponent;

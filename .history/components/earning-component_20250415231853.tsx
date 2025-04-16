import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

interface EarningComponentProps {
  orderId: string;
  amount: string | number;
  timeRequired: string;
  status?: string;
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
}

const EarningComponent: React.FC<EarningComponentProps> = ({
  orderId,
  amount,
  timeRequired,
  status = "Delivered",
  onPress,
  imageSource = require("../assets/images/card.png"),
}) => {
  const formattedAmount =
    typeof amount === "number" ? amount.toLocaleString() : amount;

  const statusText = status === "Pending" ? "Pending" : "Delivered";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="rounded-lg p-4 mt-4 shadow-lg bg-white"
    >
      <View className="flex-row justify-between">
        <View className="flex flex-row">
          <View className="mr-3 ">
            <Image
              source={imageSource}
              resizeMode="cover"
              className="w-24 h-24"
            />
          </View>

          <View className="flex flex-col gap-3 justify-center">
            <Text className="font-bold">Cashback from purchase</Text>
            <Text className="font-bold">Purchase from App</Text>
            <Text className="font-bold">Transaction ID</Text>
            <Text className="font-bold ">698094554320</Text>
          </View>
        </View>
        <View className="flex flex-col gap-3  justify-center items-end">
          <Text className="text-[#008080] font-medium text-sm">{orderId}</Text>
          <Text className="text-[#008080] font-medium text-sm ">
            ${formattedAmount}
          </Text>
          <Text className="text-[#008080] font-medium text-sm">
            {statusText}
          </Text>
          <Text className="text-[#008080] font-medium text-sm ">
            {timeRequired}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EarningComponent;

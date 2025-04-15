import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

interface PendingOrderProps extends TouchableOpacityProps {
  orderId?: string;
  amount?: string | number;
  timeRequired?: string;
}

const PendingOrder: React.FC<PendingOrderProps> = ({
  orderId = "0000",
  amount = "3212",
  timeRequired = "20mins",
  onPress,
  ...touchableProps
}) => {
  const formattedAmount =
    typeof amount === "number" ? amount.toLocaleString() : amount;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      {...touchableProps}
      className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
    >
      <View className="flex flex-row justify-between">
        <Text className="text-base text-gray-800 font-medium">
          Order ID #{orderId}
        </Text>
        <View className="bg-amber-100 text-amber-800  rounded text-sm font-bold mb-2">
          <Text className="text-amber-800 font-bold text-sm">Pending</Text>
        </View>
      </View>

      <View className="mt-3">
        <View className="flex flex-row">
          <View>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
          <View>
            <Text className="font-bold text-gray-800">Dispatch your order</Text>
            <Text className="text-gray-600 text-sm mt-1">Amount Paid</Text>
          </View>
        </View>
        <View className="mt-3 flex flex-col items-start">
          <Text className="text-gray-600 text-sm">
            Time Req. {timeRequired}
          </Text>
          <Text className="text-gray-800 text-lg font-bold mt-1">
            ${formattedAmount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PendingOrder;

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
      className="border border-gray-200 rounded-lg p-4 mt-4 shadow-sm bg-white"
    >
      <View className="flex flex-row justify-between pl-3">
        <View className= >
          <Text className="text-base text-gray-800 font-medium">Order ID </TextclassName=>
          <Text>#{orderId}</Text>
        </View>
        <View className="bg-[#F8E473]  px-2 py-1 rounded text-sm font-bold mb-2">
          <Text className=" font-bold text-sm">Pending</Text>
        </View>
      </View>

      <View className="mt-3  flex-row justify-between">
        <View className="flex flex-row">
          <View className="mr-3">
            <View className="bg-[#008080] p-2 rounded-full ">
              <Ionicons name="location-sharp" size={18} color="white" />
            </View>
          </View>
          <View>
            <Text className="font-bold ">Dispatch your order</Text>
            <Text className="text-[#60655C] text-sm mt-1">Amount Paid</Text>
          </View>
        </View>
        <View className=" flex flex-col items-end">
          <Text className="text-[#60655C] font-medium  text-sm">
            Time Req. {timeRequired}
          </Text>
          <Text className=" text-sm  mt-1">${formattedAmount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PendingOrder;

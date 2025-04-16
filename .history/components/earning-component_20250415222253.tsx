import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Image,
} from "react-native";

interface EarningComponentProps extends TouchableOpacityProps {
  orderId: string;
  amount: string | number;
  timeRequired: string;
  status?: string;
  dispatchText?: string;
  locationIcon?: boolean;
}

const EarningComponent: React.FC<EarningComponentProps> = ({
  orderId,
  amount,
  timeRequired,
  status = "Pending", // Default is "Pending"
  dispatchText = "Dispatch your order",
  locationIcon = true,
  onPress,
  ...touchableProps
}) => {
  const formattedAmount =
    typeof amount === "number" ? amount.toLocaleString() : amount;

  // Set background color based on status
  const statusStyle = status === "Pending" ? "#F8E473" : "#E26D08"; // Pending is yellow, Cancelled is red
  const statusText = status === "Pending" ? "Pending" : "Cancelled";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      {...touchableProps}
      className=" rounded-lg p-4 mt-4 shadow-sm bg-white"
    >
      <View className="mt-3 flex-row justify-between">
        <View className="flex flex-row">
          <View className="mr-3">
            <View className="">
              <Image
                source={require("../assets/images/top-selling.png")}
                resizeMode="cover"
                className="w-30 h-30"
              />
            </View>
          </View>

          <View>
            <Text className="font-bold">Order ID:</Text>
            <Text className="text-[#60655C] text-sm mt-1">Amount Paid:</Text>
            <Text className="font-bold">Status:</Text>
            <Text className="text-[#60655C] text-sm mt-1">Order at:</Text>
          </View>
        </View>
        <View className="flex flex-col items-end">
          <Text className="text-[#60655C] font-medium text-sm">#0000</Text>
          <Text className="text-sm mt-1">$ 00.00</Text>
          <Text className="text-[#60655C] font-medium text-sm">Delivered</Text>
          <Text className="text-sm mt-1">00 Jan 0000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EarningComponent;

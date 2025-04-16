import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

interface InventoryComponentProps extends TouchableOpacityProps {
  orderId: string;
  amount: string | number;
  timeRequired: string;
  status?: string;
  dispatchText?: string;
  locationIcon?: boolean;
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({
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
      <View className="flex flex-row justify-between pl-3">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">Order ID </Text>
          <Text>#{orderId}</Text>
        </View>

        {/* Fixed dynamic background color */}
        <View
          style={{
            backgroundColor: statusStyle,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              color: status === "Pending" ? "#000000" : "#ffffff", // Brownish for Pending, Dark Red for Cancelled
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {statusText}
          </Text>
        </View>
      </View>

      <View className="mt-3 flex-row justify-between">
        <View className="flex flex-row">
          {locationIcon && (
            <View className="mr-3">
              <View className="bg-[#008080] p-2 rounded-full">
                <Ionicons name="location-sharp" size={18} color="white" />
              </View>
            </View>
          )}
          <View>
            <Text className="font-bold">{dispatchText}</Text>
            <Text className="text-[#60655C] text-sm mt-1">Amount Paid</Text>
          </View>
        </View>
        <View className="flex flex-col items-end">
          <Text className="text-[#60655C] font-medium text-sm">
            Time Req. {timeRequired}
          </Text>
          <Text className="text-sm mt-1">${formattedAmount}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between pl-3">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">Order ID </Text>
          <Text>#{orderId}</Text>
        </View>

        {/* Fixed dynamic background color */}
        <View
          style={{
            backgroundColor: statusStyle,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              color: status === "Pending" ? "#000000" : "#ffffff", // Brownish for Pending, Dark Red for Cancelled
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {statusText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InventoryComponent;

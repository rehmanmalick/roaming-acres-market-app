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
        <View className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-bold mb-2">
          <Text className="text-amber-800 font-bold text-sm">Pending</Text>
        </View>
      </View>

      <View className="mt-3">
        <Text className="font-bold text-gray-800">Dispatch your order</Text>
        <Text className="text-gray-600 text-sm mt-1">Amount Paid</Text>

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
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface NotificationComponentProps {
  title: string;
  text?: string;
  time: string;
  status: string;
  bgColor?: string;
  statusTextColor?: string;
}

const NotificationComponent = ({
  title,
  text,
  time,
  bgColor,
  status,
  statusTextColor,
}: NotificationComponentProps) => {
  return (
    <View className="flex-row border-b border-[#EBEBEB]  bg-white rounded-lg px-3 py-5 my-2">
      <View className=" ">
        <View className="bg-gray-100 p-4 rounded-full">
          <Image
            source={require("../assets/images/burger.png")}
            className="w-full h-full"
            style={{ height: 22, width: 22 }}
          />
        </View>
      </View>
      <View className="flex-1 pl-6">
        <Text className="text-lg font-bold mb-1">{title}</Text>

        <View className="flex-row items-center mb-1">
          <Text className="text-sm text-gray-600">{text}</Text>
        </View>

        <Text className="text-md font-semibold text-gray-800">{time}</Text>
      </View>

      <View className="pl-6">
        <Text
          style={{
            backgroundColor: bgColor,
            color: statusTextColor,
            borderRadius: 5,
          }}
          className="text-white text-sm font-bold px-4"
        >
          {status}
        </Text>
      </View>
    </View>
  );
};

export default NotificationComponent;

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
    <View className="flex-row  bg-white rounded-lg p-3 my-2">
      <View className="bg-">
        <Image
          source={require("../assets/images/burger.png")}
          className="w-full h-full"
          style={{ height: 22, width: 22 }}
        />
      </View>
      <View className="flex-1 pl-6">
        <Text className="text-xl font-bold mb-1">{title}</Text>

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

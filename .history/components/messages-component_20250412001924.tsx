import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface MessageComponentProps {
  name: string;
  text?: string;
  time: string;
  message?: boolean;
  noOfMessage?: string;
  source?: { uri: string };
  active?: boolean;
}

const MessageComponent = ({
  name,
  text,
  time,
  message,
  noOfMessage,
  source,
  active,
}: MessageComponentProps) => {
  return (
    <TouchableOpacity className="flex-row bg-white rounded-lg p-2 my-2">
      <View style={{ position: "relative" }}>
        <Image
          source={source}
          className="w-full h-full"
          style={{ height: 50, width: 50 }}
        />
        vi
        <MaterialCommunityIcons
          name="circle"
          size={15}
          color={`${active ? "#1AD52B" : "#D9D9D9"}`}
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
      </View>
      <View className="flex-1 item-center justify-center pl-6">
        <Text className="text-xl font-bold mb-1">{name}</Text>

        <View className="flex-row items-center mb-1">
          <Text
            className={`text-sm ${message ? "text-black" : "text-gray-400"}`}
          >
            {text}
          </Text>
        </View>
      </View>

      <View className="pl-6 items-center justify-center">
        <Text
          className={`text-md font-semibold ${
            message ? "text-black" : "text-gray-400"
          } mb-1`}
        >
          {time}
        </Text>
        {message && (
          <View className="h-6 w-6">
            <Text
              style={{ backgroundColor: "orange" }}
              className="rounded-xl text-white text-center text-sm font-bold p-1"
            >
              {noOfMessage}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessageComponent;

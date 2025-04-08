import React from "react";
import { View, Text, Image } from "react-native";

const ChatMessage = ({ message, isCurrentUser }) => {
  return (
    <View
      className={`flex-row my-1 px-2.5 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isCurrentUser && (
        <Image
          source={{ uri: message.user.avatar }}
          className="w-9 h-9 rounded-full mr-2"
        />
      )}
      <View
        className={`max-w-[70%] rounded-3xl px-3 py-2 ${
          isCurrentUser
            ? "bg-blue-500 rounded-br-none"
            : "bg-gray-100 rounded-bl-none"
        }`}
      >
        {!isCurrentUser && (
          <Text className="font-bold text-xs mb-0.5 text-gray-800">
            {message.user.name}
          </Text>
        )}
        <Text
          className={`text-base ${isCurrentUser ? "text-white" : "text-black"}`}
        >
          {message.text}
        </Text>
        <Text
          className={`text-[10px] mt-1 text-right ${
            isCurrentUser ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {message.time}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;

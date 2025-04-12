import React from "react";
import { View, Text } from "react-native";

// Helper function for relative time
const getRelativeTime = (timestamp) => {
  const now = new Date();
  const diff = Math.floor((now - new Date(timestamp)) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

const Message = ({ text, timestamp, isCurrentUser }) => {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
        maxWidth: "80%",
      }}
    >
      <View
        style={{
          backgroundColor: isCurrentUser
            ? "hsla(28, 93%, 46%, 0.25)#e26e08"
            : "hsla(180, 100%, 25%, 0.25)",
          borderWidth: 1,
          borderColor: isCurrentUser ? "#E26D08" : "#047474",
          borderRadius: 10,
          padding: 10,
          marginVertical: 4,
          marginHorizontal: 10,
          maxWidth: "80%",
        }}
      >
        <Text style={{ color: "#1f2937", fontSize: 15 }}>{text}</Text>
      </View>
      <Text
        style={{
          alignSelf: isCurrentUser ? "flex-end" : "flex-start",
          fontSize: 10,
          color: "#6b7280",
          padding: 8,
          marginHorizontal: 10,
        }}
      >
        {getRelativeTime(timestamp)}
      </Text>
    </View>
  );
};

export default Message;

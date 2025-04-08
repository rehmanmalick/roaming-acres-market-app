import React from "react";
import { View, Text } from "react-native";

// Helper function for relative time
const getRelativeTime = (timestamp) => {
  const now = new Date();
  const diff = Math.floor((now - new Date(timestamp)) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minute(s) ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour(s) ago`;
  return `${Math.floor(diff / 86400)} day(s) ago`;
};

const Message = ({ text, timestamp, isCurrentUser }) => {
  return (
    <View
      style={{
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",

        borderRadius: 16,

        maxWidth: "80%",
      }}
    >
      <View
        style={{
          alignSelf: isCurrentUser ? "flex-end" : "flex-c",
          backgroundColor: isCurrentUser ? "#fdba74" : "#6ee7b7",
          borderRadius: 16,
          padding: 10,
          marginVertical: 4,
          marginHorizontal: 10,
          maxWidth: "80%",
        }}
      >
        <Text style={{ color: "#1f2937", fontSize: 15 }}>{text}</Text>
      </View>
      <Text style={{ fontSize: 10, color: "#6b7280", marginTop: 4 }}>
        {getRelativeTime(timestamp)}
      </Text>
    </View>
  );
};

export default Message;

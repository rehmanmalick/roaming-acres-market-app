import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import ChatMessage from "./../../components/message";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hey there!",
      time: "10:30 AM",
      user: {
        id: "2",
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    {
      id: "2",
      text: "Hi! How are you?",
      time: "10:31 AM",
      user: {
        id: "1", // current user
        name: "You",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      user: {
        id: "1",
        name: "You",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  return (
    <View className="flex-1 bg-white">
      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMessage message={item} isCurrentUser={item.user.id === "1"} />
        )}
        contentContainerStyle={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Message Input */}
      <View className="flex-row items-center p-3 border-t border-gray-200 bg-white">
        <TextInput
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 text-gray-800"
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor="#9ca3af"
        />
        <TouchableOpacity
          className={`p-2 rounded-full ${
            newMessage ? "bg-blue-500" : "bg-blue-300"
          }`}
          onPress={handleSend}
          disabled={!newMessage}
        >
          <Text className="text-white font-medium">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const getFormattedTime = (timestamp) => {
  const now = new Date();
  const messageTime = new Date(timestamp);
  const diff = Math.floor((now - messageTime) / 1000);
  if (diff < 60) return "Just now";

  return messageTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hey there!",
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      user: {
        id: "2",
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    {
      id: "2",
      text: "Hi! How are you?",
      timestamp: new Date(Date.now() - 60 * 1000),
      user: {
        id: "1",
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
      timestamp: new Date(),
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

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev]);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.user.id === "1";
    return (
      <View
        className={`p-2 my-1 mx-2 rounded-xl max-w-[80%] ${
          isCurrentUser ? "bg-blue-100 self-end" : "bg-yellow-100 self-start"
        }`}
      >
        <Text className="text-gray-800 text-base">{item.text}</Text>
        <Text className="text-xs text-gray-500 mt-1">
          {getFormattedTime(item.timestamp)}
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-3 border-b border-gray-200 bg-white">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="font-semibold text-lg">John Doe</Text>
          <Text className="text-green-500 text-sm">Online</Text>
        </View>
        <Text className="text-xl text-gray-400">✖</Text>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Box */}
      <View className="flex-row items-center p-3 border-t border-gray-200 bg-white">
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor="#9ca3af"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-3 text-gray-800"
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={!newMessage.trim()}
          className={`p-3 rounded-full ${
            newMessage.trim() ? "bg-blue-500" : "bg-blue-200"
          }`}
        >
          <Text className="text-white font-bold text-lg">➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

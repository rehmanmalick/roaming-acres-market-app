import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Message from "./../../components/message";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    // ... your sample messages
  ]);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

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

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date(),
      user: {
        id: "2",
        name: "You",
      },
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.user.id === "1";
    return (
      <Message
        text={item.text}
        timestamp={item.timestamp}
        isCurrentUser={isCurrentUser}
      />
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-3 border-b border-gray-200 bg-white">
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/1.jpg",
          }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View className="flex-1">
          <Text className="font-semibold text-base">Expert Advise</Text>
          <Text className="text-xs text-blue-500">Online Now</Text>
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
          placeholder="Write something..."
          placeholderTextColor="#9ca3af"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-gray-900 mr-2"
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={!newMessage.trim()}
          className={`p-2 rounded-full ${
            newMessage.trim() ? "bg-orange-400" : "bg-orange-300"
          }`}
        >
          <Text className="text-white font-bold text-lg">➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

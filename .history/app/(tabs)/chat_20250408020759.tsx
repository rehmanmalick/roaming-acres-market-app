import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, TextInput, TouchableOpacity, Text, Image } from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi, I need advice on growing tomatoes. Can you help?",
      timestamp: Date.now() - 8 * 60 * 1000, // 8 minutes ago
      user: { id: "1", name: "You" },
    },
    {
      id: "2",
      text: "Of course! What do you need help with?",
      timestamp: Date.now() - 7 * 60 * 1000, // 7 minutes ago
      user: { id: "2", name: "Expert" },
    },
    {
      id: "3",
      text: "I'm having trouble with pests attacking my plants. Any organic solutions?",
      timestamp: Date.now() - 6 * 60 * 1000, // 6 minutes ago
      user: { id: "1", name: "You" },
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  // Function to format time difference
  const formatTime = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: Date.now(),
      user: { id: "1", name: "You" },
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.user.id === "1";
    return (
      <View className={`mx-3 my-1 max-w-[80%] rounded-2xl p-3 ${isCurrentUser ? 'bg-orange-300 self-end' : 'bg-emerald-300 self-start'}`}>
        <Text className="text-gray-800 text-base">{item.text}</Text>
        <Text className="text-gray-500 text-xs mt-1">{formatTime(item.timestamp)}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-3 border-b border-gray-200 bg-white">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View className="flex-1">
          <Text className="font-semibold text-gray-900 text-base">Expert Advice</Text>
          <Text className="text-blue-500 text-xs">Online Now</Text>
        </View>
        <Text className="text-gray-400 text-xl">✖</Text>
      </View>

      {/* Chat messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Message input */}
      <View className="flex-row items-center p-2 border-t border-gray-200 bg-white">
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Write something..."
          placeholderTextColor="#9ca3af"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 text-gray-900"
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={!newMessage.trim()}
          className={`p-3 rounded-full ${newMessage.trim() ? 'bg-orange-400' : 'bg-orange-300'}`}
        >
          <Text className="text-white font-bold text-base">➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
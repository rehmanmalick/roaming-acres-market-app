import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Message from "./Message"; // Importing the Message component
import Message from './../../components/message';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi, I need advice on growing tomatoes. Can you help?",
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      user: { id: "1", name: "You" },
    },
    {
      id: "2",
      text: "Of course! What do you need help with?",
      timestamp: new Date(Date.now() - 7 * 60 * 1000),
      user: { id: "2", name: "Expert" },
    },
    {
      id: "3",
      text: "I'm having trouble with pests attacking my plants. Any organic solutions?",
      timestamp: new Date(Date.now() - 6 * 60 * 1000),
      user: { id: "1", name: "You" },
    },
    {
      id: "4",
      text: "Try companion planting with marigolds and using neem oil spray.",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      user: { id: "2", name: "Expert" },
    },
    {
      id: "5",
      text: "Got it! Any other tips for a successful tomato harvest?",
      timestamp: new Date(Date.now() - 3 * 60 * 1000),
      user: { id: "1", name: "You" },
    },
    {
      id: "6",
      text: "Ensure well-drained soil and provide plenty of sunlight. Happy gardening!",
      timestamp: new Date(Date.now() - 10 * 1000),
      user: { id: "2", name: "Expert" },
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  // Update time display every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev]); // Trigger re-render
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
        id: "1",
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          borderBottomWidth: 1,
          borderColor: "#e5e7eb",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/1.jpg",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Expert Advise</Text>
          <Text style={{ color: "#3b82f6", fontSize: 12 }}>Online Now</Text>
        </View>
        <Text style={{ fontSize: 20, color: "#9ca3af" }}>✖</Text>
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#e5e7eb",
          backgroundColor: "white",
        }}
      >
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Write something..."
          placeholderTextColor="#9ca3af"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#d1d5db",
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 8,
            marginRight: 8,
            color: "#111827",
          }}
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={!newMessage.trim()}
          style={{
            backgroundColor: newMessage.trim() ? "#fb923c" : "#fdba74",
            padding: 10,
            borderRadius: 100,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            ➤
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

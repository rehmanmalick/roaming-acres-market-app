import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi, I need advice on growing tomatoes. Can you help?",
      time: "8 minutes ago",
      user: {
        id: "1",
        name: "You",
      },
    },
    {
      id: "2",
      text: "Of course! What do you need help with?",
      time: "7 minutes ago",
      user: {
        id: "2",
        name: "Expert",
      },
    },
    {
      id: "3",
      text: "I'm having trouble with pests attacking my plants. Any organic solutions?",
      time: "6 minutes ago",
      user: {
        id: "1",
        name: "You",
      },
    },
    {
      id: "4",
      text: "Try companion planting with marigolds and using neem oil spray.",
      time: "5 minutes ago",
      user: {
        id: "2",
        name: "Expert",
      },
    },
    {
      id: "5",
      text: "Got it! Any other tips for a successful tomato harvest?",
      time: "3 minutes ago",
      user: {
        id: "1",
        name: "You",
      },
    },
    {
      id: "6",
      text: "Ensure well-drained soil and provide plenty of sunlight. Happy gardening!",
      time: "10 seconds ago",
      user: {
        id: "2",
        name: "Expert",
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
      time: "Just now",
      user: {
        id: "1",
        name: "You",
      },
    };

    setMessages((prev) => [...prev, message]);
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
      <View
        style={{
          alignSelf: isCurrentUser ? "flex-end" : "flex-start",
          backgroundColor: isCurrentUser ? "#fdba74" : "#6ee7b7",
          borderRadius: 16,
          padding: 10,
          marginVertical: 4,
          marginHorizontal: 10,
          maxWidth: "80%",
        }}
      >
        <Text style={{ color: "#1f2937", fontSize: 15 }}>{item.text}</Text>
        <Text style={{ fontSize: 10, color: "#6b7280", marginTop: 4 }}>
          {item.time}
        </Text>
      </View>
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

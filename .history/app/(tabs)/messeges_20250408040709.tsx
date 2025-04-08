import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Message from "./../../components/message";
import Wrapper from "@/components/wrapper";
import { EmojiKeyboard } from "react-native-emoji-keyboard";

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
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("2");
  const [emojiVisible, setEmojiVisible] = useState(false);
  const flatListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date(),
      user: {
        id: currentUser,
        name: currentUser === "1" ? "You" : "Expert",
      },
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const toggleUser = () => {
    setCurrentUser(currentUser === "1" ? "2" : "1");
  };

  const handleEmojiSelect = (emoji) => {
    setNewMessage((prev) => prev + emoji.emoji);
  };

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.user.id === currentUser;
    return (
      <Message
        text={item.text}
        timestamp={item.timestamp}
        isCurrentUser={isCurrentUser}
      />
    );
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-white"
      >
        {/* Header */}
        <View className="flex-row items-center p-3 border-b border-gray-200 bg-white">
          <Image
            source={{
              uri:
                currentUser === "1"
                  ? "https://randomuser.me/api/portraits/men/1.jpg"
                  : "https://randomuser.me/api/portraits/women/1.jpg",
            }}
            className="w-10 h-10 rounded-full mr-2"
          />
          <View className="flex-1">
            <Text className="font-semibold text-base">
              Chat as {currentUser === "1" ? "You" : "Expert"}
            </Text>
            <Text className="text-xs text-blue-500">Online Now</Text>
          </View>
          <TouchableOpacity onPress={toggleUser}>
            <Text className="text-xs text-blue-400 underline">Switch User</Text>
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{
            paddingVertical: 12,
            paddingHorizontal: 8,
          }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />

        {/* Input Box */}
        <View className="flex-row items-center p-3 border-t border-gray-200 bg-[#F0F5FA]">
          <TouchableOpacity
            onPress={() => {
              inputRef.current?.focus();
              setEmojiVisible(true);
            }}
            className="mr-2"
          >
            <Feather name="smile" size={24} color="#FF7622" />
          </TouchableOpacity>

          <TextInput
            ref={inputRef}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder={`Message as ${
              currentUser === "1" ? "You" : "Expert"
            }...`}
            placeholderTextColor="#9ca3af"
            className="flex-1 px-4 py-2 bg-white rounded-full text-gray-900 mr-2"
            onSubmitEditing={handleSend}
          />

          <TouchableOpacity
            onPress={handleSend}
            disabled={!newMessage.trim()}
            className={`p-2 rounded-full ${
              newMessage.trim() ? "bg-[#FF7622]" : "bg-gray-300"
            }`}
          >
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Emoji Keyboard */}
        <EmojiKeyboard
          onEmojiSelected={handleEmojiSelect}
          open={emojiVisible}
          onClose={() => setEmojiVisible(false)}
          theme={{
            knob: "#FF7622",
            container: "#F0F5FA",
            header: "#FF7622",
            skinTonesContainer: "#F0F5FA",
            category: {
              icon: "#FF7622",
              iconActive: "#FFFFFF",
              container: "#F0F5FA",
              containerActive: "#FF7622",
            },
          }}
        />
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default ChatScreen;

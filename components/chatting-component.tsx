import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList as RNFlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Message from "@/components/chat-message";
import Wrapper from "@/components/common/wrapper";

// Define types
type UserType = {
  id: string;
  name: string;
};

type MessageType = {
  id: string;
  text: string;
  timestamp: Date;
  user: UserType;
  type?: "text"; // Extendable later
};

const ChattingComponent = () => {
  const [messages, setMessages] = useState<MessageType[]>([
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

  const [newMessage, setNewMessage] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<"1" | "2">("1");
  const flatListRef = useRef<RNFlatList<MessageType>>(null);
  const router = useRouter();

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: MessageType = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date(),
      user: {
        id: currentUser,
        name: currentUser === "1" ? "You" : "Expert",
      },
    };

    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage("");
  };

  const toggleUser = () => {
    setCurrentUser((prev) => (prev === "1" ? "2" : "1"));
  };

  const renderMessage = ({ item }: { item: MessageType }) => {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // Adjust this offset as needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <View className="flex-1  pb-6 ">
            {/* Header */}
            <View className="flex-row items-center p-2 pb-6 border-b border-[#E26D08] mt-[-30]">
              <Image
                source={
                  currentUser === "1"
                    ? require("@/assets/images/profile.png")
                    : require("@/assets/images/profile.png")
                }
                className="w-16 h-16 border-4 border-white rounded-full mr-2"
              />
              <View className="flex-1">
                <Text className="font-semibold text-base">
                  Chat as {currentUser === "1" ? "You" : "Expert"}
                </Text>
              </View>
              {/* Back Button */}
              <TouchableOpacity
                className="bg-white rounded-[6px] shadow-lg p-1"
                onPress={() => router.back()}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Messages */}
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={renderMessage}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-end",
                paddingVertical: 12,
              }}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
              showsVerticalScrollIndicator={false}
            />

            {/* Input Box */}
            <View className="flex-row items-end p-3 rounded-[10px] bg-[#F0F5FA]">
              <ScrollView
                style={{ maxHeight: 80 }}
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
              >
                <TextInput
                  value={newMessage}
                  onChangeText={setNewMessage}
                  placeholder={`Message as ${
                    currentUser === "1" ? "You" : "Expert"
                  }...`}
                  placeholderTextColor="#9ca3af"
                  multiline
                  scrollEnabled={false} // Handled by ScrollView
                  textAlignVertical="top"
                  className="flex-1  py-3 text-gray-900 mr-2"
                />
              </ScrollView>

              <TouchableOpacity
                onPress={handleSend}
                disabled={!newMessage.trim()}
                className="p-2  rounded-full bg-white"
              >
                <Feather name="send" size={24} color="#FF7622" />
              </TouchableOpacity>
            </View>
          </View>
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChattingComponent;

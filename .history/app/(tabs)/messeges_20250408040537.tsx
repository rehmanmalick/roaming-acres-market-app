import React, { useState, useRef, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Feather from "react-native-vector-icons/Feather"; // You might need to install this if not already
import Message from "./../../components/message";
import Wrapper from "@/components/wrapper";
// import EmojiSelector from "react-native-emoji-selector"; // Import emoji selector

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
  const [currentUser, setCurrentUser] = useState("2"); // "1" or "2"
  const [emojiVisible, setEmojiVisible] = useState(false); // Control emoji picker visibility
  const flatListRef = useRef(null);

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
    <Wrapper>
      <View className="flex-1 bg-white">
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
            flex: 1,
            justifyContent: "flex-end",
            paddingVertical: 12,
          }}
          showsVerticalScrollIndicator={false}
          inverted={true} // Ensure messages are in reverse order (latest at the bottom)
        />

        {/* Input Box */}
        <View className="flex-row items-center p-3 border-t border-gray-200 bg-[#F0F5FA] ">
          <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder={`Message as ${
              currentUser === "1" ? "You" : "Expert"
            }...`}
            placeholderTextColor="#9ca3af"
            className="flex-1 px-4 py-2 text-gray-900 mr-2"
          />
          {/* Emoji Button */}
          <TouchableOpacity
            onPress={() => setEmojiVisible(true)}
            className="mr-2"
          >
            <Feather name="smile" size={24} color="#FF7622" />
          </TouchableOpacity>
          {/* Send Button */}
          <TouchableOpacity
            onPress={handleSend}
            disabled={!newMessage.trim()}
            className={`p-2 mr-4  rounded-full ${
              newMessage.trim() ? "bg-white" : "bg-white"
            }`}
          >
            <Feather name="send" size={24} color="#FF7622" />
          </TouchableOpacity>
        </View>

        {/* Emoji Picker Modal */}
        <Modal
          visible={emojiVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setEmojiVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setEmojiVisible(false)}>
            <View className="flex-1 justify-end bg-black opacity-50" />
          </TouchableWithoutFeedback>

          <View className="bg-white border-t-2 border-gray-200">
            <EmojiSelector
              onEmojiSelected={(emoji) => setNewMessage(newMessage + emoji)}
              showSearchBar={true}
            />
          </View>
        </Modal>
      </View>
    </Wrapper>
  );
};

export default ChatScreen;

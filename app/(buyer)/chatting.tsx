import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList as RNFlatList,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// import Message from "@/components/chat-message";
import Wrapper from "@/components/wrapper";
import ChattingComponent from "@/components/chatting-component";

const ChatScreen = () => {
  return <ChattingComponent />;
};

export default ChatScreen;

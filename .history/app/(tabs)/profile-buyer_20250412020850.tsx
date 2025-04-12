import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={styles.container}
        className="flex-1 bg-[#FDFDFD] items-center"
      >
        <ImageBackground
          source={require("../../assets/images/profilebg.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
         
        </ImageBackground>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/seller/home-screen")}
          className="mt-8 bg-teal-600 py-3 px-20 rounded-lg "
        >
          <Text className="text-white text-xl font-bold">Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    alignItems: "center",
  },
  img: {
    borderWidth: 7,
    borderColor: "#ffffff",
    marginTop: 420,
  },
  imageBackground: {
    width: "100%",
    height: 250,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    marginTop: 20,
    borderRadius: 8,
  },
});

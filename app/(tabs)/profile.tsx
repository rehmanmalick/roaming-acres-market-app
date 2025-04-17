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
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.back}
            className="absolute left-5 top-2 bg-white p-3"
          >
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View className="items-center mb-5">
            <View className="relative mt-5">
              <Image
                source={require("../../assets/images/profile.png")}
                className="w-40 h-40 rounded-full"
                style={styles.img}
              />
              <TouchableOpacity className="absolute bottom-2 right-2 bg-teal-600 p-1.5 rounded-full border-2 border-white">
                <Ionicons name="camera" size={16} color="white" />
              </TouchableOpacity>
            </View>
            <Text className="text-lg font-bold mt-2">Try Temp</Text>
            <Text className="text-sm text-gray-500">Edit Profile</Text>
          </View>

          <View className="w-[85%]">
            <Text className="text-lg text-gray-800 mb-1 mt-4">Full Name</Text>
            <TextInput
              className="bg-white py-4 px-4 rounded-lg border border-teal-600"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Try Temp"
              placeholderTextColor={"#A0AEC0"}
            />

            <Text className="text-lg text-gray-800 mb-1 mt-4">E-mail</Text>
            <TextInput
              className="bg-white py-4 px-4 rounded-lg border border-teal-600"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="trytemp11@gmail.com"
              placeholderTextColor={"#A0AEC0"}
            />

            <Text className="text-lg text-gray-800 mb-1 mt-4">
              Phone Number
            </Text>
            <TextInput
              className="bg-white py-4 px-4 rounded-lg border border-teal-600"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="+1  (000) 123-4567"
              placeholderTextColor={"#A0AEC0"}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push("/seller/home-screen")}
            className="mt-8 bg-teal-600 py-3 px-20 rounded-full "
          >
            <Text className="text-white text-xl font-bold">Save</Text>
          </TouchableOpacity>
        </ImageBackground>
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

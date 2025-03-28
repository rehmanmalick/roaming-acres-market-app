import Button from "@/components/button";
import ShopByCategory from "@/components/shop-by-category";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform } from "react-native";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import BackgroundImage from '../assets/bg-welcome.jpg';

export default function SelectYourAccount() {
  return (
    <>
      
        <ImageBackground
          source={{
            uri: "https://source.unsplash.com/600x1200/?farming,plant",
          }}
          className="flex-1 justify-center items-center px-6"
        >
          <View className="absolute top-10 right-4">
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full">
              <Text className="text-green-600 font-bold">Skip</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-black/40 w-full h-full absolute" />

          <View className="w-full items-center">
            <Text className="text-white text-3xl font-bold">Welcome to</Text>
            <Text className="text-yellow-400 text-3xl font-bold">
              Roaming Acres Market
            </Text>
            <Text className="text-white text-center mt-2 px-6">
              Make easy farming with fast delivery at your door.
            </Text>
          </View>

          <View className="absolute bottom-20 w-full px-6">
            <TouchableOpacity
              className="border border-white py-3 rounded-lg items-center mb-4"
              onPress={() => router.push("/signup-email")}
            >
              <Text className="text-white">Start with Email</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="border border-white py-3 rounded-lg items-center"
              onPress={() => router.push("/signup-phone")}
            >
              <Text className="text-white">Start with Phone</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4">
              <Text className="text-white">Already have an Account?</Text>
              <TouchableOpacity onPress={() => router.push("/signin")}>
                <Text className="text-blue-400 font-bold ml-1">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
     
    </>
  );
}

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
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import CustomTextInput from "@/components/ui/custom-input";
import Button from "@/components/button";

export default function EditProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="never" // ADD THIS!
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
    >
      <SafeAreaView className="flex-1 px-6 bg-white">
        {/* Top Image absolutely positioned */}
        <Image
          source={require("../../../assets/images/profilebg.png")}
          resizeMode="cover"
          className="w-screen h-64 absolute top-0 right-0"
        />
        <View className=" flex-row items-center justify-between py-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-9 h-9 bg-white  shadow-sm  rounded-xl justify-center items-center"
          >
            <Ionicons name="chevron-back-outline" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="items-center mb-5">
          <View className="relative mt-5">
            <Image
              source={require("../../../assets/images/profile.png")}
              className="w-40 h-40 border-4 border-white rounded-full"
            />
            <TouchableOpacity className="absolute bottom-2 right-2 bg-teal-600 p-1.5 rounded-full border-2 border-white">
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-lg font-bold mt-2">Try Temp</Text>
          <Text className="text-sm text-gray-500">Edit Profile</Text>
        </View>

        <View className="">
          {/* Full Name Input */}
          <CustomTextInput
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="Try Temp"
            rules={{
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Must be at least 2 characters",
              },
            }}
          />

          {/* Email Input */}
          <CustomTextInput
            control={control}
            name="email"
            label="Email"
            placeholder="trytemp11@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            rules={{
              required: "Email is required",
              validate: (value: string) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                "Enter a valid email",
            }}
          />

          <CustomTextInput
            control={control}
            name="phone"
            label="Phone Number"
            placeholder="+1  (000) 123-4567"
            keyboardType="numeric"
            autoCapitalize="none"
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/, // Accepts 10 to 15 digits
                message: "Enter a valid phone number",
              },
            }}
          />
        </View>
        <View className="py-3">
          <Button
            state="primary"
            title="Save"
            onPress={() => router.push("/(seller)/(home)/home")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

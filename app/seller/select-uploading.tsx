import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import ProductUploadComponent from "@/components/single-product-uploading-component";
import BulkUploadComponent from "@/components/bulk-product-uploading-component";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const SelectUploading = () => {
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      <Wrapper showBackButton={true}>
        <View className="px-3 py-8">
          {/* Tabs */}
          <View className="flex-1 bg-[#FDFDFD] items-center">
            <Text className="text-xl font-bold">
              Would you like to upload ?
            </Text>
            <View className="px-4 flex flex-row justify-center items-center mt-10">
              <Pressable
                onPress={() => router.push("/seller/post-uploading")}
                className="bg-[#008080] px-6 py-3 rounded-md flex-1 flex-row justify-center items-center mr-2"
              >
                <Text className="text-white text-center font-semibold">
                  Posts
                </Text>
              </Pressable>
              <Pressable
                onPress={() => router.push("/seller/new-product-uploading")}
                className="bg-[#E26D08] px-6 py-3 rounded-md flex-1 flex-row justify-center items-center mr-2"
              >
                <Text className="text-white text-center font-semibold">
                  Products
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default SelectUploading;

import OrderSummary from "@/components/compeleted-order-component";
import CompletedOrder from "@/components/compeleted-order-component";
import OrderReceipt from "@/components/compeleted-order-component";
import OrderComponent from "@/components/order-component";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import EarningComponent from "@/components/earning-component";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function BuyerOrders() {
  const router = useRouter();
 
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showPeriodButton= showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4  flex-row justify-between items-center">
          <View className="mt-4 relative  w-[40%]">
            <Text className="text-xl  font-bold">Transactions History</Text>
            <View className="border-b-2 mt-2 w-[50%]"></View>
          </View>
          <View className="mt-4 relative w-[50%]">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search"
              placeholderTextColor="#8391A1"
            />
            <View className="absolute left-4 top-4">
              <Ionicons name="search" size={18} color="#8391A1" />
            </View>
          </View>
        </View>

        
        <View className="p-4">
        <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/order-completed-detail")}
              />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

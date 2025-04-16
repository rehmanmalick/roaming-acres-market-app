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
  const [activeTab, setActiveTab] = useState("Inventory");
  const sampleOrder = {
    id: "12345",
    status: "Delivered",
    date: "2025-04-15",
    amount: 49.99,

    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  };
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4  flex-row justify-between items-center">
          <View className="mt-4 relative w-full">
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

        <View className="flex-row justify-center items-center gap-2 space-x-4">
          {["Inventory", "Add Inv"].map((status, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveTab(status)}
              className="items-center"
            >
              <View
                className={`flex-row items-center justify-center rounded-md px-10 py-4 ${
                  activeTab === status
                    ? "bg-[#008080] border-2 border-[#008080]"
                    : "border-2 border-[#008080]"
                }`}
              >
                <Text
                  className={`font-bold text-xl ${
                    activeTab === status ? "text-white" : "text-[#008080]"
                  }`}
                >
                  {status}
                </Text>
                <Ionicons
                  name="add-circle-outline"
                  size={24}
                  color={activeTab === status ? "white" : "#008080"}
                  style={{ marginLeft: 8 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="p-4">
          {activeTab === "Inventory" && (
            <>
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/order-completed-detail")}
              />
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/order-completed-detail")}
              />
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/order-completed-detail")}
              />
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/order-completed-detail")}
              />
            </>
          )}

          {activeTab === "Add Inv" && (
            <>
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/all-transactions")}
              />
              <EarningComponent
                orderId="12345"
                amount={250}
                timeRequired="12 Apr 2025"
                onPress={() => router.push("/seller/all-transactions")}
              />
            </>
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

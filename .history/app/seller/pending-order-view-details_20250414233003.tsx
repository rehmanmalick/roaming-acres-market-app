import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
}

const testOrders: Order[] = [
  // Standard pending order
  {
    id: 1234,
    name: "Standard Order",
    subText: "Regular delivery",
    price: 4500,
    buttonText: "TRACK ORDER",
    onPress: () => console.log("Standard order pressed"),
  },
  // Large amount order
  {
    id: 5678,
    name: "Large Order",
    subText: "Bulk purchase",
    price: 125000,
    buttonText: "TRACK ORDER",
    onPress: () => console.log("Large order pressed"),
  },
  // Quick delivery order
  {
    id: 9012,
    name: "Express Order",
    subText: "Priority shipping",
    price: 1200,
    buttonText: "TRACK ORDER",
    onPress: () => console.log("Quick order pressed"),
  },
  // Minimum values
  {
    id: 1,
    name: "Small Order",
    subText: "Sample product",
    price: 1,
    buttonText: "TRACK ORDER",
    onPress: () => console.log("Minimum order pressed"),
  },
  // Long order ID
  {
    id: 202311280001,
    name: "Special Order",
    subText: "Custom request",
    price: 7890,
    buttonText: "TRACK ORDER",
    onPress: () => console.log("Long ID order pressed"),
  },
];

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />

        {/* Search Bar */}
        <View className="p-4" style={{ width: "100%" }}>
          <View className="mt-4 relative">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search"
              placeholderTextColor="#8391A1"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <View className="absolute left-4 top-4">
              <Ionicons name="search" size={18} color="#8391A1" />
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-3 items-center">
          {(["Active", "Completed", "Cancelled"] as OrderStatus[]).map(
            (status) => (
              <TouchableOpacity
                key={status}
                onPress={() => setActiveTab(status)}
                className="flex-1 items-center"
              >
                <View className="flex items-center">
                  <Text
                    className={`font-bold text-xl ${
                      activeTab === status
                        ? "text-teal-600 border-b-2 border-teal-600 p-1"
                        : "text-black"
                    }`}
                  >
                    {status}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Orders List - Using Test Data */}
        <View className="p-3 space-y-4">
          {testOrders.map((order) => (
            <PendingOrder
              key={order.id}
              orderId={order.id.toString().padStart(4, "0")}
              amount={order.price}
              timeRequired={
                activeTab === "Active"
                  ? "In Progress"
                  : activeTab === "Completed"
                  ? "Delivered"
                  : "Cancelled"
              }
              orderTitle={order.name}
              orderDescription={order.subText}
              buttonText={order.buttonText}
              onPress={order.onPress}
              testID={`pending-order-${order.id}`}
              accessibilityLabel={`${order.name} pending order`}
            />
          ))}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

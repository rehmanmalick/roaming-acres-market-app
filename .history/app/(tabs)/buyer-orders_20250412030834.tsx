import OrderComponent from "@/components/order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
}

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");

  // Sample data for each tab
  const ordersData: Record<OrderStatus, Order[]> = {
    Active: Array(5)
      .fill({
        name: "Poultry Name",
        subText: "Corp Prodution",
        price: 200,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/active-order"),
      })
      .map((item, index) => ({ ...item, id: index + 1 })),
    Completed: Array(5)
      .fill({
        name: "Completed Poultry",
        subText: "Delivered on 12 May",
        price: 200,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews"),
      })
      .map((item, index) => ({ ...item, id: index + 1 })),
    Cancelled: Array(2)
      .fill({
        name: "Cancelled Order",
        subText: "Refund processed",
        price: 200,
        buttonText: "ORDER AGAIN",
        onPress: () => console.log("Order again"),
      })
      .map((item, index) => ({ ...item, id: index + 1 })),
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4" style={{ width: "100%" }}>
          <View className="mt-4 relative">
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

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-3 items-center">
          {(["Active", "Completed", "Cancelled"] as OrderStatus[]).map(
            (status, index) => (
              <TouchableOpacity
                key={index}
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

        {/* Orders List */}
        <View className="p-3">
          {ordersData[activeTab].map((order) => (
            <OrderComponent
              key={order.id}
              source={require("../../assets/images/chicken.jpg")}
              name={order.name}
              subText={order.subText}
              price={order.price}
              buttonText={order.buttonText}
              onPress={order.onPress}
            />
          ))}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

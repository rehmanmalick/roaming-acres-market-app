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
  ImageSourcePropType,
} from "react-native";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
  source: ImageSourcePropType;
}

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");

  const ordersData: Record<OrderStatus, Order[]> = {
    Active: [
      {
        id: 1,
        name: "Golden Hatchery",
        subText: "Broiler delivery",
        price: 300,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken1.jpg"),
        onPress: () => router.push("/active-order/1"),
      },
      {
        id: 2,
        name: "Farm Fresh Eggs",
        subText: "Daily egg order",
        price: 120,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken2.jpg"),
        onPress: () => router.push("/active-order/2"),
      },
      {
        id: 3,
        name: "Organic Chicks",
        subText: "20 chicks - organic",
        price: 500,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken3.jpg"),
        onPress: () => router.push("/active-order/3"),
      },
      {
        id: 4,
        name: "Sunrise Poultry",
        subText: "Layer birds batch",
        price: 750,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken4.jpg"),
        onPress: () => router.push("/active-order/4"),
      },
      {
        id: 5,
        name: "Clean Farm",
        subText: "Egg + bird combo",
        price: 920,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken5.jpg"),
        onPress: () => router.push("/active-order/5"),
      },
    ],
    Completed: [
      {
        id: 6,
        name: "Broiler Delivery",
        subText: "Delivered on 1 April",
        price: 320,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete1.jpg"),
        onPress: () => router.push("/reviews/6"),
      },
      {
        id: 7,
        name: "Layer Eggs",
        subText: "Delivered on 29 March",
        price: 280,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete2.jpg"),
        onPress: () => router.push("/reviews/7"),
      },
      {
        id: 8,
        name: "Premium Farm Order",
        subText: "Delivered on 25 March",
        price: 670,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete3.jpg"),
        onPress: () => router.push("/reviews/8"),
      },
      {
        id: 9,
        name: "Hatchery Pack",
        subText: "Delivered on 20 March",
        price: 480,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete4.jpg"),
        onPress: () => router.push("/reviews/9"),
      },
      {
        id: 10,
        name: "Combo Order",
        subText: "Delivered on 10 March",
        price: 850,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete5.jpg"),
        onPress: () => router.push("/reviews/10"),
      },
    ],
    Cancelled: [
      {
        id: 11,
        name: "Late Payment",
        subText: "Auto cancelled",
        price: 260,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel1.jpg"),
        onPress: () => console.log("Reorder 11"),
      },
      {
        id: 12,
        name: "Invalid Address",
        subText: "Cancelled by system",
        price: 330,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel2.jpg"),
        onPress: () => console.log("Reorder 12"),
      },
      {
        id: 13,
        name: "User Cancelled",
        subText: "Refund complete",
        price: 190,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel3.jpg"),
        onPress: () => console.log("Reorder 13"),
      },
      {
        id: 14,
        name: "Missed Deadline",
        subText: "Cancelled",
        price: 410,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel4.jpg"),
        onPress: () => console.log("Reorder 14"),
      },
      {
        id: 15,
        name: "Wrong Product",
        subText: "Cancelled - wrong item",
        price: 340,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel5.jpg"),
        onPress: () => console.log("Reorder 15"),
      },
      {
        id: 16,
        name: "Duplicate Order",
        subText: "Cancelled by admin",
        price: 215,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel6.jpg"),
        onPress: () => console.log("Reorder 16"),
      },
    ],
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
                <Text
                  className={`font-bold text-xl ${
                    activeTab === status
                      ? "text-teal-600 border-b-2 border-teal-600 p-1"
                      : "text-black"
                  }`}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Orders List */}
        <View className="p-3">
          {ordersData[activeTab].map((order) => (
            <OrderComponent
              key={order.id}
              source={order.source}
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

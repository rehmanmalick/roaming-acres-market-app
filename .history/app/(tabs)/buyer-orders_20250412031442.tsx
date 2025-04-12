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
  RefreshControl,
} from "react-native";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
  image?: any;
  status?: string;
  statusColor?: string;
  date?: string;
  quantity?: number;
}

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // Sample data for each tab with different details
  const ordersData: Record<OrderStatus, Order[]> = {
    Active: [
      {
        id: 1,
        name: "Fresh Chicken Pack",
        subText: "Processing - ETA 2 days",
        price: 350,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/active-order/1"),
        image: require("../../assets/images/chicken.jpg"),
        status: "Processing",
        statusColor: "#3b82f6",
        date: "15 May 2023",
        quantity: 2,
      },
      {
        id: 2,
        name: "Organic Eggs (30 pieces)",
        subText: "Shipped - Arriving tomorrow",
        price: 120,
        buttonText: "VIEW SHIPPING",
        onPress: () => router.push("/active-order/2"),
        image: require("../../assets/images/eggs.jpg"),
        status: "Shipped",
        statusColor: "#f59e0b",
        date: "14 May 2023",
        quantity: 1,
      },
      {
        id: 3,
        name: "Turkey Special",
        subText: "Preparing your order",
        price: 420,
        buttonText: "TRACK ORDER",
        onPress: () => router.push("/active-order/3"),
        image: require("../../assets/images/turkey.jpg"),
        status: "Preparing",
        statusColor: "#10b981",
        date: "16 May 2023",
        quantity: 1,
      },
    ],
    Completed: [
      {
        id: 1,
        name: "Whole Duck",
        subText: "Delivered on 12 May",
        price: 380,
        buttonText: "LEAVE REVIEW",
        onPress: () => router.push("/reviews/1"),
        image: require("../../assets/images/duck.jpg"),
        status: "Delivered",
        statusColor: "#10b981",
        date: "12 May 2023",
        quantity: 1,
      },
      {
        id: 2,
        name: "Chicken Wings (5kg)",
        subText: "Delivered on 10 May",
        price: 275,
        buttonText: "REORDER",
        onPress: () => console.log("Reorder item 2"),
        image: require("../../assets/images/wings.jpg"),
        status: "Delivered",
        statusColor: "#10b981",
        date: "10 May 2023",
        quantity: 1,
      },
    ],
    Cancelled: [
      {
        id: 1,
        name: "Special Chicken Pack",
        subText: "Cancelled - Refund issued",
        price: 275,
        buttonText: "ORDER AGAIN",
        onPress: () => console.log("Reorder item 1"),
        image: require("../../assets/images/chicken-pack.jpg"),
        status: "Cancelled",
        statusColor: "#ef4444",
        date: "8 May 2023",
        quantity: 1,
      },
      {
        id: 2,
        name: "Quail Eggs (50 pieces)",
        subText: "Cancelled by seller",
        price: 180,
        buttonText: "CONTACT SUPPORT",
        onPress: () => router.push("/support"),
        image: require("../../assets/images/quail-eggs.jpg"),
        status: "Cancelled",
        statusColor: "#ef4444",
        date: "5 May 2023",
        quantity: 2,
      },
      {
        id: 3,
        name: "Premium Beef Pack",
        subText: "Cancelled - Out of stock",
        price: 450,
        buttonText: "NOTIFY ME",
        onPress: () => console.log("Notify when available"),
        image: require("../../assets/images/beef.jpg"),
        status: "Cancelled",
        statusColor: "#ef4444",
        date: "3 May 2023",
        quantity: 1,
      },
    ],
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate network request
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  // Filter orders based on search query
  const filteredOrders = ordersData[activeTab].filter(
    (order) =>
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.subText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />

        {/* Search Bar */}
        <View className="p-4">
          <View className="mt-4 relative">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search your orders..."
              placeholderTextColor="#8391A1"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons
              name="search"
              size={18}
              color="#8391A1"
              style={{ position: "absolute", left: 16, top: 16 }}
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-3 items-center border-b border-gray-200">
          {(["Active", "Completed", "Cancelled"] as OrderStatus[]).map(
            (status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                className="flex-1 items-center"
              >
                <View className="flex items-center">
                  <Text
                    className={`font-bold text-lg ${
                      activeTab === status
                        ? "text-teal-600 border-b-2 border-teal-600 pb-2"
                        : "text-gray-500"
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
          {filteredOrders.length === 0 ? (
            <View className="py-10 items-center justify-center">
              <Ionicons name="receipt-outline" size={48} color="#9CA3AF" />
              <Text className="text-gray-500 mt-4 text-lg">
                No {activeTab.toLowerCase()} orders found
              </Text>
              {activeTab === "Cancelled" ? (
                <TouchableOpacity
                  className="mt-4 bg-teal-600 px-6 py-3 rounded-lg"
                  onPress={() => router.push("/shop")}
                >
                  <Text className="text-white font-medium">
                    Browse Products
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="mt-4 bg-teal-600 px-6 py-3 rounded-lg"
                  onPress={() => router.push("/orders-history")}
                >
                  <Text className="text-white font-medium">
                    View All Orders
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            filteredOrders.map((order) => (
              <OrderComponent
                key={order.id}
                source={order.image}
                name={order.name}
                subText={order.subText}
                price={order.price}
                buttonText={order.buttonText}
                onPress={order.onPress}
                status={order.status}
                statusColor={order.statusColor}
                date={order.date}
                quantity={order.quantity}
              />
            ))
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

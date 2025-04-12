import OrderComponent from "@/components/order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("Active");

  // Sample data for different order statuses
  const ordersData = {
    Active: [
      { id: 1, name: "Active Order 1", subText: "In Progress", price: 150 },
      { id: 2, name: "Active Order 2", subText: "Shipping Soon", price: 200 },
    ],
    Completed: [
      { id: 3, name: "Completed Order 1", subText: "Delivered", price: 180 },
      { id: 4, name: "Completed Order 2", subText: "Delivered", price: 220 },
    ],
    Cancelled: [
      { id: 5, name: "Cancelled Order 1", subText: "Refunded", price: 100 },
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
        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {["Active", "Completed", "Cancelled"].map((status, index) => (
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
          ))}
        </View>

        {/* Content based on active tab */}
        <View className="p-4">
          {ordersData[activeTab].map((order) => (
            <OrderComponent
              key={order.id}
              source={require("../../assets/images/chicken.jpg")}
              name={order.name}
              subText={order.subText}
              price={order.price}
              buttonText={activeTab === "Completed" ? "LEAVE REVIEW" : "VIEW DETAILS"}
              onPress={() => {
                if (activeTab === "Completed") {
                  router.push("/reviews");
                } else {
                  // Handle other tab actions
                }
              }}
            />
          ))}
          
          {/* Show message if no orders */}
          {ordersData[activeTab].length === 0 && (
            <View className="flex items-center justify-center py-10">
              <Text className="text-gray-500">No {activeTab.toLowerCase()} orders found</Text>
            </View>
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}
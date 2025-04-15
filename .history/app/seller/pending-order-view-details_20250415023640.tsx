import OrderSummary from "@/components/compeleted-order-component";
import CompletedOrder from "@/components/compeleted-order-component";
import OrderReceipt from "@/components/compeleted-order-component";
import OrderComponent from "@/components/order-component";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
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
  const [activeTab, setActiveTab] = useState("Pending");
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
        <View className="p-4" style={{ width: "100%" }}></View>

        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {["Pending", "Completed", "Cancelled"].map((status, index) => (
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

        <View className="p-4">
          {activeTab === "Pending" && (
            <>
              <PendingOrder
                orderId="1234"
                amount={4500}
                timeRequired="15mins"
                onPress={() => console.log("Standard order pressed")}
                testID="pending-order-standard"
                accessibilityLabel="Standard pending order"
              />
              <PendingOrder
                orderId="5678"
                amount={125000}
                timeRequired="45mins"
                onPress={() => console.log("Large order pressed")}
                testID="pending-order-large"
                accessibilityLabel="Large amount pending order"
              />
              <PendingOrder
                orderId="9012"
                amount={1200}
                timeRequired="5mins"
                onPress={() => console.log("Quick order pressed")}
                testID="pending-order-quick"
                accessibilityLabel="Quick delivery pending order"
              />
              <PendingOrder
                orderId="0001"
                amount={1}
                timeRequired="1min"
                onPress={() => console.log("Minimum order pressed")}
                testID="pending-order-min"
                accessibilityLabel="Minimum values pending order"
              />
              <PendingOrder
                orderId="ORD-2023-11-28-0001"
                amount={7890}
                timeRequired="30mins"
                onPress={() => console.log("Long ID order pressed")}
                testID="pending-order-long-id"
                accessibilityLabel="Long order ID pending order"
              />
            </>
          )}

          {activeTab === "Completed" && (
            <>
              <CompletedOrder
                order={{
                  id: "9865",
                  status: "Pending",
                  date: "14 Apr 2025",
                  amount: 59.99,
                  addressLine1: "A-10, Clifton Block 5",
                  addressLine2: "Karachi, Pakistan",
                  deliveryStatus: "In Progress",
                }}
                productDetails="2x Mosquito Killer Spray, 1x Cockroach Gel Tube"
              />
            </>
          )}

          {activeTab === "Cancelled" && (
            <>
              <PendingOrder
                orderId="1234"
                amount={5000}
                timeRequired="30mins"
                status="Cancelled"
                dispatchText="Dispatch your order"
                locationIcon={true}
                onPress={() => console.log("Order pressed")}
              />
            </>
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

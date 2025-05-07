import OrderSummary from "@/components/compeleted-order-component";
import CompletedOrder from "@/components/compeleted-order-component";
import OrderReceipt from "@/components/compeleted-order-component";
import OrderComponent from "@/components/order-component";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/common/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
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
      <Wrapper
        showBackButton={true}
        showProfileHeader={true}
        profileHeaderRoute="/(seller)/profile-seller"
      >
        <View className="mt-5 py-2 flex-1 flex-row justify-between  items-center">
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

        <View className="py-4">
          {activeTab === "Pending" && (
            <>
              <PendingOrder
                orderId="1234"
                amount={4500}
                timeRequired="15mins"
                onPress={() =>
                  router.push("/seller/order-received-notification")
                }
                testID="pending-order-standard"
                accessibilityLabel="Standard pending order"
              />
              <PendingOrder
                orderId="5678"
                amount={125000}
                timeRequired="45mins"
                onPress={() =>
                  router.push("/seller/order-received-notification")
                }
                testID="pending-order-large"
                accessibilityLabel="Large amount pending order"
              />
              <PendingOrder
                orderId="9012"
                amount={1200}
                timeRequired="5mins"
                onPress={() =>
                  router.push("/seller/order-received-notification")
                }
                testID="pending-order-quick"
                accessibilityLabel="Quick delivery pending order"
              />
              <PendingOrder
                orderId="0001"
                amount={1}
                timeRequired="1min"
                onPress={() =>
                  router.push("/seller/order-received-notification")
                }
                testID="pending-order-min"
                accessibilityLabel="Minimum values pending order"
              />
              <PendingOrder
                orderId="ORD-2023-11-28-0001"
                amount={7890}
                timeRequired="30mins"
                onPress={() =>
                  router.push("/seller/order-received-notification")
                }
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
                  status: "Completed",
                  date: "14 Apr 2025",
                  amount: 59.99,
                  addressLine1: "-ABC 00000",

                  deliveryStatus: "Delivered",
                }}
                productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              />
              <CompletedOrder
                order={{
                  id: "9865",
                  status: "Completed",
                  date: "14 Apr 2025",
                  amount: 59.99,
                  addressLine1: "-ABC 00000",

                  deliveryStatus: "Delivered",
                }}
                productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              />
              <CompletedOrder
                order={{
                  id: "9865",
                  status: "Completed",
                  date: "14 Apr 2025",
                  amount: 59.99,
                  addressLine1: "-ABC 00000",

                  deliveryStatus: "Delivered",
                }}
                productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              />
              <CompletedOrder
                order={{
                  id: "9865",
                  status: "Completed",
                  date: "14 Apr 2025",
                  amount: 59.99,
                  addressLine1: "-ABC 00000",

                  deliveryStatus: "Delivered",
                }}
                productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
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

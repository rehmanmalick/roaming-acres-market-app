import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/common/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
import Button from "@/components/button";

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Earnings");

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper
        showBackButton={true}
        showProfileHeader={true}
        account="Seller"
        profileHeaderRoute="/seller/profile-seller"
      >
        <View className=" flex-1 flex-col  ">
          <View className=" ">
            {/* <ProfileHeader account="Seller" route="/seller/profile-seller" /> */}
            <View className=" py-4 flex-row justify-between items-center">
              <View className=" relative  w-[40%]">
                <Text className="text-xl  font-bold">All Earnings</Text>
                <View className="border-b-2 mt-2 w-[50%]"></View>
              </View>
              <View className=" relative w-[50%]">
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

            <View className="bg-white py-2 flex-row justify-between  gap-4 items-center">
              {["Earnings", "Transaction"].map((status, index) => (
                <TouchableOpacity
                  className="flex-1"
                  key={index}
                  onPress={() => setActiveTab(status)}
                >
                  <Button
                    title={status}
                    onPress={() => setActiveTab(status)} // Pass the onPress handler
                    state={activeTab === status ? "primary" : "secondary"} // Set the state based on active tab
                    showIcon={false} // If you want to hide the icon in tabs
                  />
                </TouchableOpacity>
              ))}
            </View>

            <View className="py-4">
              {activeTab === "Earnings" && (
                <>
                  <EarningComponent
                    orderId="12345"
                    amount={250}
                    timeRequired="12 Apr 2025"
                    onPress={() =>
                      router.push("/seller/order-completed-detail")
                    }
                  />
                  <EarningComponent
                    orderId="12345"
                    amount={250}
                    timeRequired="12 Apr 2025"
                    onPress={() =>
                      router.push("/seller/order-completed-detail")
                    }
                  />
                  <EarningComponent
                    orderId="12345"
                    amount={250}
                    timeRequired="12 Apr 2025"
                    onPress={() =>
                      router.push("/seller/order-completed-detail")
                    }
                  />
                  <EarningComponent
                    orderId="12345"
                    amount={250}
                    timeRequired="12 Apr 2025"
                    onPress={() =>
                      router.push("/seller/order-completed-detail")
                    }
                  />
                </>
              )}

              {activeTab === "Transaction" && (
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
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

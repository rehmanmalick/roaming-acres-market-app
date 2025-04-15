import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";
import OrderCard from "@/components/order-card";

export default function SellerAccount() {
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <ProfileHeader route="/(tabs)/seller/seller-account" />
        <View className="flex pt-9 flex-row">
          <Button state="primary" title="Orders" />
          <Button state="secondary" title="Inventory" />
        </View>
        <View className="flex p-4 mx-3 mt-6 rounded-xl  bg-[#008080]">
          <View className="flex flex-row justify-between">
            <Text className="text-white">Feed Order Value</Text>
            <Text className="text-[#F8E473]">-10,56,180</Text>
          </View>
          <View className="flex flex-row mt-6 justify-between">
            <Text className="text-white">Order Bags Quantity</Text>
            <Text className="text-[#F8E473]">0</Text>
          </View>
          <View className="flex  mt-6 items-center">
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="flex flex-row justify-center items-center"
            >
              <Text className="text-[#F8E473] text-sm font-bold">
                View Details
              </Text>
              <Ionicons name="chevron-forward" size={16} color="#F8E473" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-8 px-3">
          <View className="flex-row justify-between items-center pb-3">
            <Text className="text-xl font-bold">All Orders</Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/top-sellers")}
              className="bg-white py-1 "
            >
              <Text className="text-primary text-[#8B8B8B]">VIEW ALL</Text>
            </TouchableOpacity>
          </View>

          <View className=" justify-center item-center space-x-4">
            <OrderCard status={"Pending"} />
            <OrderCard status={"Completed"} />
            <OrderCard status={"Cancelled"} />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

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
        <View className="flex pt-9 mx-3 roung  bg-[#008080]">
          <View>
            <Text>Feed Order Value</Text>
          </View>
        </View>
        <OrderCard status={"Pending"} />
        <OrderCard status={"Completed"} />
        <OrderCard status={"Cancelled"} />
      </Wrapper>
    </ScrollView>
  );
}

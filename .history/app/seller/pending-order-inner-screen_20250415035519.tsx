import PendingOrderInnerComponent from "@/components/pending-order-inner-component";
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import React from "react";
import { ScrollView, View } from "react-native";

export default function BuyerOrders() {
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} >
        <ProfileHeader />

        <View className="p-4">
          {/* Directly render PendingOrderInnerComponent */}
          <PendingOrderInnerComponent
            order={{
              id: "9865",
              status: "Completed",
              date: "14 Apr 2025",
              amount: 59.99,
              addressLine1: "-ABC 00000",
              deliveryStatus: "Delivered",
            }}
            productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          {/* You can add as many PendingOrderInnerComponent as you want here */}
          <PendingOrderInnerComponent
            order={{
              id: "9865",
              status: "Completed",
              date: "14 Apr 2025",
              amount: 59.99,
              addressLine1: "-ABC 00000",
              deliveryStatus: "Delivered",
            }}
            productDetails="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

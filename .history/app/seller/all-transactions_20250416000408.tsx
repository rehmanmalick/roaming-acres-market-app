import OrderSummary from "@/components/compeleted-order-component";
import CompletedOrder from "@/components/compeleted-order-component";
import OrderReceipt from "@/components/compeleted-order-component";
import OrderComponent from "@/components/order-component";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import TransactionComponent from "@/components/transaction-component";
import Wrapper from "@/components/wrapper";
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

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showPeriodButton={true} showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4  flex-row justify-between gap-3 items-center">
          <View className="mt-4 relative  w-[50%]">
            <Text className="text-xl  font-bold">Transactions History</Text>
            <View className="border-b-2 mt-2 w-[50%]"></View>
          </View>
          <View className="mt-4 relative w-[40%]">
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

        <View className="p-4">
          <TransactionComponent
            text="Transfer to card"
            transactionId="698094554317"
            price={100}
            status="pending"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Cash-in"
            subText="From ABC Bank ATM"
            transactionId="698094554317"
            price={100}
            status="confirmed"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Cashback from purchase"
            subText="Purchase from Apps"
            transactionId="698094554317"
            price={3.21}
            status="cancelled"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Transfer to card"
            transactionId="698094554317"
            price={100}
            status="confirmed"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Transfer to card"
            subText="Not enough funds"
            transactionId="698094554317"
            price={100}
            status="pending"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Payment Received"
            subText="From John Doe"
            transactionId="TXN123456789"
            price={150.75}
            status="confirmed"
            time="3:45 PM"
            date="April 15, 2025"
            imageSource={require("../../assets/images/card.png")}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

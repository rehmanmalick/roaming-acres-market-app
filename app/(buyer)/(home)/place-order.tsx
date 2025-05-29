import Button from "@/components/ui/button";
import CartComponent from "@/components/cart-component";
import Wrapper from "@/components/common/wrapper";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function PlaceOrder() {
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never" // Android
      contentInsetAdjustmentBehavior="never" // iOS
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="items-center justify-center">
          <Text className="font-bold text-3xl">Cart</Text>
        </View>
        <CartComponent basePrice={2060} />
        <CartComponent basePrice={2060} />

        <View className=" mx-9 pb-6">
          <Text className="font-bold text-2xl my-4 ">Invoice Details</Text>
        </View>
        <View className="flex flex-row justify-between mx-9 pb-2">
          <Text className="font-semibold text-xl my-4">Subtotal</Text>
          <View className="flex flex-row ">
            <Text className="text-xl mx-2 my-4 ">USD</Text>
            <Text className="font-semibold text-xl my-4">2209</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between mx-9 pb-2">
          <Text className="font-semibold text-xl my-4">Tax</Text>
          <View className="flex flex-row ">
            <Text className="text-xl mx-2 my-4 ">USD</Text>
            <Text className="font-semibold text-xl my-4">100</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between mx-9 pb-2">
          <Text className="font-semibold text-xl my-4">Platform Fee</Text>
          <View className="flex flex-row ">
            <Text className="text-xl mx-2 my-4 ">USD</Text>
            <Text className="font-semibold text-xl my-4">100</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between mx-9 pb-2">
          <Text className="font-semibold text-xl my-4">Total</Text>
          <View className="flex flex-row ">
            <Text className="text-xl mx-2 my-4 ">USD</Text>
            <Text className="font-semibold text-xl my-4">2490</Text>
          </View>
        </View>
        <View className="mt-9">
          <Button
            state="primary"
            title="CHECK OUT"
            onPress={() => router.push("/(buyer)/(home)/checkout-disable")}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

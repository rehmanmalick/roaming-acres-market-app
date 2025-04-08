import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

export default function CheckoutDisable() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("master_card");
  const [showAddNew, setShowAddNew] = useState(false);

  const paymentMethods = [
    {
      id: "visa",
      name: "VISA",
      icon: require("../../assets/images/visa.png"),
    },
    {
      id: "cash",
      name: "Cash",
      icon: require("../../assets/images/cash.png"),
    },
    {
      id: "mastercard",
      name: "Mastercard",
      icon: require("../../assets/images/mastercard.png"),
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: require("../../assets/images/paypal.png"),
    },
  ];

  return (
    <ScrollView
      className="bg-white flex-1 "
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="items-center justify-center py-4">
          <Text className="font-bold text-3xl">Payment</Text>
        </View>

        <View className="flex-1 p-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="bg-white rounded-lg p-3 mb-6 flex flex-row relative"
          >
            {paymentMethods.map((method) => (
              <View>
                <TouchableOpacity
                  key={method.id}
                  className={`items-center justify-center border-2 p mx-3 rounded-lg  ${
                    selectedMethod === method.id
                      ? " border-[#FF7622] "
                      : " border-[#F0F5FA] bg-[#F0F5FA]"
                  }`}
                  onPress={() => setSelectedMethod(method.id)}
                >
                  <View className="">
                    <Image
                      source={method.icon}
                      className={` w-16 h-10 `}
                      resizeMode="contain"
                    />
                    {selectedMethod === method.id && (
                      <Ionicons
                        name="checkmark-circle"
                        size={23}
                        color="#FF7622"
                        style={{
                          backgroundColor: "white",
                          borderRadius: 20,
                          position: "absolute",
                          top: -24,
                          right: -16,
                          zIndex: 10,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <Text className="text-base mt-2 font-medium text-center">
                  {method.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="flex flex-row justify-between items-center mx-4 mb-4">
          <View>
            <Text className="text-2xl font-bold">Master Card</Text>
            <View className="flex flex-row items-center">
              <View className="flex flex-row justify-between items-center mx-4 my-4">
                <Image
                  source={require("../../assets/images/mastercard2.png")}
                  className="w-16 h-10 mb-2"
                />
                <Text className="text-lg font-semibold ml-3">
                  **** **** **** 436
                </Text>
              </View>
            </View>
          </View>
          <Ionicons name="caret-down-sharp" size={20} color="#000000" />
        </View>
        <TouchableOpacity
          className="rounded-full bg-white border border-teal-600 p-4 items-center justify-center mx-9 mb-4"
          onPress={() => router.push("/add-card")}
        >
          <Text className="text-gray-600 font-bold text-xl">+ ADD NEW</Text>
        </TouchableOpacity>
        <View className="bg-white p-4 rounded-lg mt-9">
          <View className="flex-row items-center mb-7">
            <Text className="text-lg text-gray-500 font-medium">TOTAL:</Text>
            <Text className="text-lg ml-2 text-4xl">$2590</Text>
          </View>
          <Button
            title="PAY & CONFIRM"
            state="primary"
            onPress={() => router.push("/(tabs)/checkout-enable")}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

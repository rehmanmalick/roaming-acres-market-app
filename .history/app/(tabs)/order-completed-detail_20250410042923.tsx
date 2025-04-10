import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <Wrapper showBackButton={true}>
        <View className="flex flew-col flex-1 items-center  gap-5 mt-[-5px]">
          <View className="mb-16">
            <Text className="text-center text-3xl font-semibold mb-8">
              Order Details
            </Text>
            <Text className="text-center text-4xl font-extrabold">
              Order ID: #0000
            </Text>
            <View className="flex-row items-center p-3 text-[12px]">
              <Text>Delivered-on 19 Jan 22:37 - You rated this</Text>
              <Ionicons name="star-outline" size={14} color="#E26D08" />
              <Text>4.7</Text>
            </View>

            {/* From and To */}
            <View className="mt-6 space-y-4">
              <View className="flex-row items-start gap-2">
                {/* <Feather name="map-pin" size={16} color="black" /> */}
                <View>
                  <Text className="text-sm ">Order from</Text>
                  <Text className="text-sm font-semibold text-gray-700">
                    Roaming Acres Market
                  </Text>
                </View>
              </View>

              <View className="flex-row items-start gap-2">
                {/* <MaterialIcons name="location-on" size={18} color="black" /> */}
                <View>
                  <Text className="text-sm ">Delivered to</Text>
                  <Text className="text-sm font-semibold text-gray-700">
                    Home - 123 Main St, Apt 48
                  </Text>
                </View>
              </View>
            </View>
            {/* Product Info */}
            <View className="flex-row item-center justify-between mt-6 pt-4">
              <Text className="text-xl font-semibold">2x Acres Gold</Text>
              <Text className="text-xl font-semibold">$2290</Text>
            </View>

            {/* Invoice Section */}
            <View className="mt-6">
              <Text className="text-xl font-semibold mb-4">
                Invoice Details
              </Text>

              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-bold ">Subtotal</Text>
                 view>
                <Text className="text-sm text-[#9796A1]">USD. </Text>
                <Text className="text-sm "> 2290</Text>
              </View>

              <View className="flex-row justify-between mb-1">
                <Text className="text-sm text-gray-500">Tax</Text>
                <Text className="text-sm text-gray-700">USD. 100</Text>
              </View>

              <View className="flex-row justify-between mb-1">
                <Text className="text-sm text-gray-500">Delivery</Text>
                <Text className="text-sm text-gray-700">USD. 100</Text>
              </View>

              <View className="flex-row justify-between mb-1">
                <Text className="text-sm text-gray-500">Platform Fee</Text>
                <Text className="text-sm text-gray-700">USD. 100</Text>
              </View>

              <View className="border-t border-gray-200 my-2" />

              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-semibold">Total</Text>
                <Text className="text-sm font-semibold">USD. 2590</Text>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </>
  );
}

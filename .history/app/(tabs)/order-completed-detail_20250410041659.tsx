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
        <ScrollView className="flex-1 bg-white p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity>
              <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold">Order Details</Text>
            <View className="w-6" />
          </View>

          {/* Order ID and Rating */}
          <Text className="text-xl font-bold">Order ID: #0000</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Delivered on 19 Jan 22:37 - You rated this{" "}
            <Text className="text-yellow-500">⭐ 4.7</Text>
          </Text>

          {/* From and To */}
          <View className="mt-6 space-y-4">
            <View className="flex-row items-start gap-2">
              {/* <Feather name="map-pin" size={16} color="black" /> */}
              <View>
                <Text className="text-sm font-semibold">Order from</Text>
                <Text className="text-sm text-gray-700">
                  Roaming Acres Market
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-2">
              <MaterialIcons name="location-on" size={18} color="black" />
              <View>
                <Text className="text-sm font-semibold">Delivered to</Text>
                <Text className="text-sm text-gray-700">
                  Home - 123 Main St, Apt 48
                </Text>
              </View>
            </View>
          </View>

          {/* Product Info */}
          <View className="mt-6 border-t border-gray-200 pt-4">
            <Text className="text-base font-semibold">2x Acres Gold</Text>
            <Text className="text-xl font-bold mt-1">$2290</Text>
          </View>

          {/* Invoice Section */}
          <View className="mt-6">
            <Text className="text-base font-semibold mb-2">
              Invoice Details
            </Text>

            <View className="flex-row justify-between mb-1">
              <Text className="text-sm text-gray-500">Subtotal</Text>
              <Text className="text-sm text-gray-700">USD. 2290</Text>
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

          {/* Payment Info */}
          <View className="mt-6">
            <Text className="text-base font-semibold mb-2">Paid with</Text>
            <Text className="text-sm">💵 Cash on Delivery</Text>
          </View>

          {/* Download Invoice Button */}
          <TouchableOpacity className="mt-6 bg-black py-3 rounded-lg flex-row items-center justify-center">
            <Feather name="download" size={20} color="white" />
            <Text className="text-white ml-2 font-medium">
              Download Invoice
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Wrapper>
    </>
  );
}

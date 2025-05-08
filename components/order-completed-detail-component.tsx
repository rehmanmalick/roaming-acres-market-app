import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function OrderCompletedDetailComponent() {
  return (
    <>
      <ScrollView
        className="bg-white"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
      >
        <Wrapper showBackButton={true}>
          <View className="flex flew-col flex-1 items-center  gap-5 mt-[5px]">
            <View className="mb-16">
              <Text className="text-center text-3xl font-semibold mb-8">
                Order Details
              </Text>
              <Text className="text-center text-4xl font-extrabold">
                Order ID: #0000
              </Text>
              <View className="flex-row items-center p-3 text-[12px]">
                <Text>Delivered-on 19 Jan 22:37 - You rated this</Text>
                <Ionicons
                  name="star-outline"
                  size={14}
                  color="#E26D08"
                  className="px-2"
                />
                <Text>4.7</Text>
              </View>

              {/* From and To */}
              <View className="mt-6 space-y-4 ">
                <View className="flex-row items-start gap-2 py-3">
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={24}
                    color="black"
                  />
                  <View className="">
                    <Text className="text-sm ">Order from</Text>
                    <Text className="text-sm font-semibold text-gray-700">
                      Roaming Acres Market
                    </Text>
                  </View>
                </View>
                {/* Dotted line */}
                <View className="absolute left-3 top-10 h-6 border-l border border-dashed" />
                <View className="flex-row items-start gap-2">
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={24}
                    color="black"
                  />
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

                <View className="flex-row justify-between border-b border-[#F1F2F3] mb-1 py-3">
                  <Text className="text-base font-semibold ">Subtotal</Text>
                  <View className="flex-row  justify-between ">
                    <Text className="text-base text-[#9796A1] ">USD. </Text>
                    <Text className="text-base "> 2290</Text>
                  </View>
                </View>

                <View className="flex-row justify-between border-b border-[#F1F2F3] mb-1 py-3">
                  <Text className="text-base font-semibold ">Tax</Text>
                  <View className="flex-row  justify-between space-x-2">
                    <Text className="text-base text-[#9796A1]">USD. </Text>
                    <Text className="text-base "> 100</Text>
                  </View>
                </View>

                <View className="flex-row justify-between border-b border-[#F1F2F3] mb-1 py-3">
                  <Text className="text-base font-semibold ">Delivery</Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-base text-[#9796A1] ">USD. </Text>
                    <Text className="text-base "> 100</Text>
                  </View>
                </View>

                <View className="flex-row justify-between border-b border-[#F1F2F3] mb-1 py-3">
                  <Text className="text-base font-semibold ">Platform Fee</Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-base text-[#9796A1] ">USD. </Text>
                    <Text className="text-base "> 100</Text>
                  </View>
                </View>
                <View className="flex-row justify-between border-b border-[#F1F2F3] mb-1 py-3">
                  <Text className="text-base font-semibold ">Total</Text>
                  <View className="flex-row justify-between">
                    <Text className="text-base text-[#9796A1] ">USD. </Text>
                    <Text className="text-base "> 2590</Text>
                  </View>
                </View>

                {/* Payment Info */}
                <View className="mt-6">
                  <Text className="text-xl font-semibold mb-2">Paid with</Text>

                  <View className="flex-row items-center gap-4 py-2">
                    <FontAwesome name="file-pdf-o" size={18} color="black" />
                    <Text className="text-sm"> Download Invoice</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

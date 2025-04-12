import NewArrival from "@/components/new-arrival-component";
import ProfileHeader from "@/components/profile-header";
import ShopByCategory from "@/components/shop-by-category";
import ShopCategory from "@/components/shop-categories";
import TabBar from "@/components/tabbar";
import TopSelling from "@/components/top-selling";
import TopSellingProductComponent from "@/components/top-selling-product-component";
import Wrapper from "@/components/wrapper";
import Button from "@/components/button";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";

const SellerHomeScreen = () => {
  const router = useRouter();

  return (
    <>
      <ScrollView
        className="bg-white"
        bounces={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 100 : 80,
        }}
      >
        <Wrapper showFilterButton={true} showMenuButton={true}>
          <ProfileHeader route="/(tabs)/seller/seller-account" />
          <View className="mt-8 px-3">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-2xl font-bold">Welcome</Text>
                <Text className="text-3xl font-bold mt-1">
                  Roaming Acres Market
                </Text>
              </View>
              <View>
                <View>
                <TouchableOpacity
                  onPress={() => router.push("/notification-setting")}
                  className="relative"
                >
                  <Ionicons
                    name="notifications"
                    size={24}
                    color="white"
                    style={{
                      backgroundColor: "#008080",
                      borderRadius: 6,
                      padding: 4,
                    }}
                  />
                  <View
                    className="absolute bg-orange-500 rounded-full"
                    style={{ width: 10, height: 10, top: -2, right: -2 }}
                  />
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="bg-teal-600 px-4 py-7 my-4 rounded-xl">
              <View className="flex flex-row justify-between mb-6 gap-3">
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Completed Orders
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Cancel Orders
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Total Orders
                  </Text>
                </View>
              </View>
              <View className="flex flex-row justify-between gap-3">
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Ship On Time
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Positive Feedback
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-md font-semibold">
                    Chat Response
                  </Text>
                </View>
              </View>
            </View>
            {/* order */}
            <View className="mt-4 px-3">
              <View className="flex-row justify-between items-center pb-3">
                <Text className="text-2xl font-extrabold">Orders</Text>
                <TouchableOpacity className="bg-white py-1 ">
                  <Text className="text-primary text-[#8B8B8B] font-semibold">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row items-center justify-between space-x-4">
              <View className="px-2">
                <View className="bg-teal-600 items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">New</Text>
                </View>
              </View>
              <View className="px-2">
                <View className="bg-orange-500 items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Confirmed</Text>
                </View>
              </View>
              <View className="px-2">
                <View className="bg-yellow-300 items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Delivered</Text>
                </View>
              </View>
              <View className="px-2">
                <View className="bg-black items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Cancelled</Text>
                </View>
              </View>
            </View>

            {/* product */}
            <View className="mt-8 px-3">
              <View className="pb-3">
                <Text className="text-2xl font-extrabold">Products</Text>
                <TouchableOpacity className="bg-white py-2">
                  <Text className="text-primary ">Bulk Upload Template</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row mt-2">
              <Button
                state="secondary"
                title="ADD TO CART"
                showIcon={true}
                iconName={"plus"}
              />
              <Button
                state="secondary"
                title="BULK UPLOAD"
                showIcon={true}
                iconName={"plus"}
              />
            </View>
            <View className="py-4">
              <Button state="secondary" title="ADD TO CART" />
            </View>

            {/* earnings */}
            <View className="mt-4 py-2 px-3 border-b border-[#EBEBEB]">
              <View className="flex-row justify-between items-center pb-3">
                <Text className="text-2xl font-extrabold">Earnings</Text>
                <TouchableOpacity className="bg-white py-1 ">
                  <Text className="text-primary text-[#8B8B8B] font-semibold">
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row px-3 py-2 justify-between mt-2">
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Total Earning
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$200</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Avg. Selling Price
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$87.55</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Pending Clearance
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$350.66</Text>
              </View>
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Earning in January
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$500</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Active Orders
                </Text>
                <Text className="text-teal-600 font-bold text-xl">05</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Cancelled Orders
                </Text>
                <Text className="text-teal-600 font-bold text-xl">02</Text>
              </View>
            </View>
          </View>
        </Wrapper>
      </ScrollView>

      <TabBar />
    </>
  );
};

export default SellerHomeScreen;

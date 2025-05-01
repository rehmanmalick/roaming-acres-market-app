import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/common/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import InventoryComponent from "@/components/seller-inventory-component";
import Button from "@/components/button";

export default function SellerInventory() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Inventory");

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper
        showBackButton={true}
        showProfileHeader={true}
        account="Seller"
        profileHeaderRoute="/seller/profile-seller"
      >
        <View className=" flex-1 flex-col ">
          <View className=" ">
            <View className="py-4  flex-row justify-between items-center">
              <View className=" relative w-full">
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

            <View className="flex  flex-row gap-5">
              <View className="flex-1">
                <Button state="primary" title="Inventory" />
              </View>
              <View className="flex-1">
                <Button
                  state="secondary"
                  title="Add Inv"
                  showIcon={true}
                  iconName={"add-circle-outline"}
                  onPress={() => router.push("/seller/new-product-uploading")}
                />
              </View>
            </View>
            <View className="mt-4  ">
              <View className="flex-row justify-end items-center pb-3">
                <TouchableOpacity
                  className="bg-white  "
                  onPress={() => router.push("/seller/view-product")}
                >
                  <Text className="text-primary text-[#8B8B8B] font-semibold">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="">
              {activeTab === "Inventory" && (
                <>
                  <InventoryComponent
                    productName="Pre Starter"
                    location="Baramati"
                    quantity="50 items"
                    orderNumber={129}
                    bagLocation="Stock Room"
                    price={1600}
                    onDeletePress={() => console.log("Delete")}
                    onDetailsPress={() => console.log("Details")}
                    onEditPress={() => console.log("Edit")}
                  />

                  <InventoryComponent
                    productName="Pre Starter"
                    location="Baramati"
                    quantity="50 items"
                    orderNumber={129}
                    bagLocation="Stock Room"
                    price={1600}
                    onDeletePress={() => console.log("Delete")}
                    onDetailsPress={() => console.log("Details")}
                    onEditPress={() => console.log("Edit")}
                  />

                  <InventoryComponent
                    productName="Pre Starter"
                    location="Baramati"
                    quantity="50 items"
                    orderNumber={129}
                    bagLocation="Stock Room"
                    price={1600}
                    onDeletePress={() => console.log("Delete")}
                    onDetailsPress={() => console.log("Details")}
                    onEditPress={() => console.log("Edit")}
                  />

                  <InventoryComponent
                    productName="Pre Starter"
                    location="Baramati"
                    quantity="50 items"
                    orderNumber={129}
                    bagLocation="Stock Room"
                    price={1600}
                    onDeletePress={() => console.log("Delete")}
                    onDetailsPress={() => console.log("Details")}
                    onEditPress={() => console.log("Edit")}
                  />

                  <InventoryComponent
                    productName="Pre Starter"
                    location="Baramati"
                    quantity="50 items"
                    orderNumber={129}
                    bagLocation="Stock Room"
                    price={1600}
                    onDeletePress={() => console.log("Delete")}
                    onDetailsPress={() => console.log("Details")}
                    onEditPress={() => console.log("Edit")}
                  />
                </>
              )}
            </View>
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

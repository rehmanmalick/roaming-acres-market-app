import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Wrapper from "@/components/common/wrapper";
import ProfileHeader from "@/components/profile-header";
import ProductUploadComponent from "@/components/single-product-uploading-component";
import BulkUploadComponent from "@/components/bulk-product-uploading-component";

// Define the tab names in a constant for better scalability
const TAB_NAMES = ["Add New Product", "Bulk Upload Products"];

const ProductUploadScreen = () => {
  const { tab } = useLocalSearchParams();

  const [activeTab, setActiveTab] = useState("Add New Product");

  useEffect(() => {
    if (tab === "Bulk Upload Products") {
      setActiveTab("Bulk Upload Products");
    } else {
      setActiveTab("Add New Product");
    }
  }, [tab]);
  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 0 : 0,
      }}
    >
      <Wrapper
        showBackButton={true}
        showProfileHeader={true}
        profileHeaderRoute="/(seller)/profile-seller"
      >
        {/* <ProfileHeader route="/seller/profile-seller" /> */}
        <View className="mt-5">
          {/* Tabs */}
          <View className="flex-row justify-between mb-4">
            {TAB_NAMES.map((tabName) => (
              <TouchableOpacity
                key={tabName}
                onPress={() => setActiveTab(tabName)}
                className="flex-1 items-center"
              >
                <Text
                  className={`font-semibold text-lg ${
                    activeTab === tabName
                      ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                      : "text-gray-400"
                  }`}
                >
                  {tabName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "Add New Product" && <ProductUploadComponent />}
          {activeTab === "Bulk Upload Products" && <BulkUploadComponent />}
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default ProductUploadScreen;

import ProductReviewComponent from "@/components/product-reviews-component";
import Wrapper from "@/components/common/wrapper";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function CustomerReviews() {
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
          <Text className="font-bold text-3xl">Write Reviews</Text>
        </View>
        <View className="bg-white py-6 rounded-lg">
          <View style={{ borderColor: "orange" }} className="border mb-6" />
          <View className=" pb-5">
            <ProductReviewComponent
              name="Haylie Aminoff"
              source={require("@/assets/images/product-reviews2.png")}
            />
            <ProductReviewComponent
              name="Carla Septimus"
              source={require("@/assets/images/product-reviews1.png")}
            />
            <ProductReviewComponent
              name="Haylie Aminoff"
              source={require("@/assets/images/product-reviews2.png")}
            />
            <ProductReviewComponent
              name="Carla Septimus"
              source={require("@/assets/images/product-reviews1.png")}
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

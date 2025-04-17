import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";

// Components
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import EarningComponent from "@/components/earning-component";
import ProductCard from "@/components/product-listing";
import Button from "@/components/button";

export default function ViewProduct() {
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />

        <View className="p-4">
          {/* Product listing card */}
          <ProductCard
            productName="Acres Gold"
            brand="Roaming Acres limited"
            price={2060}
            originalPrice={3060}
            rating={4.7}
            onPress={() => router.push("/seller/product-review")}
          />
          <ProductCard
            productName="Acres Gold"
            brand="Roaming Acres limited"
            price={2060}
            originalPrice={3060}
            rating={4.7}
            onPress={() => router.push("/seller/product-review")}
          />
          <ProductCard
            productName="Acres Gold"
            brand="Roaming Acres limited"
            price={2060}
            originalPrice={3060}
            rating={4.7}
            onPress={() => router.push("/seller/product-review")}
          />
          <View className="py-8 ">
            <Button
              state="primary"
              title="BACK TO HOME"
              onPress={() => router.push("/seller/home-screen")}
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

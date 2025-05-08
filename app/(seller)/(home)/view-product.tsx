import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";

// Components
import Wrapper from "@/components/common/wrapper";
import ProductCard from "@/components/product-listing";
import Button from "@/components/ui/button";

export default function ViewProduct() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <ScrollView
        className="bg-white"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}
      >
        <Wrapper
          showBackButton={true}
          showProfileHeader={true}
          profileHeaderRoute="/(seller)/profile-seller"
        >
          <View className="flex-1 py-4">
            {/* Product listing card */}
            <ProductCard
              productName="Acres Gold"
              brand="Roaming Acres limited"
              price={2060}
              originalPrice={3060}
              savings={1000}
              rating={4.7}
              onPress={() => router.push("/(seller)/(home)/product-review")}
            />
            <ProductCard
              productName="Acres Gold"
              brand="Roaming Acres limited"
              price={2060}
              originalPrice={3060}
              savings={1000}
              rating={4.7}
              onPress={() => router.push("/(seller)/(home)/product-review")}
            />
            <ProductCard
              productName="Acres Gold"
              brand="Roaming Acres limited"
              price={2060}
              originalPrice={3060}
              savings={1000}
              rating={4.7}
              onPress={() => router.push("/(seller)/(home)/product-review")}
            />

            <View className="flex-1 justify-end py-4">
              <Button
                state="primary"
                title="BACK TO HOME"
                onPress={() => router.push("/(seller)/(home)/home")}
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </View>
  );
}

import Button from "@/components/button";
import ProductReviewComponent from "@/components/product-reviews-component";
import ProfileHeader from "@/components/profile-header";
import ReviewComponent from "@/components/review-component";
import WishlistComponent from "@/components/wishlist-component";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from "react-native";

export default function ActiveOrder() {
  const router = useRouter();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const maxReasonLength = 220;

  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="items-center justify-center mt-9 pb-4 mx-6 border-b border-[#E26D08]">
            <Text className="font-bold text-3xl ">Reviews</Text>
          </View>

          <View className="mt-4 mx-6 pb-6">
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
          </View>

          <View className="mx-4 pb-6 flex flex-row justify-between">
            <Button
              state="primary"
              title="BACK TO HOME"
              onPress={() => router.push("/seller/home-screen")}
            />
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

import Button from "@/components/button";
import ProductReviewComponent from "@/components/product-reviews-component";
import ProfileHeader from "@/components/profile-header";
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
        <Wrapper showFilterButton={true} showBackButton={true}>
          <ProfileHeader />
          <View className="items-center justify-center mt-9"></View>

          <View className="flex  mt-5 px-4 pb-6">
            <WishlistComponent
              onPress={() => router.push("/(tabs)/inventory-product-details")}
              showButton={false}
              iconName={"plus"}
              buttonText={"ADD TO CART"}
            />
          </View>

          <View className="border-b border-gray-300 mx-4 pb-6">
            <Text className="font-bold text-2xl my-4">Product Overview</Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
          </View>

          <View className="mx-4 pb-6">
            <Text className="font-bold text-2xl my-4">Product Reviews</Text>
            <ProductReviewComponent
              name="Haylie Aminoff"
              source={require("../../assets/images/product-reviews2.png")}
            />
            <ProductReviewComponent
              name="Carla Septimus"
              source={require("../../assets/images/product-reviews1.png")}
            />
          </View>

          <View className="mx-4 pb-6 flex flex-row justify-between">
            <Button
              showIcon={true}
              iconName="plus"
              iconBackground="#ffffff"
              iconColor="#008080"
              state="primary"
              title="RE ORDER"
              onPress={() => router.push("/inventory-product-details")}
            />
          </View>
        </Wrapper>
      </ScrollView>
      <Modal
        visible={showCancelModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCancelModal(false)}
      >
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View className="flex-1 bg-black/50 justify-center p-4">
            <View className="bg-white rounded-lg p-6">
              <View className="flex-row items-center mb-6">
                <TouchableOpacity onPress={() => setShowCancelModal(false)}>
                  <View className="flex flex-row items-center">
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="#363A33"
                    />
                    <Text className="text-lg font-bold text-[#363A33]">
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
                <View className="flex-1 items-center ">
                  <Text className="text-2xl font-bold text-center text-[#008080] mr-8">
                    Cancel Order
                  </Text>
                </View>
              </View>

              <Text className="text-3xl font-bold text-[#363A33] mb-2">
                We are sorry to hear this
              </Text>
              <Text className=" text-gray-600 mb-6">
                Tell us why you choose to cancel your order, is the reason from
                our side?
              </Text>

              <Text className="text-gray-600 mb-2">
                Write down your reason to cancel your order:
              </Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-4 h-32 text-start text-top"
                multiline={true}
                placeholder="Write here..."
                placeholderTextColor="#8391A1"
                value={cancelReason}
                onChangeText={(text) => setCancelReason(text)}
                maxLength={maxReasonLength}
              />
              <Text className="text-right text-gray-500 mt-1">
                {cancelReason.length}/{maxReasonLength}
              </Text>
              <View className="flex flex-row justify-between mt-6">
                <Button
                  title="Submit"
                  state="primary"
                  onPress={() => {
                    router.push("/(tabs)/home-screen");
                    setShowCancelModal(false);
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

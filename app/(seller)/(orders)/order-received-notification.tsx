import PendingOrderInnerComponent from "@/components/pending-order-inner-component";
import Wrapper from "@/components/common/wrapper";
import ProfileHeader from "@/components/profile-header";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import Dropdown from "@/components/dropdown-component";
import Button from "@/components/ui/button";
import { router } from "expo-router";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function BuyerOrders() {
  const router = useRouter();
  const [pickupLocation, setPickupLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const pickupOptions = [
    "Main Street, NY",
    "Downtown Plaza",
    "Central Park Gate",
  ];
  const handleUpload = () => {
    // TODO: Perform actual upload logic here
    setModalVisible(true); // Show the success modal after uploading
  };
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="flex-1 py-4">
            {/* Directly render PendingOrderInnerComponent */}

            <PendingOrderInnerComponent
              order={{
                id: "12345",
                status: "Pending",
                date: "Mar 02 2025",
                amount: 59.99,
                addressLine1: "123 Main St",
                deliveryStatus: "Out for delivery",
              }}
              productDetails="2x Termite Gel, 1x Ant Spray"
              itemCount={3}
              progressSteps={[
                {
                  label: "Payment received",
                  date: "Mar 02 2025",
                  color: "#008080",
                },
                {
                  label: "Order placed",
                  date: "Mar 02 2025",
                  color: "#008080",
                },
                {
                  label: "Order confirmed",
                  date: "Mar 02 2025",
                  color: "#008080",
                },
                {
                  label: "Order shipped",
                  date: "Mar 06 2025",
                  color: "#008080",
                },
                {
                  label: "Out for delivery",
                  date: "pending",
                  color: "#cccccc",
                },
                {
                  label: "Order delivered",
                  date: "pending",
                  color: "#cccccc",
                },
              ]}
            />

            <View className="mt-6">
              <Dropdown
                label="Pickup Location"
                variant="pickup"
                options={pickupOptions}
                selectedValue={pickupLocation}
                onValueChange={(value) => setPickupLocation(value)}
              />
            </View>
            <View className="flex-row items-center bg-white p-3 rounded-2xl relative overflow-visible">
              <View>
                <Image
                  source={require("@/assets/images/Top-selling-2.png")}
                  style={{ height: 60, width: 60 }}
                  className="w-14 h-14 rounded-full mr-3"
                  resizeMode="contain"
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold">Try Temp</Text>
                <Text className="text-sm text-gray-500">Buyer Account</Text>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/seller/chatting")}
                className="p-2"
              >
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={24}
                  color="#26837c"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center mt-16">
            <View className="flex-1">
              <Button
                title="READY TO DELIVER"
                state="primary"
                onPress={handleUpload}
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 50,
              width: "90%",
              alignItems: "center",
            }}
            className="flex flex-col gap-3"
          >
            <Image
              source={require("../../../assets/images/thumb.png")}
              style={{ width: 90, height: 90 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 18,
                marginVertical: 10,
                textAlign: "center",
                color: "#008080",
                fontWeight: "600",
              }}
            >
              You Have Been Place Your Order
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                router.push("/(seller)/(orders)/orders-status");
              }}
              className="flex flex-row items-center gap-2 py-3 px-6 rounded-md"
            >
              <Text className="font-bold text-lg">Continue</Text>
              <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

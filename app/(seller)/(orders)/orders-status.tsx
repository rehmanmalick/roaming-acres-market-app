import PendingOrderInnerComponent from "@/components/pending-order-inner-component";
import Wrapper from "@/components/common/wrapper";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function BuyerOrders() {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [progressSteps, setProgressSteps] = useState([
    { label: "Order placed", date: "Mar 02 2025", color: "#008080" },
    { label: "Order confirmed", date: "Mar 02 2025", color: "#707070" },
  ]);

  const handleUpload = () => {
    const updatedSteps = progressSteps.map((step) =>
      step.label === "Order confirmed" ? { ...step, color: "#008080" } : step
    );
    setProgressSteps(updatedSteps);
    setShowConfirmation(true); // Show inline confirmation
  };

  return (
    <ScrollView
      className="bg-white "
      bounces={false}
      overScrollMode="never" // Android
      contentInsetAdjustmentBehavior="never" // iOS
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="flex-1">
          <View className=" py-4">
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
                { label: "Order delivered", date: "pending", color: "#cccccc" },
              ]}
            />
          </View>

          <View className="mt-6">
            {progressSteps.map((step, index) => (
              <View key={index} className="flex-row items-start relative">
                <View className="w-8 items-center">
                  <FontAwesome name="circle" size={14} color={step.color} />
                  {index < progressSteps.length - 1 && (
                    <View
                      style={{
                        width: 2,
                        flex: 1,
                        backgroundColor: progressSteps[index + 1].color,
                      }}
                    />
                  )}
                </View>
                <View className="flex-1 pb-5">
                  <View className="flex-row justify-between pr-2">
                    <Text className="text-sm text-gray-800">{step.label}</Text>
                    <Text className="text-sm font-semibold text-gray-700">
                      {step.date}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View className="flex-1  justify-center">
            {!showConfirmation ? (
              <View className="flex-1 mt-10">
                <Button
                  title="ORDER DELIVERED"
                  state="primary"
                  onPress={handleUpload}
                />
              </View>
            ) : (
              <View className="flex-1  ">
                <Text className="mt-10 text-4xl text-center font-semibold ">
                  Your order has been delivered.
                </Text>
                <View className="flex-1 justify-end">
                  <Button
                    title="CHAT WITH BUYER"
                    state="secondary"
                    onPress={() => router.push("/(seller)/chatting")}
                  />
                  <View className="my-6">
                    <Button
                      title="BACK TO HOME"
                      state="secondary"
                      onPress={() => router.push("/(seller)/(home)/home")}
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

import PendingOrderInnerComponent from "@/components/pending-order-inner-component";
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import React from "react";
import { ScrollView, View } from "react-native";

export default function BuyerOrders() {
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="p-4">
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
              { label: "Order placed", date: "Mar 02 2025", color: "#008080" },
              {
                label: "Order confirmed",
                date: "Mar 02 2025",
                color: "#008080",
              },
              { label: "Order shipped", date: "Mar 06 2025", color: "#008080" },
              { label: "Out for delivery", date: "pending", color: "#008080" },
              { label: "Order delivered", date: "pending", color: "#008080" },
            ]}
          />

          {/* You can add as many PendingOrderInnerComponent as you want here */}
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
              { label: "Order placed", date: "Mar 02 2025", color: "#008080" },
              {
                label: "Order confirmed",
                date: "Mar 02 2025",
                color: "#008080",
              },
              { label: "Order shipped", date: "Mar 06 2025", color: "#008080" },
              { label: "Out for delivery", date: "pending", color: "#cccccc" },
              { label: "Order delivered", date: "pending", color: "#cccccc" },
            ]}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

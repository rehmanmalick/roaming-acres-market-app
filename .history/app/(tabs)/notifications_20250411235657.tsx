import NotificationComponent from "@/components/notification-component";
import Wrapper from "@/components/wrapper";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All Notifications");
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="items-center justify-center">
          <Text className="font-bold text-3xl mb-">Notifications</Text>
        </View>
        <View className="bg-white ">
          <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
            {["All Notifications", "Messages"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setActiveTab(status);
                  if (status === "All Notifications")
                    router.push("/notifications");
                  if (status === "Messages") router.push("/messages");
                }}
                className="flex-1 items-center"
              >
                <View className="flex items-center">
                  <Text
                    className={`font-bold text-xl ${
                      activeTab === status
                        ? "text-teal-600 border-b-2 border-teal-600 p-1"
                        : "text-black"
                    }`}
                  >
                    {status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View className="p-2">
            <NotificationComponent
              title="Order Out for Delivery!"
              text="Your Product is on the move! Track your order for real-time updates."
              time="5 mins ago"
              status="New"
              bgColor="#008080"
              statusTextColor="white"
            />
            <NotificationComponent
              title="Your Order is Confirmed!"
              text="Thanks for ordering! Your Product is being and will be on its way soon."
              time="22 mins ago"
              status="New"
              bgColor="#008080"
              statusTextColor="white"
            />
            <NotificationComponent
              title="Rate Your Order"
              text="How did we do? Let us know by rating your recent order and sharing your feedback."
              time="1 day ago"
              status="Old"
              bgColor="#F8E473"
            />
            <NotificationComponent
              title="Hungry? Try Our New Products!"
              text="Check out the latest additions to our menu and satisfy your cravings!"
              time="2 day ago"
              status="Old"
              bgColor="#F8E473"
            />
            <NotificationComponent
              title="Don't Miss Out: Special Offer Just for You!"
              text="Get 10% off your next order with code SAVE10. Limited time only!"
              time="2 hours ago"
              status="Old"
              bgColor="#F8E473"
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

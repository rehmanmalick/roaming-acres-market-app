import NotificationComponent from "@/components/notification-component";
import MessageComponent from "@/components/messages-component";
import Wrapper from "@/components/wrapper";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// ✅ Notifications data
const notificationsData = [
  {
    id: 1,
    title: "Order Out for Delivery!",
    text: "Your Product is on the move! Track your order for real-time updates.",
    time: "5 mins ago",
    status: "New",
    bgColor: "#008080",
    statusTextColor: "white",
  },
  {
    id: 2,
    title: "Your Order is Confirmed!",
    text: "Thanks for ordering! Your Product is being and will be on its way soon.",
    time: "22 mins ago",
    status: "New",
    bgColor: "#008080",
    statusTextColor: "white",
  },
  {
    id: 3,
    title: "Rate Your Order",
    text: "How did we do? Let us know by rating your recent order and sharing your feedback.",
    time: "1 day ago",
    status: "Old",
    bgColor: "#F8E473",
  },
  {
    id: 4,
    title: "Hungry? Try Our New Products!",
    text: "Check out the latest additions to our menu and satisfy your cravings!",
    time: "2 day ago",
    status: "Old",
    bgColor: "#F8E473",
  },
  {
    id: 5,
    title: "Don't Miss Out: Special Offer Just for You!",
    text: "Get 10% off your next order with code SAVE10. Limited time only!",
    time: "2 hours ago",
    status: "Old",
    bgColor: "#F8E473",
  },
];

// ✅ Messages data
const messagesData = [
  {
    id: 1,
    name: "Royal Parvej",
    active: true,
    message: true,
    text: "Sounds awesome!",
    time: "19:37",
    noOfMessage: "1",
    source: require("../../assets/images/Top-selling-4.png"),
  },
  {
    id: 2,
    name: "Cameron Williamson",
    active: true,
    message: true,
    text: "Ok, Just hurry up little bit...😊",
    time: "19:37",
    noOfMessage: "2",
    source: require("../../assets/images/Top-selling-2.png"),
  },
  {
    id: 3,
    name: "Ralph Edwards",
    active: true,
    text: "Thanks dude.",
    time: "19:37",
    source: require("../../assets/images/Top-selling-3.png"),
  },
  {
    id: 4,
    name: "Cody Fisher",
    active: true,
    text: "How is going...?",
    time: "19:37",
    source: require("../../assets/images/Top-selling-1.png"),
  },
  {
    id: 5,
    name: "Eleanor Pena",
    text: "Thanks for the awesome food man...!",
    time: "19:37",
    source: require("../../assets/images/Top-selling-5.png"),
  },
];

export default function NotificationsAndMessages() {
  const [activeTab, setActiveTab] = useState("All Notifications");

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="items-center justify-center">
          <Text className="font-bold text-3xl mb-6">Notifications</Text>
        </View>

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {["All Notifications", "Messages"].map((status, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveTab(status)}
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
          {activeTab === "All Notifications" ? (
            notificationsData.map((item) => (
              <NotificationComponent
                key={item.id}
                title={item.title}
                text={item.text}
                time={item.time}
                status={item.status}
                bgColor={item.bgColor}
                statusTextColor={item.statusTextColor}
              />
            ))
          ) : (
            messagesData.map((msg) => (
              <MessageComponent
                key={msg.id}
                name={msg.name}
                active={msg.active}
                message={msg.message}
                text={msg.text}
                time={msg.time}
                noOfMessage={msg.noOfMessage}
                source={msg.source}
              />
            ))
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

import MessageComponent from "@/components/messages-component";
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

export default function Messages() {
  const [activeTab, setActiveTab] = useState("Messages");
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showBackButton={true}>
        <View className="items-center justify-center">
          <Text className="font-bold text-3xl">Messages</Text>
        </View>
        <View className="bg-white p-6">
          <View className="bg-white py-2 flex flex-row justify-between items-center">
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
            <MessageComponent
              name="Royal Parvej"
              active={true}
              message={true}
              text="Sounds awesome!"
              time="19:37"
              noOfMessage="1"
              source={require("../../assets/images/Top-selling-4.png")}
            />
            <MessageComponent
              name="Cameron Williamson"
              active={true}
              message={true}
              text="Ok, Just hurry up little bit...😊"
              time="19:37"
              noOfMessage="2"
              source={require("../../assets/images/Top-selling-2.png")}
            />
            <MessageComponent
              name="Ralph Edwards"
              active={true}
              text="Thanks dude."
              time="19:37"
              source={require("../../assets/images/Top-selling-3.png")}
            />
            <MessageComponent
              name="Cody Fisher"
              active={true}
              text="How is going...?"
              time="19:37"
              source={require("../../assets/images/Top-selling-1.png")}
            />
            <MessageComponent
              name="Eleanor Pena"
              text="Thanks for the awesome food man...!"
              time="19:37"
              source={require("../../assets/images/Top-selling-5.png")}
            />
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

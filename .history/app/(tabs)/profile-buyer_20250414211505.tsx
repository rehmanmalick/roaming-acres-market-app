import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./../../components/button";
import NotificationComponent from "@/components/notification-component";
import ProfilePost from "./../../components/profile-post";
import ProfileProduct from "@/components/profile-product";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Post");
  const router = useRouter();

  const profileImage: ImageSourcePropType = require("../../assets/images/profile.png");
  const backgroundImage: ImageSourcePropType = require("../../assets/images/profilebg.png");
  const postImage: ImageSourcePropType = require("../../assets/images/post-chicken.png");

  const product = [
    {
      id: 1,
      name: "Fresh Chicken Farm",
      subText: "Daily Egg Supply",
      price: 250,
      buttonText: "TRACK ORDER",
    },
    {
      id: 2,
      name: "Organic Poultry Ltd.",
      subText: "Broiler Batch",
      price: 180,
      buttonText: "TRACK ORDER",
    },
    {
      id: 3,
      name: "Green Farm",
      subText: "20 Chicks Order",
      price: 320,
      buttonText: "TRACK ORDER",
    },
  ];

  const post = [
    {
      id: 6,
      name: "Completed Poultry",
      subText: "Delivered on 12 May",
      description: 200,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 7,
      name: "Finished Order",
      subText: "Delivered on 10 May",
      description: 190,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 8,
      name: "Egg Supply",
      subText: "Delivered on 9 May",
      description: 210,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 9,
      name: "Organic Chicken",
      subText: "Delivered on 8 May",
      description: 275,
      buttonText: "LEAVE REVIEW",
    },
    {
      id: 10,
      name: "Farm Order",
      subText: "Delivered on 5 May",
      description: 300,
      buttonText: "LEAVE REVIEW",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >npm 
      <View className="flex-1 bg-[#FDFDFD] items-center">
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          className="w-full h-[250px] justify-center items-center bg-white"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-5 top-2 bg-white p-3 rounded-md mt-5"
          >
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View className="items-center">
            <Image
              source={profileImage}
              className="w-40 h-40 rounded-full border-[7px] border-white mt-20"
            />
            <Text className="text-lg font-bold mt-2">Try Temp</Text>
            <Text className="text-sm text-gray-500">
              Joined Roaming Acres Market in 2000
            </Text>
            <Text className="text-sm text-gray-500">00+ Active Listings</Text>
          </View>
        </ImageBackground>

        <View className="flex flex-row justify-center items-center mt-10">
          <Button state="primary" title="Message" onPress={() => {}} />
        </View>

        <View className="bg-white mt-4 w-full">
          <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
            {["Post", "Product"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                className="flex-1 items-center"
              >
                <Text
                  className={`font-bold text-xl ${
                    activeTab === status
                      ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                      : "text-black"
                  }`}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="p-2">
            {activeTab === "Product" && (
              <View>
                <Text className="text-lg font-bold mb-2">Product Section</Text>
                <View className="flex flex-row flex-wrap justify-between px-1">
                  {product.map((item) => (
                    <View className="flex flex-row flex-wrap justify-between px-2">
                      {product.map((item) => (
                        <View key={item.id} className="w-[30%] m-[1.5%]">
                          <ProfileProduct
                            name={item.name}
                            price={item.price}
                            caption="Lorem ipsum is simply dummy text printing and typesetting."
                            postImage={require("../../assets/images/post-chicken.png")}
                          />
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            )}

            {activeTab === "Post" && (
              <View>
                <Text className="text-lg font-bold mb-2">Post Section</Text>
                {post.map((item) => (
                  <ProfilePost
                    key={item.id}
                    profileImage={profileImage}
                    name={item.name}
                    time={item.subText}
                    caption={item.description.toString()}
                    postImage={postImage}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

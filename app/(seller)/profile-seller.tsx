import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Button from "./../../components/button";

import ProfilePost from "./../../components/profile-post";
import ProfileProduct from "@/components/profile-product";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Posts");
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
      className="bg-white"
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="never" // ADD THIS!
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
    >
      <SafeAreaView className="flex-1 px-6 bg-white">
        {/* Top Image absolutely positioned */}
        <Image
          source={backgroundImage}
          resizeMode="cover"
          className="w-screen h-64 absolute top-0 right-0"
        />

        <View className=" flex-row items-center justify-between py-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-9 h-9 bg-white  shadow-sm  rounded-xl justify-center items-center"
          >
            <Ionicons name="chevron-back-outline" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="items-center">
          <Image
            source={profileImage}
            className="w-40 h-40 rounded-full border-4 border-white "
          />
          <Text className="text-lg font-bold mt-2">Try Temp</Text>
          <Text className="text-sm text-gray-500">
            Joined Roaming Acres Market in 2000
          </Text>
          <Text className="text-sm text-gray-500">00+ Active Listings</Text>
        </View>
        <View className="flex flex-row gap-4  mt-10">
          <View className="flex-1">
            <Button
              state="primary"
              title="Add"
              showIcon={true}
              iconName={"add"}
              onPress={() => router.push("/seller/select-uploading")}
            />
          </View>
          <View className="flex-1">
            <Button
              state="primary"
              title="Edit Profile"
              onPress={() => router.push("/(tabs)/profile")}
            />
          </View>
        </View>

        <View className=" py-4 w-full  ">
          <Text className="text-xl font-semibold mb-4">About Me</Text>

          <View className="flex-row items-center mb-3">
            <Entypo name="location-pin" size={18} color="#4B5563" />
            <Text className="ml-2 text-gray-700 flex-shrink font-bold">
              Location
            </Text>
            <Text className="ml-2 text-[#9796A1] flex-shrink">
              Seller Profile About Details...
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <MaterialIcons name="store" size={18} color="#4B5563" />
            <Text className="ml-2 text-gray-700 flex-shrink font-bold">
              Shop Name{" "}
            </Text>
            <Text className="ml-2 text-[#9796A1] flex-shrink">
              Joined this market place{" "}
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <Text className="ml-4 text-gray-700"></Text>
            <Text className="ml-2 text-gray-700 font-bold">Rating:</Text>
            <FontAwesome
              name="star"
              size={18}
              color="#FBBF24"
              className="ml-2"
            />
            <Text className="ml-2 text-gray-700">4.7</Text>
          </View>
        </View>

        <View className=" mt-4 w-full">
          <View className=" py-2 flex flex-row justify-between  items-center">
            {["Posts", "Products"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                className=" flex-1 items-center"
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

          <View className="py-2">
            {activeTab === "Products" && (
              <View>
                <Text className="text-lg font-bold mb-2">Product Section</Text>
                <View className="flex flex-row flex-wrap justify-between ">
                  {product.map((item) => (
                    <View className="flex flex-row flex-wrap justify-between ">
                      {product.map((item) => (
                        <View key={item.id} className="w-[30%] m-[1.5%]">
                          <ProfileProduct
                            name={item.name}
                            price={item.price}
                            caption="Lorem ipsum is simply dummy text printing and typesetting."
                            postImage={require("../../assets/images/post-chicken.png")}
                            btntext="EDIT"
                          />
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            )}

            {activeTab === "Posts" && (
              <View>
                <Text className="text-lg font-bold mb-2">Post Section</Text>
                {post.map((item) => (
                  <ProfilePost
                    key={item.id}
                    profileImage={profileImage}
                    name={item.name}
                    time={item.subText}
                    caption="Lorem Ipsum is simply dummy text printing and typesetting. Lorem Ipsum is simply dummy text printing  Lorem Ipsum is simply dummy text printing "
                    postImage={postImage}
                    showMenu={true}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

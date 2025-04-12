import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./../../components/button";
import NotificationComponent from "@/components/notification-component";
import ProfilePost from "./../../components/profile-post";

// Add ImageSourcePropType import
import { ImageSourcePropType } from "react-native";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Post");

  // Dynamic ImageSource PropType for profile image and post image
  const profileImage: ImageSourcePropType = require("../../assets/images/profile.png");
  const backgroundImage: ImageSourcePropType = require("../../assets/images/profilebg.png");
  const postImage: ImageSourcePropType = require("../../assets/images/post-chicken.png");

  // Data
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
    {
      id: 4,
      name: "Sunrise Hatchery",
      subText: "Layer Birds",
      price: 500,
      buttonText: "TRACK ORDER",
    },
    {
      id: 5,
      name: "Golden Eggs Ltd.",
      subText: "Egg Cartons Bulk",
      price: 420,
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
    >
      <View
        style={styles.container}
        className="flex-1 bg-[#FDFDFD] items-center"
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <TouchableOpacity
            onPress={() => {}}
            style={styles.back}
            className="absolute left-5 top-2 bg-white p-3"
          >
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View className="items-center">
            <Image
              source={profileImage}
              className="w-40 h-40 rounded-full"
              style={styles.img}
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

        <View className="bg-white w-full">
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
                      ? "text-teal-600 border-b-2 border-teal-600 p-1"
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
                <Text className="text-lg font-bold">Product Section</Text>
                {product.map((item) => (
                  profile
                  <View key={item.id} style={styles.productItem}>
                    <Text className="text-xl font-bold">{item.name}</Text>
                    <Text>{item.subText}</Text>
                    <Text>Price: ${item.price}</Text>
                    <TouchableOpacity onPress={() => {}}>
                      <Text style={styles.buttonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}

            {activeTab === "Post" && (
              <View>
                <Text className="text-lg font-bold">Post Section</Text>
                {post.map((item) => (
                  <ProfilePost
                    key={item.id}
                    profileImage={profileImage}
                    name={item.name}
                    time={item.subText}
                    caption={item.description}
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    alignItems: "center",
  },
  img: {
    borderWidth: 7,
    borderColor: "#ffffff",
    marginTop: 80,
  },
  imageBackground: {
    width: "100%",
    height: 250,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    marginTop: 20,
    borderRadius: 8,
  },
  productItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  buttonText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

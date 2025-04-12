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
import Post from "./../../components/profile-post";

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
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <TouchableOpacity onPress={() => {}} style={styles.back}>
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View style={styles.profileInfo}>
            <Image source={profileImage} style={styles.img} />
            <Text style={styles.profileName}>Try Temp</Text>
            <Text style={styles.profileSubText}>
              Joined Roaming Acres Market in 2000
            </Text>
            <Text style={styles.profileSubText}>00+ Active Listings</Text>
          </View>
        </ImageBackground>

        <View style={styles.buttonContainer}>
          <Button state="primary" title="Message" onPress={() => {}} />
        </View>

        <View style={styles.tabContainer}>
          <View style={styles.tabHeader}>
            {["Post", "Product"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
                style={styles.tabButton}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === status && styles.activeTab,
                  ]}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.tabContent}>
            {activeTab === "Product" && (
              <View>
                <Text style={styles.sectionTitle}>Product Section</Text>
                {product.map((item) => (
                  <View key={item.id} style={styles.productItem}>
                    <Text style={styles.productName}>{item.name}</Text>
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
                <Text style={styles.sectionTitle}>Post Section</Text>
                {post.map((item) => (
                  <Post
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
    backgroundColor: "white",
    padding: 10,
    position: "absolute",
    left: 20,
    top: 20,
  },
  profileInfo: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileSubText: {
    fontSize: 12,
    color: "gray",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  tabContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  tabHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  activeTab: {
    color: "#007BFF",
    borderBottomWidth: 2,
    borderColor: "#007BFF",
    paddingBottom: 5,
  },
  tabContent: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

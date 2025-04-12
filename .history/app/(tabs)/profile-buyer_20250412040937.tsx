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

  const profileImage: ImageSourcePropType = require("../../assets/images/profile.png");
  const backgroundImage: ImageSourcePropType = require("../../assets/images/profilebg.png");

  const products = [
    {
      id: 1,
      name: "Fresh Chicken Farm",
      subText: "Daily Egg Supply",
      price: 250,
      buttonText: "TRACK ORDER",
      onPress: () => {},
    },
    {
      id: 2,
      name: "Organic Poultry Ltd.",
      subText: "Broiler Batch",
      price: 180,
      buttonText: "TRACK ORDER",
      onPress: () => {},
    },
    {
      id: 3,
      name: "Green Farm",
      subText: "20 Chicks Order",
      price: 320,
      buttonText: "TRACK ORDER",
      onPress: () => {},
    },
    {
      id: 4,
      name: "Sunrise Hatchery",
      subText: "Layer Birds",
      price: 500,
      buttonText: "TRACK ORDER",
      onPress: () => {},
    },
    {
      id: 5,
      name: "Golden Eggs Ltd.",
      subText: "Egg Cartons Bulk",
      price: 420,
      buttonText: "TRACK ORDER",
      onPress: () => {},
    },
  ];

  const posts = [
    {
      id: 6,
      name: "Completed Poultry",
      subText: "Delivered on 12 May",
      price: 200,
      buttonText: "LEAVE REVIEW",
      onPress: () => {},
    },
    {
      id: 7,
      name: "Finished Order",
      subText: "Delivered on 10 May",
      price: 190,
      buttonText: "LEAVE REVIEW",
      onPress: () => {},
    },
    {
      id: 8,
      name: "Egg Supply",
      subText: "Delivered on 9 May",
      price: 210,
      buttonText: "LEAVE REVIEW",
      onPress: () => {},
    },
    {
      id: 9,
      name: "Organic Chicken",
      subText: "Delivered on 8 May",
      price: 275,
      buttonText: "LEAVE REVIEW",
      onPress: () => {},
    },
    {
      id: 10,
      name: "Farm Order",
      subText: "Delivered on 5 May",
      price: 300,
      buttonText: "LEAVE REVIEW",
      onPress: () => {},
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.imageBackground} resizeMode="cover">
          <TouchableOpacity onPress={() => {}} style={styles.back}>
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View style={styles.profile}>
            <Image source={profileImage} style={styles.img} />
            <Text style={styles.profileName}>Try Temp</Text>
            <Text style={styles.profileInfo}>Joined Roaming Acres Market in 2000</Text>
            <Text style={styles.profileInfo}>00+ Active Listings</Text>
          </View>
        </ImageBackground>

        <Button state="primary" title="Massage" onPress={() => {}} />

        <View style={styles.tabContainer}>
          {["Post", "Product"].map((status) => (
            <TouchableOpacity key={status} onPress={() => setActiveTab(status)} style={styles.tabButton}>
              <Text style={activeTab === status ? styles.activeTabText : styles.tabText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contentContainer}>
          {activeTab === "Post" && posts.map((post) => (
            <View key={post.id} style={styles.item}>
              <Text style={styles.itemName}>{post.name}</Text>
              <Text style={styles.itemSubText}>{post.subText}</Text>
              <Text style={styles.itemPrice}>${post.price}</Text>
              <TouchableOpacity onPress={post.onPress} style={styles.button}>
                <Text style={styles.buttonText}>{post.buttonText}</Text>
              </TouchableOpacity>
            </View>
          ))}

          {activeTab === "Product" && products.map((product) => (
            <View key={product.id} style={styles.item}>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemSubText}>{product.subText}</Text>
              <Text style={styles.itemPrice}>${product.price}</Text>
              <TouchableOpacity onPress={product.onPress} style={styles.button}>
                <Text style={styles.buttonText}>{product.buttonText}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

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
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  imageBackground: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  profile: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileInfo: {
    fontSize: 14,
    color: "#777",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  tabText: {
    fontSize: 18,
    color: "black",
  },
  activeTabText: {
    fontSize: 18,
    color: "#009688",
    borderBottomWidth: 2,
    borderBottomColor: "#009688",
  },
  contentContainer: {
    padding: 20,
    width: "100%",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemSubText: {
    fontSize: 14,
    color: "#777",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#009688",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});

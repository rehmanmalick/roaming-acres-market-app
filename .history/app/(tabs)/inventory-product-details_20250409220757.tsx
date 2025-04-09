import Button from "@/components/button";
import ProductReviewComponent from "@/components/product-reviews-component";
import ProfileHeader from "@/components/profile-header";
import TopSellersComponent from "@/components/top-sellers-component";
import WishlistComponent from "@/components/wishlist-component";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from "react-native";

export default function WishList() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Birds", "Eggs", "Chicks", "Ducks"];
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showBackButton={true}>
        <ProfileHeader />
        <View className="items-center justify-center mt-9">
          <Text className="font-bold text-3xl">My Wish</Text>
        </View>
        <View className="flex  mt-5 px-4">
          <WishlistComponent
            onPress={() => router.push("/(tabs)/inventory-product-details")}
            showButton={false}
            iconName={"plus"}
            buttonText={"ADD TO CART"}
          />
        </View>
        <View className="flex flex-row items-center border-b border-gray-300 mx-4 pb-6">
          <Text className="text-base font-medium mr-2 mt-1">Quantity</Text>

          <View className="flex flex-row items-center">
            <TouchableOpacity
              className={`w-10 h-10 p-2 mx-2 justify-center items-center rounded bg-gray-200 ${
                quantity === 1 ? "bg-gray-100" : ""
              }`}
              onPress={decreaseQuantity}
              disabled={quantity === 1}
            >
              <Ionicons
                name="remove"
                size={16}
                color={quantity === 1 ? "#ccc" : "#333"}
              />
            </TouchableOpacity>

            <Text className="text-base font-semibold mx-3">{quantity}</Text>

            <TouchableOpacity
              className="w-10 h-10 p-2 mx-2 justify-center items-center rounded bg-teal-600"
              onPress={increaseQuantity}
            >
              <Ionicons name="add" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-b border-gray-300 mx-9 pb-6">
          <Text className="font-bold text-2xl my-4 ">Product Overview</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <View className="border-b border-gray-300 mx-9 py-3">
          <TopSellersComponent
            source={require("../../assets/images/Top-selling-1.png")}
            name="Oliver Jake"
            subText={"Top Seller"}
            showButton={true}
            buttonText="Connect With Seller "
          />
        </View>
        <View className="mx-2 pb-6">
          <Text className="font-bold text-2xl my-4 ">Product Reviews</Text>
          <ProductReviewComponent
            name="Haylie Aminoff"
            source={require("../../assets/images/product-reviews2.png")}
          />
          <ProductReviewComponent
            name="Carla Septimus"
            source={require("../../assets/images/product-reviews1.png")}
          />
        </View>
        <Button
          showIcon={true}
          iconName="shopping-bag"
          state="primary"
          iconColor="#008080"
          iconBackground="#ffffff"
          title="ADD TO CART"
          onPress={() => router.push("/(tabs)/place-order")}
        />
      </Wrapper>
    </ScrollView>
  );
}

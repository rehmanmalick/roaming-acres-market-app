import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CartComponent = ({ basePrice }: { basePrice: number }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = basePrice * quantity;

  return (
    // p-3 m-2 mx-7
    <View className="bg-white flex flex-row justify-between items-center rounded-lg overflow-hidden p-3 m-2 mx-7 shadow-md shadow-black/10 ">
      <TouchableOpacity
        className="absolute top-2 right-2 w-6 h-6 justify-center items-center rounded-full"
        onPress={() => console.log("Product removed")}
      >
        <Ionicons name="close" size={14} color="red" />
      </TouchableOpacity>

      <View className="flex flex-row items-center flex-1">
        <View className="h-20 w-20 bg-gray-100 rounded-lg justify-center items-center mr-3">
          <Image
            source={require("../assets/images/top-selling.png")}
            style={{
              width: 100,
              height: 100,
            }}
            className="w-full h-full rounded-lg"
            resizeMode="contain"
          />
        </View>

        <View className="flex-1">
          <Text className="text-base font-bold mb-1">Acres - Protek</Text>
          <Text className="text-sm text-gray-600 mb-1">Corp Prodution</Text>
          <Text className="text-lg font-bold text-teal-600">${totalPrice}</Text>
        </View>
      </View>

      <View className="flex flex-row items-center ml-3">
        <TouchableOpacity
          className={`w-9 h-9 p-2 mx-2 justify-center items-center rounded-full border border-gray-300 ${
            quantity === 1 ? "opacity-50" : ""
          }`}
          onPress={decreaseQuantity}
          disabled={quantity === 1}
        >
          <Ionicons name="remove" size={16} color="#333" />
        </TouchableOpacity>

        <Text className="text-base font-semibold mx-3 min-w-[20px] text-center">
          {quantity}
        </Text>

        <TouchableOpacity
          className="w-9 h-9 p-2 mx-2 justify-center items-center rounded-full bg-teal-600"
          onPress={increaseQuantity}
        >
          <Ionicons name="add" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;

import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";

interface Order {
  id: string | number;
  status: "Delivered" | "Cancelled" | "Pending" | string;
  date: string;
  amount: number;
  addressLine1: string;
  deliveryStatus: string;
  note?: string;
}

interface PendingOrderInnerComponentProps {
  order: Order;
  productDetails: string;
  itemCount?: number;
}

const PendingOrderInnerComponent: React.FC<PendingOrderInnerComponentProps> = ({
  order,
  productDetails,
  itemCount = 1,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleDetails = () => {
    setIsExpanded((prev) => !prev);
    Animated.timing(spinValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const getStatusClass = () => {
    switch (order.status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-[#008080] text-white";
    }
  };

  return (
    <View className="p-4 bg-white mt-4 rounded-lg shadow-md">
      <View className="flex-row justify-between items-center">
        <View className="flex flex-row">
          <View className="p-4 rounded-full bg-[#A1DDDD] mr-2">
            <Image
              source={require("../assets/images/box.png")}
              resizeMode="cover"
            />
          </View>
          <View>
            <View className="flex flex-row items-center">
              <Text className="text-base text-gray-800 font-medium">
                Order ID{" "}
              </Text>
              <Text>#{order.id}</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-base text-gray-800 font-medium">
                Placed on {order.date}
              </Text>
            </View>
            <View className="flex flex-row gap-4 mt-1">
              <View className="flex flex-row">
                <Text className="text-base text-gray-800 font-medium">
                  Items:{" "}
                </Text>
                <Text>{itemCount}</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-base text-gray-800 font-medium">
                  Amount:{" "}
                </Text>
                <Text>${order.amount.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={toggleDetails}
          className="mt-6 flex-row items-center justify-center"
          activeOpacity={0.7}
        >
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="black" />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Expanded Content */}
      {isExpanded && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="font-medium text-gray-800 mb-2">
            Product Order Details
          </Text>
          <Text className="text-sm text-gray-600">
            {productDetails || "No product details provided."}
          </Text>
        </View>
      )}
    </View>
  );
};

export default PendingOrderInnerComponent;

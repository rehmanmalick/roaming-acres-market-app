import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";

interface Order {
  id: string | number;
  status: "Delivered" | "Cancelled" | "Pending" | string;
  date: string;
  amount: number;
  addressLine1: string;

  deliveryStatus: string;
  note?: string;
}

interface OrderSummaryProps {
  order: Order;
  productDetails: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  order,
  productDetails,
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
    <View className="p-4 bg-white mt-4 rounded-lg shadow-md ">
      <View className="flex-row justify-between items-center">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">Order ID </Text>
          <Text>#{order.id}</Text>
        </View>
        <Text
          className={`text-[12px] px-[8px] py-[4px] rounded-[8px] font-bold ${getStatusClass()}`}
        >
          {order.status}
        </Text>
      </View>
      View
      <View className="mt-2">
        <View className="flex flex-row">
          <Text className="text-sm ">House No </Text>
          <Text className="text-sm text-[#9796A1]">{order.addressLine1}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-sm ">Status: </Text>
          <Text className="text-sm text-[#008080]">{order.deliveryStatus}</Text>
        </View>
        
        <Text className="text-sm text-gray-700">Order at {order.date}</Text>
      </View>

      <View className="mt-4">
        <Text className="text-xl font-bold text-gray-800">
          $ {order.amount.toFixed(2)}
        </Text>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity
        onPress={toggleDetails}
        className="mt-2 flex-row items-center justify-center"
        activeOpacity={0.7}
      >
        <Text className="mr-1">
          {isExpanded ? "Hide Details" : "View Details"}
        </Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Ionicons name="chevron-down" size={18} color="black" />
        </Animated.View>
      </TouchableOpacity>

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

export default OrderSummary;

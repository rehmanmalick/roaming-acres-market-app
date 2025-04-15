import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";

interface OrderItem {
  name: string;
  price: number;
  description: number;
}

interface Order {
  id: string | number;
  status: "Delivered" | "Cancelled" | "Pending" | string;
  date: string;
  amount: number;

  note?: string;
}

interface OrderSummaryProps {
  order: Order;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
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
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <View className="p-4 bg-white rounded-lg shadow-md mb-3">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-semibold">Order #{order.id}</Text>
        <View className="flex-row items-center">
          <Text
            className={`text-xs px-2 py-1 rounded-full ${getStatusClass()}`}
          >
            {order.status}
          </Text>
        </View>
      </View>

      {/* Basic Info */}
      <View className="mt-2">
        <Text className="text-sm text-gray-600">📅 {order.date}</Text>
        <Text className="text-sm text-gray-600">💰 ${order.amount}</Text>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity
        onPress={toggleDetails}
        className="mt-2 flex-row items-center justify-end"
        activeOpacity={0.7}
      >
        <Text className="text-blue-500 mr-1">
          {isExpanded ? "Hide Details" : "View Details"}
        </Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Text className="text-blue-500">▼</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="font-medium text-gray-800 mb-2">
            Product Order Details
          </Text>
          {order.items.map((item, index) => (
            <View key={index} className="flex-row justify-between py-1">
              <Text className="mt-2 text-sm text-gray-600">{order.note}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderSummary;

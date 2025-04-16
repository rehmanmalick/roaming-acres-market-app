import { Octicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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

interface OrderProgressStep {
  label: string;
  date: string;
  color: string;
}

interface PendingOrderInnerComponentProps {
  order: Order;
  productDetails: string;
  itemCount?: number;
  progressSteps: OrderProgressStep[];
}

const PendingOrderInnerComponent: React.FC<PendingOrderInnerComponentProps> = ({
  order,
  productDetails,
  itemCount = 1,
  progressSteps,
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

  return (
    <View className="p-4 bg-white mt-4 rounded-lg shadow-md">
      <View className="flex-row justify-between items-center">
        <View className="flex flex-row">
          <View className="w-20 h-20 rounded-full flex justify-center items-center bg-[#A1DDDD] mr-3">
            <Image
              source={require("../assets/images/box.png")}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text className="text-xl font-bold">Order ID #{order.id}</Text>
            <Text className="text-bold text-[#868889]">
              Placed on {order.date}
            </Text>
            <View className="flex flex-row gap-2 mt-1">
              <View className="flex flex-row items-center justify-center">
                <Text>Items: </Text>
                <Text className="text-base font-semibold">{itemCount}</Text>
              </View>
              <View className="flex flex-row">
                <Text>Amount: </Text>
                <Text className="text-base font-semibold">
                  ${order.amount.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <TouchableOpacity
            onPress={toggleDetails}
            className="flex-row items-center justify-center"
            activeOpacity={0.7}
          >
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <FontAwesome name="circle" size={24} color="#008080" />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>

      {isExpanded && (
        <View className="mt-3 pt-3 border-t border-gray-100">
          <Text className="font-medium text-gray-800 mb-2">
            Product Order Details
          </Text>
          <Text className="text-sm text-gray-600">
            {productDetails || "No product details provided."}
          </Text>

          <View className="mt-6">
            {progressSteps.map((step, index) => (
              <View key={index} className="flex-row items-start relative">
                <View className="w-8 items-center">
                  <Octicons name="dot-fill" size={20} color={step.color} />
                  {index < progressSteps.length - 1 && (
                    <View
                      style={{
                        width: 2,
                        flex: 1,
                        backgroundColor: progressSteps[index + 1].color,
                      }}
                    />
                  )}
                </View>
                <View className="flex-1 pb-5">
                  <View className="flex-row justify-between pr-2">
                    <Text className="text-sm text-gray-800">{step.label}</Text>
                    <Text className="text-sm font-semibold text-gray-700">
                      {step.date}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default PendingOrderInnerComponent;

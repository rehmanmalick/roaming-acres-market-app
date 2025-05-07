import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./button";

interface OrderCardProps {
  orderId: string;
  status: "Pending" | "Completed" | "Cancelled";
  amount: string;
  orderedAt: string;
  addressLine1?: string; // Only for Pending
  addressLine2?: string; // Only for Pending
  directionButton?: boolean; // Only for Pending
  onPressDetails: () => void;
  onPressDirection?: () => void; // Optional
  onPressStatus?: () => void; // For Completed/Cancelled
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  status,
  amount,
  orderedAt,
  addressLine1,
  addressLine2,
  directionButton,
  onPressDetails,
  onPressDirection,
  onPressStatus,
}) => {
  const renderStatusBadge = () => {
    let bgColor = "#F8E473";
    let textColor = "#000000";
    let badgeText = "Pending";

    if (status === "Completed") {
      bgColor = "#008080";
      textColor = "#ffffff";
      badgeText = "Completed";
    } else if (status === "Cancelled") {
      bgColor = "#E26D08";
      textColor = "#ffffff";
      badgeText = "Cancelled";
    }

    return (
      <View className="flex flex-col items-end">
        <TouchableOpacity onPress={onPressStatus} activeOpacity={0.7}>
          <Text
            className="text-sm font-medium px-2 py-1 rounded"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            {badgeText}
          </Text>
        </TouchableOpacity>
        {(status === "Completed" || status === "Cancelled") && (
          <>
            <Text className="text-sm font-medium text-gray-800 mt-1">
              Amount
            </Text>
            <Text className="text-sm font-medium text-teal-600 mt-1">
              {amount}
            </Text>
          </>
        )}
      </View>
    );
  };

  const renderStatusDetails = () => {
    if (status === "Completed" || status === "Cancelled") {
      const label = status === "Completed" ? "Delivered" : "Cancelled";

      return (
        <>
          <Text className="text-sm   py-1">
            Status: <Text className="text-[#008080]">{label}</Text>
          </Text>

          <Text className="text-sm text-gray-600">Ordered at: {orderedAt}</Text>
        </>
      );
    }

    return (
      <>
        <Text className="text-sm text-gray-600 mb-1">{addressLine1}</Text>
        <Text className="text-sm text-gray-600">{addressLine2}</Text>
      </>
    );
  };

  return (
    <View className="shadow-md bg-white p-4 my-2 rounded-xl">
      {/* Header Section */}
      <View className="flex-row">
        {status === "Pending" && (
          <View className="justify-center items-center mr-4">
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={20}
              color="#868889"
            />
          </View>
        )}
        <View className="flex-row justify-between flex-1">
          <View>
            <Text className="text-base font-semibold text-gray-800 py-1">
              Order ID #{orderId}
            </Text>
            {renderStatusDetails()}
          </View>
          {renderStatusBadge()}
        </View>
      </View>

      {/* Buttons Section */}
      <View className="flex-row justify-between items-center mt-4 gap-4">
        <View className="flex-1">
          <Button
            state="secondary"
            title="View Details"
            onPress={onPressDetails}
          />
        </View>
        {status === "Pending" && directionButton && onPressDirection && (
          <View className="flex-1">
            <Button
              state="secondary"
              title="Direction"
              onPress={onPressDirection}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default OrderCard;

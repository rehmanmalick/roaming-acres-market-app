import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

interface InventoryComponentProps extends TouchableOpacityProps {
  orderId: string;
  amount: string | number;
  timeRequired: string;
  status?: string;
  dispatchText?: string;
  locationIcon?: boolean;
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({
  orderId,
  amount,
  timeRequired,
  status = "Pending", // Default is "Pending"
  dispatchText = "Dispatch your order",
  locationIcon = true,
  onPress,
  ...touchableProps
}) => {
  const formattedAmount =
    typeof amount === "number" ? amount.toLocaleString() : amount;

  // Set background color based on status
  const statusStyle = status === "Pending" ? "#F8E473" : "#E26D08"; // Pending is yellow, Cancelled is red
  const statusText = status === "Pending" ? "Pending" : "Cancelled";

  return (
    <View className=" p-4 mt-4  border-t border-t-[#E3E3E3] bg-white">
      <View className="mt-3 flex-row justify-between">
        <View className="flex flex-col items-start">
          <Text className=" font-medium text-lg">Pre Starter</Text>
          <Text className="text-[#60655C] text-md ">Baramati</Text>
        </View>

        <View className="flex flex-row">
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            {...touchableProps}
            className="mr-2"
          >
            <View className="">
              <MaterialCommunityIcons name="delete" size={32} color="#008080" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            {...touchableProps}
            className="mr-2"
          >
            <View className="">
              <MaterialCommunityIcons
                name="newspaper-variant"
                size={32}
                color="#008080"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            {...touchableProps}
          >
            <View className="">
              <FontAwesome name="edit" size={32} color="#008080" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row justify-between mt-1">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">Quantity:</Text>
          <Text>50 items</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">
            Order No:{" "}
          </Text>
          <Text className="text-base text-gray-800 font-medium">129</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between mt-1">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">
            Bag Location:
          </Text>
          <Text>Stock Room</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">Price:</Text>
          <Text className="text-base text-gray-800 font-medium">1600/</Text>
        </View>
      </View>
    </View>
  );
};

export default InventoryComponent;

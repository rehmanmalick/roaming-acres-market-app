import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

interface InventoryComponentProps extends TouchableOpacityProps {
  productName: string;
  location: string;
  quantity: string | number;
  orderNumber: string | number;
  bagLocation: string;
  price: string | number;
  onDeletePress?: () => void;
  onDetailsPress?: () => void;
  onEditPress?: () => void;
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({
  productName,
  location,
  quantity,
  orderNumber,
  bagLocation,
  price,
  onDeletePress,
  onDetailsPress,
  onEditPress,
  ...touchableProps
}) => {
  const formattedPrice =
    typeof price === "number" ? `${price.toLocaleString()}/` : `${price}/`;

  return (
    <View style={{
        padding: 16,
        marginTop: 16,
        backgroundColor: "white",
        borderRadius: 8,
        borderTopWidth: 1, // Border only on the top
        borderTopColor: "#B2DFDB", // Light teal color for the top border
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }} className="p-4 mt-4 border-t-[#E3E3E3] border-t   bg-white">
      <View className="mt-3 flex-row justify-between">
        <View className="flex flex-col items-start">
          <Text className="font-medium text-lg">{productName}</Text>
          <Text className="text-[#60655C] text-md">{location}</Text>
        </View>

        <View className="flex flex-row">
          <TouchableOpacity
            onPress={onDeletePress}
            activeOpacity={0.8}
            className="mr-2"
          >
            <MaterialCommunityIcons name="delete" size={32} color="#008080" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDetailsPress}
            activeOpacity={0.8}
            className="mr-2"
          >
            <MaterialCommunityIcons
              name="newspaper-variant"
              size={32}
              color="#008080"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEditPress} activeOpacity={0.8}>
            <FontAwesome name="edit" size={32} color="#008080" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row justify-between mt-1">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">
            Quantity:{" "}
          </Text>
          <Text>{quantity}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">
            Order No:{" "}
          </Text>
          <Text>{orderNumber}</Text>
        </View>
      </View>

      <View className="flex flex-row justify-between mt-1">
        <View className="flex flex-row">
          <Text className="text-base text-gray-800 font-medium">
            Bag Location:{" "}
          </Text>
          <Text>{bagLocation}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="text-base text-[#008080] font-medium">Price: </Text>
          <Text className="text-base text-[#008080] font-medium">
            {formattedPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InventoryComponent;

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
    <View className="p-4 mt-4 border-t-white  bg-white">
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

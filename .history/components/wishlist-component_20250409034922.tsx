import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface WishlistComponentProps {
  iconName: string;
  buttonText: string;
  onPress?: () => void;
  showButton?: boolean;
}

export default function WishlistComponent({
  iconName,
  buttonText,
  onPress,
  showButton = true,
}: WishlistComponentProps) {
  return (
    <View className="bg-black rounded-lg shadow-lg  overflow-hidden m-2">
      <View className="items-center justify-center">
        <View style={[styles.iconContainer]}>
          <Ionicons name="heart-outline" size={20} color={"#008080"} />
        </View>
      </View>
      <Image
        source={require("../assets/images/top-selling.png")}
        style={{ height: 100, width: 100 }}
        resizeMode="contain"
      />

      <View className="p-3">
        <Text className="text-lg font-bold mb-1">
          Roaming Acres Limited Acres Gold
        </Text>

        <View className="flex-row items-center mb-2">
          <Text className="text-md">Price : $2060</Text>
          <Text className="text-xs text-gray-400 line-through ml-2">$3060</Text>
        </View>
        <Text className="text-md">Save : $1000</Text>
        <View className="flex-row items-center py-2 mb-2">
          <Ionicons name="star-outline" size={14} color="#E26D08" />
          <Text className="text-md text-gray-400 line-through ml-2">4.7</Text>
        </View>

        {showButton && (
          <TouchableOpacity
            onPress={onPress}
            className="bg-teal-600 py-2 rounded-md justify-center items-center mb-2 flex-row"
          >
            <View className="bg-white mx-2 p-2 rounded-[100%]">
              <FontAwesome5 name={iconName} size={15} color="#008080" />
            </View>
            <Text className="text-white text-center px-2 text-md font-medium">
              {buttonText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#ffffff",
    padding: 5,
    borderColor: "#008080",
    borderWidth: 1,
    borderTopRightRadius: 10,
  },
});

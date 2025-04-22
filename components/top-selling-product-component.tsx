import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

interface TopSellingProductComponentProps {
  onPress?: () => void;
}

export default function TopSellingProductComponent({
  onPress,
}: TopSellingProductComponentProps) {
  const router = useRouter();
  const defaultOnPress = () => {
    router.push("/(tabs)/inventory-product-details");
  };
  const handlePress = onPress || defaultOnPress;
  return (
    <>
      <View style={styles.container}>
        <View className="bg-[#F7F8F9] p-4 items-center rounded-[10px]">
          <Image
            source={require("../assets/images/top-selling.png")}
            style={{ height: 100, width: 90 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 15 }}>
          Acres-Protek
        </Text>
        <Text style={styles.price}>$ 2060</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.btn}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    // paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
    width: "25%",
  },
  price: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
    color: "#000000",
  },
  btn: {
    fontSize: 12,
    color: "#008080",
    paddingHorizontal: 5,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
});

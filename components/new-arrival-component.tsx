import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

interface NewArrivalProps {
  price: number;
  onPress?: () => void;
}

export default function NewArrival({ price, onPress }: NewArrivalProps) {
  const router = useRouter();
  const defaultOnPress = () => {
    router.push("/(buyer)/(home)/inventory-product-details");
  };
  const handlePress = onPress || defaultOnPress;
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/new-arrival.png")}
          style={{ height: 90, width: "100%" }}
          resizeMode="contain"
        />
        <Text style={styles.price}>
          Lorem Ipsum is simply dummy text printing and typesetting.
        </Text>
        <View className=" flex flex-row w-full justify-between items-center mt-4">
          <Text className="text-[13px] font-bold ">${price.toFixed(2)}</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: "#008080", fontSize: 8, fontWeight: "600" }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
    width: "25%",
  },
  price: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
    color: "#8391A1",
    width: "100%",
  },
  btn: {
    color: "#008080",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "600",
  },
});

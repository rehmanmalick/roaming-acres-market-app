import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface NewArrivalProps {
  price: number;
  onPress?: () => void;
}

export default function NewArrival({ price, onPress }: NewArrivalProps) {
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
        <View className=" flex flex-row justify-between items-center mt-4">
          <Text className="text-[px] font-bold mr-2">${price.toFixed(2)}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={{ color: "#008080", fontSize: 11, fontWeight: "600" }}>
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
    marginLeft: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
    width: 120,
  },
  price: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
    color: "#8391A1",
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

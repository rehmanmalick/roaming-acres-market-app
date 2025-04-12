import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface InnerCategoriesComponentProps {
  text: string;
  price: number;
  onPress?: () => void;
}

export default function InnerCategoriesComponent({
  text,
  price,
  onPress,
}: InnerCategoriesComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/eggs.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text className="text-center" style={styles.title}>
        {text}
      </Text>
      <Text className="text-center mt-2" style={styles.dozen}>
        Dozen
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={18}
          color={"#008080"}
        />
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "#F1F1F1",
    borderRadius: 7,
    marginBottom: 16,
    overflow: "hidden",
    paddingTop:2,
  },
  imageContainer: {
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    paddingHorizontal: 8,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "#008080",
    marginTop: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
  dozen: {
    color: "#868889",
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#999999",
    borderTopWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
    paddingLeft: 5,
  },
});

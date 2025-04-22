import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface ShopCategoryProps {
  text?: string;
  source?: { uri: string };
  onPress?: () => void;
}

export default function ShopCategory({
  text,
  source,
  onPress,
}: ShopCategoryProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              marginBottom: 5,
              borderRadius: 15,
            }}
          >
            <Image
              source={source}
              style={{
                height: 65,
                width: 65,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{ fontSize: 14, fontWeight: "bold", alignSelf: "center" }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
});

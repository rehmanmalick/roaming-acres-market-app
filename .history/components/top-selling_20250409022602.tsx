import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface TopSellingProps {
  text?: string;
  source?: { uri: string };
  onPress?: () => void;
}

export default function TopSelling({ text, source, onPress }: TopSellingProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View className="bg-[#000] p-4">
            <Image
              source={source}
              style={{ height: 65, width: 65 }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 10,
            }}
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
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
});

import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
interface TopSellingProps {
  text?: string;
  source?: { uri: string };
  onPress?: () => void;
}

export default function TopSelling({ text, source, onPress }: TopSellingProps) {
  const router = useRouter();
  const defaultOnPress = () => {
    router.push("/(tabs)/");
  };
  const handlePress = onPress || defaultOnPress;
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <View className="bg-[#ECE8E8] p-2 rounded-full">
            <Image
              source={source}
              style={{ height: 60, width: 60 }}
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
    paddingHorizontal: 6,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
});

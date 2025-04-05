import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  state: "primary" | "secondary" | "disable";
  disabled?: boolean;
  onPress?: () => void;
  title: string;
  iconName?: keyof typeof FontAwesome5.glyphMap;
}

export default function Button({ state, onPress, title, iconName, showIcon }: ButtonProps & { showIcon?: boolean }) {
  const buttonStyle =
    state === "primary"
      ? styles.primaryButton
      : state === "secondary"
      ? styles.secondaryButton
      : styles.disableButton;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]} disabled={state === "disable"}>
      {showIcon && iconName && (
        <View
          style={{
            backgroundColor: "#ffffff",
            padding: 4,
            borderRadius: 50,
            marginRight: 8,
          }}
        >
          <FontAwesome5 name={iconName} size={14} color={"#008080"} />
        </View>
      )}
      <Text
        style={[
          state === "primary"
            ? styles.primaryText
            : state === "secondary"
            ? styles.secondaryText
            : state === "disable"
            ? styles.disableText
            : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#008080",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#008080",
  },
  primaryText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 17,
  },
  disableButton: {
    backgroundColor: "#B5B5B5",
  },
  disableText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 17,
  },
});

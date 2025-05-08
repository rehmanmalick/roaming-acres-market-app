import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

interface ButtonProps {
  state: "primary" | "secondary" | "disable";
  disabled?: boolean;
  onPress?: () => void;
  title: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconBackground?: string;
  iconColor?: string;
  style?: object;
  showIcon?: boolean;
}

export default function Button({
  state,
  onPress,
  title,
  iconName,
  showIcon,
  iconBackground,
  iconColor,
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const getButtonClasses = () => {
    if (state === "primary") {
      return isPressed
        ? "bg-white border border-[#008080]"
        : "bg-[#008080] border border-[#008080]";
    } else if (state === "secondary") {
      return isPressed
        ? "bg-[#008080] border border-[#008080]"
        : "bg-white border border-[#008080]";
    } else if (state === "disable") {
      return "bg-gray-400";
    }
    return "";
  };

  const getTextClasses = () => {
    if (state === "primary") {
      return isPressed
        ? "text-[#008080] font-bold text-lg"
        : "text-white font-bold text-lg";
    } else if (state === "secondary") {
      return isPressed
        ? "text-white font-bold text-lg"
        : "text-[#008080] font-bold text-lg";
    } else if (state === "disable") {
      return "text-white font-bold text-[16px]";
    }
    return "";
  };

  const getIconColor = () => {
    if (state === "primary") {
      return isPressed ? "#008080" : iconColor || "#FFFFFF";
    } else if (state === "secondary") {
      return isPressed ? "#FFFFFF" : iconColor || "#008080";
    } else if (state === "disable") {
      return "#FFFFFF";
    }
    return iconColor || "#000000";
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={state === "disable"}
      activeOpacity={1}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={`rounded-md py-3 px-4 flex-row items-center justify-center ${getButtonClasses()}`}
    >
      {showIcon && iconName && (
        <View
          className=" rounded-full mr-1"
          style={{ backgroundColor: iconBackground }}
        >
          <Ionicons name={iconName} size={22} color={getIconColor()} />
        </View>
      )}
      <Text className={getTextClasses()}>{title}</Text>
    </TouchableOpacity>
  );
}

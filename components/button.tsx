import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

interface ButtonProps {
  state: "primary" | "secondary" | "disable";
  disabled?: boolean;
  onPress?: () => void;
  title: string;
  iconName?: keyof typeof FontAwesome5.glyphMap;
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
        ? "bg-white border border-teal-800"
        : "bg-teal-700 border border-teal-700";
    } else if (state === "secondary") {
      return isPressed
        ? "bg-teal-100 border border-teal-700"
        : "bg-white border border-teal-700";
    } else if (state === "disable") {
      return "bg-gray-400";
    }
    return "";
  };

  const getTextClasses = () => {
    if (state === "primary") {
      return isPressed
        ? "text-teal-800 font-bold text-[16px]"
        : "text-white font-bold text-[16px]";
    } else if (state === "secondary") {
      return isPressed
        ? "text-teal-700 font-bold text-[16px]"
        : "text-black font-bold text-[16px]";
    } else if (state === "disable") {
      return "text-white font-bold text-[16px]";
    }
    return "";
  };

  const getIconColor = () => {
    if (state === "primary") {
      return isPressed ? "#E0E0E0" : iconColor || "#FFFFFF"; 
    } else if (state === "secondary") {
      return isPressed ? "#0F766E" : iconColor || "#000000"; 
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
          className="p-1 rounded-full mr-2"
          style={{ backgroundColor: iconBackground }}
        >
          <FontAwesome5 name={iconName} size={10} color={getIconColor()} />
        </View>
      )}
      <Text className={getTextClasses()}>{title}</Text>
    </TouchableOpacity>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  label?: string;
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  focusedBorderColor?: string;
  defaultBorderColor?: string;
  variant?: "dropdown" | "pickup";
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  focusedBorderColor = "#008080",
  defaultBorderColor = "#ccc",
  variant = "dropdown",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    onValueChange(value);
    setExpanded(false);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const borderColorClass =
    isFocused || expanded ? "border-teal-600" : "border-gray-300";

  return (
    <View className="mb-4">
      {label && (
        <Text className="mb-1 text-[#9796A1] font-medium">{label}</Text>
      )}

      <TouchableOpacity
        className={`w-full h-14 px-4 rounded-[3px] flex-row justify-between items-center border ${borderColorClass} bg-white`}
        onPress={() => {
          setExpanded((prev) => !prev);
          handleFocus();
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <Text className="text-gray-700">
          {selectedValue ? selectedValue : "Select Option"}
        </Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={16}
          color="#777"
        />
      </TouchableOpacity>

      {expanded && variant === "dropdown" && (
        <View className="mt-[-1px] border border-t-0 border-gray-300 rounded-b-[3px] bg-white">
          {options.map((item, index) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
              className={`p-3 border-t border-gray-200 ${
                selectedOption === item ? "bg-teal-100" : "bg-white"
              }`}
            >
              <Text className="text-gray-700">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {expanded && variant === "pickup" && (
        <View className="mt-2 bg-white border border-gray-300 rounded-lg p-4">
          <Text className="text-gray-800 font-medium mb-2">
            Choose Pickup Slot:
          </Text>
          {options.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
              className={`p-3 mb-2 rounded-md border ${
                selectedOption === item
                  ? "bg-green-100 border-green-400"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              <Text className="text-gray-800">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

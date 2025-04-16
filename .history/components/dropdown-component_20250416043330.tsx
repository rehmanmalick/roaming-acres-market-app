import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  label?: string;
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  focusedBorderColor?: string; // Add focused border color prop
  defaultBorderColor?: string; // Add default border color prop
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  focusedBorderColor = "#008080", // Default focused border color
  defaultBorderColor = "#ccc", // Default border color
}) => {
  const [expanded, setExpanded] = useState(false); // Handle dropdown expanded state
  const [isFocused, setIsFocused] = useState(false); // Handle focus state
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Track selected option

  // Toggles the dropdown open/close state
  const handleSelect = (value: string) => {
    setSelectedOption(value); // Set the selected option
    onValueChange(value); // Notify parent component about the selection
    setExpanded(false); // Close the dropdown after selection
  };

  // Handle focus state when the dropdown is tapped
  const handleFocus = () => {
    setIsFocused(true); // Mark dropdown as focused
  };

  // Handle blur state when dropdown loses focus
  const handleBlur = () => {
    setIsFocused(false); // Mark dropdown as not focused
  };

  return (
    <View className="mb-4 ">
      {label && (
        <Text className="mb-1 text-[#9796A1] font-medium">{label}</Text>
      )}

      {/* Touchable component for dropdown */}
      <TouchableOpacity
        style={{
          borderColor:
            isFocused || expanded ? focusedBorderColor : defaultBorderColor,
          borderWidth: 1,
        }}
        className="w-full h-14 border rounded-[3px] px-4 text-base  flex-row justify-between items-center"
        onPress={() => {
          setExpanded((prev) => !prev); // Toggle dropdown state
          handleFocus(); // Set focus when dropdown is clicked
        }}
        onBlur={handleBlur} // Blur when dropdown loses focus
        onFocus={handleFocus} // Focus when dropdown is focused
      >
        <Text className="text-gray-700">
          {selectedValue ? selectedValue : "Select Business Type"}
        </Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={16}
          color="#777"
        />
      </TouchableOpacity>

      {/* Options list that appears when expanded */}
      {expanded && (
        <View className="mt-1 border border-t-0 border-gray-300 rounded-b-rounded-[3px] mt-[-1px] bg-white">
          {options.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
              style={{
                backgroundColor:
                  selectedOption === item ? "#E0F7FA" : "transparent", // Change background color of selected option
              }}
              className="p-3 border-t border-gray-200"
            >
              <Text className="text-gray-700">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setExpanded(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View className="mb-4">
      {label && (
        <Text className="mb-1 text-[#9796A1] font-medium">{label}</Text>
      )}
      <TouchableOpacity
        style={{
          borderColor: isFocused ? focusedBorderColor : defaultBorderColor,
          borderWidth: 1,
        }}
        className="rounded-lg p-3 flex-row justify-between items-center"
        onPress={() => {
          setExpanded((prev) => !prev);
          handleFocus(); // Focus when the dropdown is clicked
        }}
        onBlur={handleBlur} // Blur when the dropdown loses focus
      >
        <Text className="text-gray-700">
          {selectedValue ? selectedValue : "Select Business Type"}
        </Text>
        <AntDesign
          name={expanded ? "caretup" : "caretdown"}
          size={16}
          color="#777"
        />
      </TouchableOpacity>

      {expanded && (
        <View className="border border-t-0 border-gray-300 rounded-b-lg mt-[-1px] bg-white">
          {options.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleSelect(item)}
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

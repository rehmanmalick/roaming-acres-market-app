import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Dropdown = ({ label, options, selectedValue, onValueChange }) => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (value) => {
    onValueChange(value);
    setExpanded(false);
  };

  return (
    <View className="mb-4">
      {label && <Text className="mb-1 text-[#9796A1] font-medium">{label}</Text>}
      <TouchableOpacity
        className="border border-gray-300 rounded-lg p-3 flex-row justify-between items-center"
        onPress={() => setExpanded((prev) => !prev)}
      >
        <Text className="text-gray-700">
          {selectedValue ? selectedValue : "Select Business Type"}
        </Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} size={16} color="#777" />
      </TouchableOpacity>

      {expanded && (
        <View className="border border-t-0 border-gray-300 rounded-b-lg mt-[-1px] overflow-hidden">
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                className="p-3 border-t border-gray-200 bg-white"
              >
                <Text className="text-gray-700">{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;

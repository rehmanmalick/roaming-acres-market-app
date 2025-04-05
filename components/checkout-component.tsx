import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CheckoutComponent: React.FC<{ mainText: string; subText: string; icon: keyof typeof Ionicons.glyphMap; onPress?: () => void }> = ({mainText, subText, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between p-4 bg-white mx-5 mt-4">
            <View className="w-10 h-10 rounded-full bg-gray-100 justify-center items-center mr-3">
            <Ionicons name={icon} size={24} color="#4B5563" />
            </View>
      <View className="flex-1 ml-2" >
        <Text className="text-md font-medium text-gray-500 mb-1">{subText}</Text>
        <Text className="text-base text-xl font-semibold">{mainText}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

export default CheckoutComponent;
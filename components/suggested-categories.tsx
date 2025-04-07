import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface SuggestedCategoriesComponentProps {
  name: string;
  source?: {uri : string};
  onPress?: () => void;
  buttonText?: string;
  rating?: number;
}

const SuggestedCategoriesComponent = ({ name, source, rating, onPress , buttonText}: SuggestedCategoriesComponentProps) => {
  return (
    <View  className="flex-row items-center bg-white rounded-lg py-3 ">
    <View className="w-24 h-20 rounded-lg justify-center items-center mr-3 bg-white overflow-hidden">
      <Image 
        source={source}
        className="w-full h-full"
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    </View>
      
      <View className="flex-1 pl-2">
        <Text className="text-xl font-bold mb-1">{name}</Text>
        <View className="flex-row items-center mb-2">
            <Ionicons name="star-outline" size={16} color="#E26D08" />
            <Text className="text-lg text-gray-400 ml-2">{rating}</Text>
          </View>
      </View>
      
        <TouchableOpacity 
          className="pl-3 py-1.5 "
          onPress={onPress}
        >
          <Text className="text-gray-400 text-md font-bold px-6">{buttonText}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SuggestedCategoriesComponent;
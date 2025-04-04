import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TopSellersComponentProps {
  name: string;
  rating: number;
  productCount: number;
  source?: {uri : string};
  onViewProfile?: () => void;
}

const TopSellersComponent = ({ name, rating, source, productCount, onViewProfile }: TopSellersComponentProps) => {
  return (
    <View style={{paddingVertical:10}} className="flex-row items-center bg-white rounded-lg p-3 my-2 shadow-sm shadow-black/10">
      <View className="w-12 h-12 rounded-full bg-teal-50 justify-center items-center mr-3">
        <Image 
            source={source}
            className="w-full h-full rounded-full"
            style={{height: 90 , width: 90}}
            resizeMode="contain"
        />
      </View>
      
      <View className="flex-1 px-4">
        <Text className="text-xl font-bold mb-1">{name}</Text>
        
        <View className="flex-row items-center mb-1">
          <Ionicons name="star-outline" size={14} color="#E26D08" />
          <Text className="text-sm text-gray-600 ml-1">{rating}</Text>
        </View>
        
        <Text className="text-sm text-gray-600">Total Product: {productCount}</Text>
      </View>
      
      <TouchableOpacity 
        className="bg-teal-600 px-3 py-1.5 rounded"
        onPress={onViewProfile}
      >
        <Text style={{backgroundColor:"#008080" , padding:10 , borderRadius:90}} className="text-white text-sm font-bold px-6">View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopSellersComponent;
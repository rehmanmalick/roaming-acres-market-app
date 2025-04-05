import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProductReviewProps {
  source: { uri: string };
    name: string;
}

const ProductReviewComponent: React.FC<ProductReviewProps> = ({ source , name}) => {
  return (
    <View className="bg-white rounded-lg p-4 my-2">
        <View className="flex-row items-center mb-2">
            <Image className='mr-4' style={{height:60, width:60}} source={source}/>
      <View className="justify-between mb-3">
        <Text className="text-base font-bold">{name}</Text>
        <Text className="text-sm text-gray-500">32 minutes ago</Text>
      </View>
            </View>

      <View className="flex-row items-center mb-2">
        <View className="flex-row mr-2">
            <Text className="text-md mt-1 mr-2 text-gray-500">4.5</Text>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name={i < 4 ? 'star' : 'star-outline'}
              size={16}
              color={i < 4 ? '#FFD700' : '#CCCCCC'}
            />
          ))}
        </View>
      </View>
      
      <Text className="text-sm text-gray-800 leading-5">
        Lorem ipsum dolor sit amet, consectetur sadi sapscing elitr, sed diam nonumy
      </Text>
    </View>
  );
};

export default ProductReviewComponent;
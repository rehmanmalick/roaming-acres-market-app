import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from './button';

const OrderCard = ({directionButton}) => {
  return (
  <View className='shadow-md bg-white p-4 my-2  mx-4'>
    <View className=" flex-row rounded-lg ">
        <View className='items-center justify-center mr-4'>
        <MaterialCommunityIcons
            name='map-marker-outline'
            size={20}
            color={'#868889'}
        />
        </View>

      {/* Top Row */}
      <View className='justify-between flex-1 flex-row'>
      <View className=" mb-3">
        <Text className="text-base font-semibold text-gray-800">Order ID #0000</Text>
        <Text className="text-sm text-gray-600 mb-1">House No–ABC 00000</Text>
        <Text className="text-sm text-gray-600">Avg,0a0</Text>
      </View>

        {/* <View className="bg-orange-50 px-2 py-1 rounded"> */}
          <Text className="text-sm font-medium text-amber-600">Pending</Text>
        {/* </View> */}
        </View>
      {/* Address */}

      {/* Bottom Row */}
    </View>
      <View className="flex-row justify-between items-center mt-4">
       <Button state='secondary' title='View Details'/>
       {directionButton && <Button state='primary' title='Direction'/>}
      </View>
      </View>
  );
};

export default OrderCard;
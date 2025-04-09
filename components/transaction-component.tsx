import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TransactionComponent = () => {
  return (
    <View className="bg-white flex flex-row justify-between items-center rounded-lg p-4 my-2 shadow-md">
      {/* Left Section - Icon and Transaction Info */}
      <View className="flex flex-row items-center flex-1">
        <View className='bg-teal-600 p-4 rounded mr-3'>
          <MaterialCommunityIcons name='credit-card' size={30} color={'#ffffff'}/>
        </View>
        
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">Cash-in</Text>
          <Text className="text-sm text-gray-500 mt-1">From ABC Bank ATM</Text>
            <Text className="text-sm text-gray-500">Transaction ID</Text>
            <Text className="text-sm font-medium text-gray-800">698094554320</Text>
        </View>
      </View>

      <View className="ml-4 items-end">
        <Text className="text-xl text-right font-bold text-gray-800">$ 100.00</Text>
        <View className="flex-row justify-end items-center mt-1">
          <Text style={{backgroundColor:"#CCFFEA", color:'#5DC486'}} className="text-sm bg-teal-400 p-1 text-green-500 ml-1">confirmed</Text>
        </View>
        <Text className="text-xs text-gray-400 mt-2">17 Jan 2025  11:21 AM</Text>
      </View>
    </View>
  );
};

export default TransactionComponent;
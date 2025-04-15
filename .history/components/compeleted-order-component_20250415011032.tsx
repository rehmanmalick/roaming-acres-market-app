import React from 'react';
import { View, Text } from 'react-native';

const OrderSummary = () => {
  return (
    <View className="p-5 bg-white rounded-lg shadow-md">
      <View className="flex-row justify-between mb-2.5">
        <Text className="font-bold text-base">Order ID #0000</Text>
        <Text className="text-green-500 font-bold">Completed</Text>
      </View>

      <View className="mb-2.5">
        <Text className="text-sm text-gray-600">House No-ABC 00000</Text>
        <Text className="text-sm text-gray-600">Avg,0a0</Text>
        <Text className="text-sm text-gray-600">Status: Delivered</Text>
        <Text className="text-sm text-gray-600">Order at 00 Jan 0000</Text>
      </View>

      <View className="my-2.5 items-end">
        <Text className="text-xl font-bold">$ 00.00</Text>
      </View>

      <View className="mt-4">
        <Text className="font-bold text-base mb-1.25">
          Product Order Details
        </Text>
        <Text className="text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </View>
    </View>
  );
};

export default OrderSummary;
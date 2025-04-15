import React from 'react';
import { View, Text } from 'react-native';

interface OrderReceiptProps {
  orderId: string;
  houseNo: string;
  avg: string;
  status: string;
  orderDate: string;
  productDescription: string;
  statusColor?: 'green' | 'red' | 'yellow' | 'blue'; // Optional status color
}

const OrderReceipt: React.FC<OrderReceiptProps> = ({
  orderId = '#0000',
  houseNo = 'ABC 00000',
  avg = '0a0',
  status = 'Delivered',
  orderDate = '00 Jan 0000',
  productDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  statusColor = 'green'
}) => {
  // Status color mapping
  const statusColorClasses = {
    green: 'bg-green-50 text-green-800',
    red: 'bg-red-50 text-red-800',
    yellow: 'bg-yellow-50 text-yellow-800',
    blue: 'bg-blue-50 text-blue-800'
  };

  return (
    <View className="bg-white rounded-lg p-4 m-4 shadow shadow-black/10">
      {/* Header */}
      <View className="border-b border-gray-200 pb-2 mb-3">
        <Text className="text-lg font-bold">Order ID {orderId}</Text>
      </View>

      {/* Address Section */}
      <View className="flex-row mb-2">
        <Text className="font-bold mr-1">House No-</Text>
        <Text className="flex-1">{houseNo}</Text>
      </View>

      {/* Avg Section */}
      <View className="flex-row mb-2">
        <Text className="font-bold mr-1">Avg,</Text>
        <Text className="flex-1">{avg}</Text>
      </View>

      {/* Status */}
      <View className={`p-2 rounded my-2 ${statusColorClasses[statusColor]}`}>
        <Text className="font-bold">Status: {status}</Text>
      </View>

      {/* Order Date */}
      <View className="flex-row mb-2">
        <Text className="font-bold mr-1">Order at</Text>
        <Text className="flex-1">{orderDate}</Text>
      </View>

      {/* Product Details */}
      <View className="mt-4 border-t border-gray-200 pt-3">
        <Text className="font-bold text-base mb-2">Product Order Details</Text>
        <Text className="text-gray-700 leading-5">{productDescription}</Text>
      </View>
    </View>
  );
};

export default OrderReceipt;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import tw from 'tailwind-rn'; // or NativeWind

const OrderSummary = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(spinValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={tw('p-4 bg-white rounded-lg shadow-md mb-3')}>
      {/* Header */}
      <View style={tw('flex-row justify-between items-center')}>
        <Text style={tw('text-lg font-semibold')}>Order #{order.id}</Text>
        <View style={tw('flex-row items-center')}>
          <Text style={tw(`text-xs px-2 py-1 rounded-full ${
            order.status === 'Delivered' 
              ? 'bg-green-100 text-green-800' 
              : order.status === 'Cancelled' 
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`)}>
            {order.status}
          </Text>
        </View>
      </View>

      {/* Basic Info */}
      <View style={tw('mt-2')}>
        <Text style={tw('text-sm text-gray-600')}>📅 {order.date}</Text>
        <Text style={tw('text-sm text-gray-600')}>💰 ${order.amount}</Text>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity 
        onPress={toggleDetails}
        style={tw('mt-2 flex-row items-center justify-end')}
        activeOpacity={0.7}
      >
        <Text style={tw('text-blue-500 mr-1')}>
          {isExpanded ? 'Hide Details' : 'View Details'}
        </Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Text style={tw('text-blue-500')}>▼</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View style={tw('mt-3 pt-3 border-t border-gray-100')}>
          <Text style={tw('font-medium text-gray-800 mb-2')}>Items:</Text>
          {order.items.map((item, index) => (
            <View key={index} style={tw('flex-row justify-between py-1')}>
              <Text style={tw('text-gray-700')}>{item.name}</Text>
              <Text style={tw('text-gray-700')}>${item.price}</Text>
            </View>
          ))}
          {order.note && (
            <Text style={tw('mt-2 text-sm text-gray-600')}>📝 {order.note}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default OrderSummary; // Default export
import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const OrderSummary = () => {
  return (
    <View style={tailwind("p-4 bg-white rounded-lg shadow-lg")}>
      <View style={tailwind("flex-row justify-between items-center")}>
        <Text style={tailwind("text-lg font-semibold")}>Order ID #0000</Text>
        <Text style={tailwind("text-sm text-green-500")}>Completed</Text>
      </View>

      <View style={tailwind("mt-2")}>
        <Text style={tailwind("text-sm text-gray-700")}>
          House No-ABC 00000
        </Text>
        <Text style={tailwind("text-sm text-gray-700")}>Avg,0a0</Text>
        <Text style={tailwind("text-sm text-gray-700")}>Status: Delivered</Text>
        <Text style={tailwind("text-sm text-gray-700")}>
          Order at 00 Jan 0000
        </Text>
      </View>

      <View style={tailwind("mt-4")}>
        <Text style={tailwind("text-xl font-bold text-gray-800")}>$ 00.00</Text>
      </View>

      <View style={tailwind("mt-4")}>
        <Text style={tailwind("text-md font-semibold text-gray-800")}>
          Product Order Details
        </Text>
        <Text style={tailwind("text-sm text-gray-600")}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>
    </View>
  );
};

export default OrderSummary;

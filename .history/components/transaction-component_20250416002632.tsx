import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

interface TransactionProps {
  text?: string;
  subText?: string;
  transactionId?: string;
  price?: number;
  status?: string;
  time?: string;
  date?: string;
  imageSource?: ImageSourcePropType;
}

const TransactionComponent: React.FC<TransactionProps> = ({
  text,
  subText,
  transactionId,
  price,
  status,
  time,
  date,
  imageSource,
}) => {
  return (
    <View className="bg-white flex flex-row justify-between items-center rounded-lg p-4 my-2 shadow-sm">
      <View className="flex flex-row items-center flex-1">
        <View className="rounded mr-3 mb-3">
          <Image
            source={
              imageSource ? imageSource : require("../assets/images/card.png")
            }
            style={{ width: 60, height: 60 }}
          />
        </View>

        <View className="flex-2 flex-col gap-1">
          <Text className="text-lg font-semibold text-gray-800">{text}</Text>
          {subText && (
            <Text className="text-sm font-medium text-gray-500 mt-1">
              {subText}
            </Text>
          )}
          <Text className="text-sm text-gray-500">Transaction ID</Text>
          <Text className="text-sm font-medium text-gray-800">
            {transactionId}
          </Text>
        </View>
      </View>

      <View className="ml-4 flex-2 flex-col gap-1 items-end">
        <Text className="text-xl text-right font-bold text-gray-800">
          $ {price?.toFixed(2)}
        </Text>
        <View className="flex-row justify-end items-center mt-1">
          <Text
            style={{
              backgroundColor:
                status === "confirmed"
                  ? "#CCFFEA"
                  : status === "pending"
                  ? "#FFF4CC"
                  : "#FFCCCC",
              color:
                status === "confirmed"
                  ? "#5DC486"
                  : status === "pending"
                  ? "#D4A017"
                  : "#D9534F",
            }}
            className="text-sm rounded-md  p-1 ml-1"
          >
            {status}
          </Text>
        </View>
        <Text className="text-xs text-gray-400 mt-2">
          {date} {time}
        </Text>
      </View>
    </View>
  );
};

export default TransactionComponent;

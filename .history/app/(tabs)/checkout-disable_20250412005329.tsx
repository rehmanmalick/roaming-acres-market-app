
import Button from '@/components/button';
import CheckoutComponent from '@/components/checkout-component';
import Wrapper from '@/components/wrapper';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView} from 'react-native';

export default function CheckoutDisable() {
  const router = useRouter();
 
  return (
      <ScrollView 
      className="bg-white flex-1" 
      bounces={false}
        contentContainerStyle={{paddingBottom: 20}}
        >
          <Wrapper
            showBackButton={true}
          >
           <View className="items-center justify-center">
               <Text className="font-bold text-3xl">Checkout</Text>
           </View>
            <CheckoutComponent 
                mainText='Home - 123 Main St, Apt 4B'
                subText='Pick up Point'
                icon='location-outline'
            />
            <CheckoutComponent 
                mainText='Mastercard - Try Temp'
                subText='Payment from'
                TextIcon= 
                icon='card-outline'
                onPress={() => router.push('/(tabs)/payment')}
            />
                     <View className=" mx-9 mt-6" >
                           <Text className="font-bold text-2xl my-4 ">Invoice Details</Text>
                     </View>
                    <View className="flex flex-row justify-between mx-9 pb-2">
                        <Text className="font-semibold text-xl my-4">Subtotal</Text>
                    <View className="flex flex-row ">
                        <Text className="text-xl mx-2 my-4 ">USD</Text>
                        <Text className="font-semibold text-xl my-4">2209</Text>
                    </View>
                    </View>
                    <View className="flex flex-row justify-between mx-9 pb-2">
                        <Text className="font-semibold text-xl my-4">Tax</Text>
                    <View className="flex flex-row ">
                        <Text className="text-xl mx-2 my-4 ">USD</Text>
                        <Text className="font-semibold text-xl my-4">100</Text>
                    </View>
                    </View>
                    <View className="flex flex-row justify-between mx-9 pb-2">
                        <Text className="font-semibold text-xl my-4">Platform Fee</Text>
                    <View className="flex flex-row ">
                        <Text className="text-xl mx-2 my-4 ">USD</Text>
                        <Text className="font-semibold text-xl my-4">100</Text>
                    </View>
                    </View>
                    <View className="flex flex-row justify-between mx-9 pb-2">
                        <Text className="font-semibold text-xl my-4">Total</Text>
                    <View className="flex flex-row ">
                        <Text className="text-xl mx-2 my-4 ">USD</Text>
                        <Text className="font-semibold text-xl my-4">2490</Text>
                    </View>
                    </View>
                    <View className="mt-9">
                    <Button state='disable' title='PLACE ORDER'/>
                    </View>
    </Wrapper>
      </ScrollView>
  );
};


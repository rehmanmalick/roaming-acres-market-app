
import ProductReviewComponent from '@/components/product-reviews-component';
import ProfileHeader from '@/components/profile-header';
import TransactionComponent from '@/components/transaction-component';
import Wrapper from '@/components/wrapper';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

export default function AllTransactions() {


  return (
    <ScrollView 
      className="bg-white flex-1" 
      bounces={false}
      contentContainerStyle={{paddingBottom: 20}}
    >
      <Wrapper showBackButton={true} showPerButton={true}>
        <ProfileHeader/>
        
      
        <View style={{marginTop:50}} className="flex flex-row px-7  pb-5 ">
            <Text className="border-b text-2xl font-bold">Transactions History</Text>
            <View className='flex-1 ml-2'>
                <TextInput
                    className="border border-gray-300 rounded-full py-3 px-4 pl-10 w-full"
                    placeholder="Search"
                    placeholderTextColor="#999"
                />
                <View style={{position:"absolute" , top:10, left:10}} >
                    <Ionicons name="search" size={16} color="#999" />
                </View>
            </View>
        </View>
            <TransactionComponent
              text='Transfer to card'
              transactionId='698094554317'
              price={100}
              status='pending'
              date='17 Jan 2025'
              time='11:21 AM'
            />
            <TransactionComponent
              text='Cash-in'
              subText='From ABC Bank ATM'
              transactionId='698094554317'
              price={100}
              status='confirmed'
              date='17 Jan 2025'
              time='11:21 AM'
            />
            <TransactionComponent
              text='Cashback from purchase'
              subText='Purchase from Apps'
              transactionId='698094554317'
              price={3.21}
              status='cancelled'
              date='17 Jan 2025'
              time='11:21 AM'
            />
            <TransactionComponent
              text='Transfer to card'
              transactionId='698094554317'
              price={100}
              status='confirmed'
              date='17 Jan 2025'
              time='11:21 AM'
            />
            <TransactionComponent
              text='Transfer to card'
              subText='Not enough funds'
              transactionId='698094554317'
              price={100}
              status='pending'
              date='17 Jan 2025'
              time='11:21 AM'
            />

      </Wrapper>
    </ScrollView>
  );
};
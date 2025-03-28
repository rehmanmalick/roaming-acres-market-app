import NewArrival from '@/components/new-arrival-component';
import ShopCategory from '@/components/shop-categories';
import TopSelling from '@/components/top-selling';
import TopSellingProduct from '@/components/top-selling-product';
import Wrapper from '@/components/wrapper';
import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const RoamingAcresMarket = () => {
  return (
      <ScrollView 
      className="bg-white flex-1" 
      bounces={false}
        contentContainerStyle={{paddingBottom: 20}}
        >
          <Wrapper>
        {/* Header Section */}
        <View className="px-4" style={{width:"100%"}}>
          <Text className="text-2xl font-bold">Welcome</Text>
          <Text className="text-3xl font-bold mt-2">Roaming Acres Market</Text>
          
          {/* Search Bar */}
          <View className="mt-4 relative" >
            <TextInput
              className="border border-gray-300 rounded-full py-2 px-4 pl-10"
              placeholder="Search"
              
            />
            <View className="absolute left-3 top-2.5">
              <Text>🔍</Text>
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View className="mt-6 px-4">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-bold">Categories</Text>
            <Text className="text-primary">See All</Text>
          </View>
        <View className="mt-2 flex flex-row justify-between items-center">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" style={{width:"100%"}}>
            <ShopCategory
              source={require('@/assets/images/chicken-cat.jpg')}
              text='Birds'
            />
            <ShopCategory
              source={require('@/assets/images/egg-cat.jpg')}
              text='Eggs'
            />
            <ShopCategory
              source={require('@/assets/images/chick-cat.jpg')}
              text='Chicks'
            />
            <ShopCategory
              source={require('@/assets/images/duck-cat.jpg')}
              text='Ducks'
            />
            </ScrollView>
        </View>
</View>
        {/* New Arrivals Section */}
        <View className="mt-10 px-4">
          <View className="flex flex-row justify-between items-center" style={{width:"100%"}}>
            <Text className="text-xl font-bold">New Arrivals</Text>
            <Text className="text-primary">See All</Text>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <NewArrival/>
            <NewArrival/>
            <NewArrival/>
          </View>
        </View>


        {/* Shop by Category Section */}
        <View className="mt-10 px-4">
        <View className="flex flex-row justify-between items-center" style={{width:"100%"}}>
            <Text className="text-xl font-bold" >Top Sellers </Text>
            <Text className="text-primary">See All</Text>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" style={{width:"100%"}}>
                <TopSelling source={require('../../assets/images/Top-selling-1.png')} text='Oliver'/>
                <TopSelling source={require('../../assets/images/Top-selling-2.png')} text='Jack'/>
                <TopSelling source={require('../../assets/images/Top-selling-3.png')} text='Jacob'/>
                <TopSelling source={require('../../assets/images/Top-selling-4.png')} text='Charlie'/>
                <TopSelling source={require('../../assets/images/Top-selling-5.png')} text='Thomas'/>
            </ScrollView>
          </View>
        </View>
        <View className="mt-10 px-4">
        <View className="flex flex-row justify-between items-center" style={{width:"100%"}}>
            <Text className="text-xl font-bold" >Top-Selling Products</Text>
            <Text className="text-primary">See All</Text>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" style={{width:"100%"}}>
            <TopSellingProduct/>
            <TopSellingProduct/>
            <TopSellingProduct/>
            <TopSellingProduct/>
            </ScrollView>
          </View>
        </View>
    </Wrapper>
      </ScrollView>
  );
};

export default RoamingAcresMarket;
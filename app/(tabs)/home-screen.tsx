import NewArrival from '@/components/new-arrival-component';
import ProfileHeader from '@/components/profile-header';
import ShopByCategory from '@/components/shop-by-category';
import ShopCategory from '@/components/shop-categories';
import TabBar from '@/components/tabbar';
import TopSelling from '@/components/top-selling';
import TopSellingProductComponent from '@/components/top-selling-product-component';
import Wrapper from '@/components/wrapper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Touchable } from 'react-native';

const RoamingAcresMarket = () => {
  const router = useRouter();
  return (
    <>
      <ScrollView 
      className="bg-white flex-1" 
      bounces={false}
        contentContainerStyle={{paddingBottom: 20}}
        >
          <Wrapper
            showSettingsButton={true}
            showMenuButton={true}
          >
            <ProfileHeader/>
        {/* Header Section */}
        <View className="p-4" style={{width:"100%"}}>
          <View className="flex flex-row justify-between items-center">
            <View>
          <Text className="text-2xl font-bold">Welcome</Text>
          <Text className="text-3xl font-bold mt-2">Roaming Acres Market</Text>
          </View>
            <View className="relative">
            <Ionicons name="notifications" size={24} color="white" style={{ backgroundColor: '#008080', borderRadius: 12, padding: 4 }} />
            <View
              className="absolute bg-orange-500 rounded-full"
              style={{
              width: 10,
              height: 10,
              top: -2,
              right: -2,
              }}
            />
            </View>
          </View>
          {/* Search Bar */}
          <View className="mt-4 relative" >
            <TextInput
              className="border border-gray-300 rounded-full py-2 px-4 pl-10"
              placeholder="Search"
              
            />
            <View className="absolute left-3 top-2.5">
              <Ionicons name="search" size={15} />
            </View>
          </View>
        </View>

        {/* Categories Section */}
        <View className="mt-6 px-4">
          <View className="flex flex-row justify-between items-center pb-3">
            <Text className="text-xl font-bold">Categories</Text>
                        <TouchableOpacity onPress={() => router.push('/categories')} className="bg-white py-2 rounded-full">
            <Text className="text-primary">See All</Text>
            </TouchableOpacity>
          </View>
        <View className="mt-2 flex flex-row justify-between items-center">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" style={{width:"100%"}}>
            <ShopCategory
              source={require('@/assets/images/birds.png')}
              text='Birds'
              onPress={() => router.push('/categories')}
              />
            <ShopCategory
              source={require('@/assets/images/eggs.png')}
              text='Eggs'
              onPress={() => router.push('/categories')}
              />
            <ShopCategory
              source={require('@/assets/images/chick.png')}
              text='Chicks'
              onPress={() => router.push('/categories')}
              />
            <ShopCategory
              source={require('@/assets/images/duck.png')}
              text='Ducks'
              onPress={() => router.push('/categories')}
            />
            </ScrollView>
        </View>
</View>
        {/* New Arrivals Section */}
        <View className="mt-10 px-4">
          <View className="flex flex-row justify-between items-center pb-3" style={{width:"100%"}}>
            <Text className="text-xl font-bold">New Arrivals</Text>
            <TouchableOpacity onPress={() => router.push('/new-arrivals')} className="bg-white py-2 rounded-full">
            <Text className="text-primary">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <NewArrival price={50}/>
            <NewArrival price={50}/>
            <NewArrival price={50}/>
          </View>
        </View>


        {/* Shop by Category Section */}
        <View className="mt-10 px-4">
        <View className="flex flex-row justify-between items-center pb-3" style={{width:"100%"}}>
            <Text className="text-xl font-bold" >Top Sellers </Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/top-sellers')} className="bg-white py-2 rounded-full">
            <Text className="text-primary">See All</Text>
            </TouchableOpacity>
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
        <View className="flex flex-row justify-between items-center pb-3" style={{width:"100%"}}>
            <Text className="text-xl font-bold" >Top-Selling Products</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/top-selling-products')} className="bg-whitepy-2 rounded-full">
            <Text className="text-primary">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row" style={{width:"100%"}}>
            <TopSellingProductComponent/>
            <TopSellingProductComponent/>
            <TopSellingProductComponent/>
            <TopSellingProductComponent/>
            </ScrollView>
          </View>
        </View>
        <View className="mt-10 px-4">
        <View className="flex flex-row justify-between items-center pb-3" style={{width:"100%"}}>
            <Text className="text-xl font-bold" >Shop By Category</Text>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full">
            <Text className="text-primary">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2 justify-between items-center">
            <View className="flex-row justify-between px-4" style={{width:"100%"}}>
            <ShopByCategory text='Poultry Name' price={2060} onPress={() => {}}/>
            <ShopByCategory iconState='secondary' text='Poultry Name' price={2060} onPress={() => {}}/>
            </View>
            <View className="flex-row justify-between px-4" style={{width:"100%"}}>
            <ShopByCategory text='Poultry Name' price={2060} onPress={() => {}}/>
            <ShopByCategory iconState='secondary' text='Poultry Name' price={2060} onPress={() => {}}/>
            </View>
            <View className="flex-row justify-between px-4" style={{width:"100%"}}>
            <ShopByCategory text='Poultry Name' price={2060} onPress={() => {}}/>
            <ShopByCategory iconState='secondary' text='Poultry Name' price={2060} onPress={() => {}}/>
            </View>
          </View>
        </View>
    </Wrapper>
      </ScrollView>
    <TabBar/>
    </>
  );
};

export default RoamingAcresMarket;
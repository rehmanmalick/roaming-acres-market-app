import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function SellerAccount() {
  const router = useRouter();
  
  return (
      <ScrollView 
        className="bg-white flex-1" 
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
    <Wrapper showBackButton={true}>
    <ProfileHeader account="buyer" route="/(tabs)/seller/seller-account"/>
        
        <View style={{paddingTop:120}}>
            <TouchableOpacity onPress={()=> router.push('/(tabs)/profile')} className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Profile</Text>
                <AntDesign name="caretright" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push('/(tabs)/seller/seller-orders')} className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Seller Dashboard</Text>
                <AntDesign name="caretright" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push('/notifications')} className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Notifications</Text>
                <Ionicons name="notifications" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Setting</Text>
                <AntDesign name="caretright" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Logout</Text>
                <MaterialIcons name="logout" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Delete Amount</Text>
                <MaterialIcons name="logout" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
        </View>
    </Wrapper>
      </ScrollView>
  );
}
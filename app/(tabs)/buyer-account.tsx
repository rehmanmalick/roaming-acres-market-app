import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View className="mb-2 mx-4">
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        className="flex flex-row justify-between items-center py-5 px-4 mb-4 shadow-lg shadow-gray-500/15 rounded-lg"
        style={{ backgroundColor: isCollapsed ? "#ffffff" : "#008080" }}
        activeOpacity={0.7}
      >
        <Text 
          className="text-base font-semibold" 
          style={{ color: isCollapsed ? "#000000" : "#ffffff" }}
        >
          {title}
        </Text>
        <AntDesign 
          name={isCollapsed ? 'caretright' : 'caretdown'} 
          size={12} 
          color={isCollapsed ? "#ffffff" : "#008080"} 
          style={{
            backgroundColor: isCollapsed ? "#008080" : "#ffffff", 
            padding: 3, 
            borderRadius: 2
          }}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View className="px-4 bg-white border border-gray-100 rounded-b-lg">
          {children}
        </View>
      </Collapsible>
    </View>
  );
};

export default function BuyerAccount() {
  const router = useRouter();
  
  return (
      <ScrollView 
        className="bg-white flex-1" 
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
    <Wrapper showBackButton={true}>
        <ProfileHeader />
        
        <View style={{paddingTop:120}}>
            <TouchableOpacity onPress={()=> router.push('/(tabs)/profile')} className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
                <Text className="text-base font-semibold text-gray-800">Profile</Text>
                <AntDesign name="caretright" size={12} color="#ffffff" style={{backgroundColor:"#008080" , padding:3, borderRadius:2}}/>
            </TouchableOpacity>
          <AccordionItem title="Buyer Dashboard">
            <TouchableOpacity onPress={()=> router.push('/(tabs)/wishlist')} className="flex flex-row justify-between items-center py-5 px-4 ">
                <Text className="text-base font-semibold text-gray-800">Wishlist</Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> router.push('/(tabs)/buyer-orders')} className="flex flex-row justify-between items-center py-5 px-4 ">
                <Text className="text-base font-semibold text-gray-800">Orders</Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280"/>
            </TouchableOpacity>
          </AccordionItem>
          
          <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
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
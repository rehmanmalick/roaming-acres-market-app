import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ProductComponent(){
      const [quantity, setQuantity] = useState(1);
      const increaseQuantity = () => setQuantity(quantity + 1);
      const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
      };
      const router = useRouter();
    return (
        <View style={{flex:1}} className="bg-white rounded-lg shadow-lg shadow-black/100 overflow-hidden m-2">
      
        <View className="h-40 flex-row items-center justify-center relative">
          <Image
            source={require('../assets/images/top-selling.png')} 
            className="w-full h-full"
            resizeMode="contain"
          />
          <TouchableOpacity onPress={()=> router.push('/chatting')} style={[styles.iconContainer]}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={'#008080'}
            />
          </TouchableOpacity>
        </View>
        
        <View className="p-3">
          <Text className="text-lg font-bold mb-1">Roaming Acres Limited Acres Gold</Text>
          <View className="flex-row justify-between items-center mb-2">
            <View className="mb-2">
                <View className="flex-row mr-2">
                    <Text className="text-lg">Price : $2060</Text>
                    <Text className="text-md text-gray-400 line-through ml-4 mt-1">$3060</Text>
                </View>
                <Text className="text-lg">Save : $1000</Text>
            </View>
                    <View className="flex flex-row items-center  pb-6">
                      <View className="flex flex-row items-center">
                        <TouchableOpacity
                          className={`w-10 h-10 p-2 mx-2 justify-center items-center rounded-full bg-gray-200 ${
                            quantity === 1 ? "bg-gray-100" : ""
                            }`}
                          onPress={decreaseQuantity}
                          disabled={quantity === 1}
                        >
                          <Ionicons
                            name="remove"
                            size={16}
                            color={quantity === 1 ? "#ccc" : "#333"}
                          />
                        </TouchableOpacity>
            
                        <Text className="text-base font-semibold mx-3">{quantity}</Text>
            
                        <TouchableOpacity
                          className="w-10 h-10 p-2 mx-2 justify-center items-center rounded-full bg-teal-600"
                          onPress={increaseQuantity}
                        >
                          <Ionicons name="add" size={16} color="white" />
                        </TouchableOpacity>
                      </View>
                    </View>
          </View>
            <Text className="text-lg text-gray-600 mb-1">Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({

    iconContainer: {
        position: 'absolute',
        top:0,
        right: 10,
        backgroundColor: '#ffffff',
        padding: 5,
    }
})
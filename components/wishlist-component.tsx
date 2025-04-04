import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface WishlistComponentProps {
  iconName: string;
  buttonText: string;
}

export default function WishlistComponent({ iconName, buttonText }: WishlistComponentProps) {
    return (
        <View className="bg-white rounded-lg shadow-lg shadow-black/10 overflow-hidden m-2 w-[160px]">
      
        <View className="h-32 items-center justify-center">
                    <View style={[
                      styles.iconContainer,
                     
                    ]}>
                      <Ionicons 
                        name="heart-outline" 
                        size={20}
                        color={'#008080'}
                      />
                    </View>
          <Image
            source={require('../assets/images/top-selling.png')} 
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        
        <View className="p-3">
          <Text className="text-lg font-bold mb-1">Roaming Acres Limited Acres Gold</Text>
          
          <View className="flex-row items-center mb-2">
            <Text className="text-md">Price : $2060</Text>
            <Text className="text-xs text-gray-400 line-through ml-2">$3060</Text>
          </View>
            <Text className="text-md">Save : $1000</Text>
          <View className="flex-row items-center py-2 mb-2">
            <Text className="text-md mt-3 text-gray-400 line-through ml-2">4.7</Text>
          </View>
          
          <TouchableOpacity className="bg-teal-600 py-2 rounded-md justify-center items-center mb-2 flex-row">
            <View className="bg-white mx-2 p-1.5 rounded-full">
            <Ionicons name={iconName} size={15} color="#008080" />
            </View>
            <Text className="text-white text-center px-2 text-md font-medium">{buttonText}</Text>
          </TouchableOpacity>
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
        borderColor:"#008080",
        borderWidth: 1,
    }
})
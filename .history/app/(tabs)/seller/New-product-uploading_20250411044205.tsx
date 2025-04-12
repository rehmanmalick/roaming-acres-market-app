import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker

const AddProductScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Store the selected image

  // Function to handle image selection
  const pickImage = async () => {
    // Ask for camera roll permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the camera roll is required!");
      return;
    }

    // Open image picker and set the selected image URI
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Update state with image URI
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: "https://placehold.co/40x40" }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View>
          <Text className="text-lg font-bold">Try Temp</Text>
          <Text className="text-xs text-gray-500">Seller Account</Text>
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-row mb-4">
        <Text className="mr-6 font-semibold text-blue-600">
          Add New Product
        </Text>
        <Text className="text-gray-400">Bulk Upload Products</Text>
      </View>

      {/* Image Upload Area */}
      <View
        className="border-2 border-blue-500 rounded-lg h-40 justify-center items-center mb-4"
        onTouchEnd={pickImage} // Trigger image picker on touch
      >
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        ) : (
          <Ionicons name="image-outline" size={40} color="gray" />
        )}
      </View>

      {/* Upload Buttons */}
      <View className="flex-row justify-between mb-4 bg-white p-2 rounded-lg shadow-sm">
        <View className="flex-1 mr-2">
          <Image
            source={{ uri: selectedImage || "https://placehold.co/100x100" }}
            className="w-full h-24 rounded-md"
          />
        </View>
        <Pressable
          onPress={pickImage} // Allow users to pick another image
          className="flex-1 ml-2 border border-gray-300 rounded-md justify-center items-center"
        >
          <Ionicons name="add" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">Add More</Text>
        </Pressable>
      </View>

      {/* Name Input */}
      <View className="mb-4">
        <Text className="text-sm mb-1">Name</Text>
        <TextInput
          placeholder="Give your product a name"
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </View>

      {/* Description Input */}
      <View className="mb-4">
        <Text className="text-sm mb-1">Description</Text>
        <TextInput
          placeholder="Describe your product clearly"
          className="border border-gray-300 rounded-md px-3 py-2"
          multiline
        />
      </View>

      {/* Pickup Location Picker */}
      <View className="mb-4">
        <Text className="text-sm mb-1">Pickup Location</Text>
        <View className="border border-gray-300 rounded-md">
          <Picker>
            <Picker.Item label="Select Your Product Pickup Location" value="" />
          </Picker>
        </View>
      </View>

      {/* Price and Sales Price */}
      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <Text className="text-sm mb-1">Price</Text>
          <TextInput
            placeholder="$"
            keyboardType="numeric"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </View>
        <View className="w-[48%]">
          <Text className="text-sm mb-1">Sales Price</Text>
          <TextInput
            placeholder="$"
            keyboardType="numeric"
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </View>
      </View>

      {/* Category and Quantity */}
      <View className="flex-row justify-between mb-6">
        <View className="w-[48%]">
          <Text className="text-sm mb-1">Category</Text>
          <View className="border border-gray-300 rounded-md">
            <Picker>
              <Picker.Item label="Please Select Your Category" value="" />
            </Picker>
          </View>
        </View>
        <View className="w-[48%]">
          <Text className="text-sm mb-1">Quantity</Text>
          <View className="flex-row border border-gray-300 rounded-md overflow-hidden items-center">
            <Pressable className="flex-1 items-center py-2">
              <Text className="text-xl">−</Text>
            </Pressable>
            <Text className="w-10 text-center">0</Text>
            <Pressable className="flex-1 items-center py-2">
              <Text className="text-xl">+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-between">
        <Pressable className="bg-green-600 px-6 py-3 rounded-md flex-1 mr-2">
          <Text className="text-white text-center font-semibold">
            UPLOAD PRODUCT
          </Text>
        </Pressable>
        <Pressable className="border border-gray-300 px-6 py-3 rounded-md flex-1 ml-2">
          <Text className="text-center font-semibold text-gray-600">
            CANCEL
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddProductScreen;

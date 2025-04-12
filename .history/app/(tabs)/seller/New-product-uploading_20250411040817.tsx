// ProductUploadScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function ProductUploadScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [price, setPrice] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission is required to access photos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-8">
      {/* Top Tabs */}
      <View className="flex-row justify-around mb-4">
        <Text className="text-primary font-bold border-b-2 border-primary pb-1">
          Add New Product
        </Text>
        <Text className="text-gray-400">Bulk Upload Products</Text>
      </View>

      {/* Upload Placeholder */}
      <Pressable
        onPress={pickImage}
        className="border-2 border-primary rounded-xl h-40 justify-center items-center mb-4"
      >
        <Image
          source={
            image
              ? { uri: image }
              : require('./assets/upload-icon.png') // Replace with your icon
          }
          className="w-16 h-16"
        />
      </Pressable>

      {/* Two upload options */}
      <View className="flex-row justify-between mb-4 bg-gray-100 rounded-lg p-2">
        <Pressable className="flex-1 items-center p-2 bg-white rounded-lg mr-2">
          {image && (
            <Image source={{ uri: image }} className="w-16 h-16 rounded" />
          )}
          <Text className="text-xs mt-1 text-gray-500">Photo Selected</Text>
        </Pressable>
        <Pressable
          onPress={pickImage}
          className="flex-1 items-center justify-center border border-dashed border-gray-300 rounded-lg"
        >
          <Text className="text-xs text-gray-500">No Photo</Text>
        </Pressable>
      </View>

      {/* Form Inputs */}
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-3 text-sm"
        placeholder="Give your product a name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-3 text-sm h-20"
        placeholder="Describe your product clearly"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-3 text-sm"
        placeholder="Select Your Product Pickup Location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />

      {/* Price Row */}
      <View className="flex-row justify-between mb-3">
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-3 w-[48%] text-sm"
          placeholder="Price $"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          className="border border-gray-300 rounded-md px-4 py-3 w-[48%] text-sm"
          placeholder="Sales Price $"
          value={salesPrice}
          onChangeText={setSalesPrice}
          keyboardType="numeric"
        />
      </View>

      {/* Category & Quantity */}
      <View className="flex-row justify-between mb-6">
        <View className="w-[48%] border border-gray-300 rounded-md px-2">
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={{ height: 48 }}
          >
            <Picker.Item label="Please Select Your Category" value="" />
            <Picker.Item label="Electronics" value="electronics" />
            <Picker.Item label="Fashion" value="fashion" />
            <Picker.Item label="Grocery" value="grocery" />
          </Picker>
        </View>
        <View className="w-[48%] flex-row items-center justify-between border border-gray-300 rounded-md px-3">
          <Pressable
            onPress={() => setQuantity(Math.max(0, quantity - 1))}
            className="p-1"
          >
            <Text className="text-xl">-</Text>
          </Pressable>
          <Text>{quantity}</Text>
          <Pressable
            onPress={() => setQuantity(quantity + 1)}
            className="p-1"
          >
            <Text className="text-xl">+</Text>
          </Pressable>
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between">
        <Pressable className="flex-1 bg-primary py-3 rounded-lg mr-2">
          <Text className="text-white text-center font-semibold text-sm">
            UPLOAD PRODUCT
          </Text>
        </Pressable>
        <Pressable className="flex-1 border border-primary py-3 rounded-lg ml-2">
          <Text className="text-primary text-center font-semibold text-sm">
            CANCEL
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

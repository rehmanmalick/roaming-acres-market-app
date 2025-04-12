// ProductUploadScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProductUploadScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [price, setPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission is required to access your photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-4">
        Add New Product
      </Text>

      <Pressable
        onPress={pickImage}
        className="border-2 border-dashed border-gray-300 rounded-xl h-48 items-center justify-center bg-gray-50 mb-4"
      >
        {image ? (
          <Image source={{ uri: image }} className="w-full h-full rounded-xl" />
        ) : (
          <Text className="text-gray-400">Click to Upload Product Photo</Text>
        )}
      </Pressable>

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3"
        placeholder="Give your product a name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3 h-20"
        placeholder="Describe your product clearly"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3"
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />

      <View className="flex-row justify-between mb-3">
        <TextInput
          className="border border-gray-300 rounded-lg p-3 w-[48%]"
          placeholder="Price $"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 w-[48%]"
          placeholder="Sales Price $"
          keyboardType="numeric"
          value={salesPrice}
          onChangeText={setSalesPrice}
        />
      </View>

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-3"
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <View className="flex-row items-center justify-between mb-6">
        <Pressable
          onPress={() => setQuantity(Math.max(0, quantity - 1))}
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
        >
          <Text className="text-xl">-</Text>
        </Pressable>
        <Text className="text-lg">{quantity}</Text>
        <Pressable
          onPress={() => setQuantity(quantity + 1)}
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center"
        >
          <Text className="text-xl">+</Text>
        </Pressable>
      </View>

      <View className="flex-row justify-between">
        <Pressable className="flex-1 mr-2 bg-green-500 py-3 rounded-lg">
          <Text className="text-white font-bold text-center">
            UPLOAD PRODUCT
          </Text>
        </Pressable>
        <Pressable className="flex-1 ml-2 bg-red-500 py-3 rounded-lg">
          <Text className="text-white font-bold text-center">CANCEL</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomTextInput from "@/components/ui/custom-input";
import Dropdown from "@/components/dropdown-component";
import { useRouter } from "expo-router";

const ProductUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [price, setPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const pickupOptions = [
    "Main Street, NY",
    "Downtown Plaza",
    "Central Park Gate",
  ];

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access photos is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(0, value));
  };

  const handleUpload = () => {
    // TODO: Perform actual upload logic here
    setModalVisible(true); // Show the success modal after uploading
  };

  return (
    <>
      {/* Image Upload */}
      <Pressable
        onPress={pickImage}
        className="border-2 border-gray-200 rounded-lg h-40 justify-center items-center mb-4"
      >
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../assets/images/addicon.png")}
            className="w-12 h-12"
            resizeMode="contain"
          />
        )}
      </Pressable>

      {/* Image Selection Feedback */}
      <View className="flex-row justify-between mb-4 bg-gray-50 p-2 rounded-lg">
        <Pressable className="flex-1 mr-2 bg-white p-2 rounded-md items-center">
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              className="w-20 h-20 rounded-md"
            />
          ) : (
            <Ionicons name="image-outline" size={32} color="gray" />
          )}
          <Text className="text-xs mt-1 text-gray-500">
            {selectedImage ? "Selected" : "No Photo"}
          </Text>
        </Pressable>
        <Pressable
          onPress={pickImage}
          className="flex-1 ml-2 border border-dashed border-gray-300 rounded-md justify-center items-center"
        >
          <Image
            source={require("../assets/images/addicon.png")}
            className="w-8 h-8 opacity-60"
            resizeMode="contain"
          />
          <Text className="text-xs text-gray-500 mt-1">Add Photo</Text>
        </Pressable>
      </View>

      {/* Product Details */}
      <CustomTextInput
        label="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        returnKeyType="next"
      />

      <CustomTextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
        inputClassName="h-32"
        placeholder="Enter description..."
        returnKeyType="done"
      />

      <Dropdown
        label="Pickup Location"
        variant="pickup"
        options={pickupOptions}
        selectedValue={pickupLocation}
        onValueChange={(value) => setPickupLocation(value)}
      />

      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <CustomTextInput
            label="Price"
            placeholder="$0.00"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>
        <View className="w-[48%]">
          <CustomTextInput
            label="Sales Price"
            placeholder="$0.00"
            value={salesPrice}
            onChangeText={setSalesPrice}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View className="flex-row justify-between mb-4">
        <View className="w-[48%]">
          <Dropdown
            label="Category"
            options={["Electronics", "Fashion", "Home & Garden", "Sports"]}
            selectedValue={category}
            onValueChange={(value) => setCategory(value)}
            focusedBorderColor="#008080"
            defaultBorderColor="#ccc"
          />
        </View>

        <View className="w-[48%]">
          <Text className="text-sm font-medium text-gray-700 mb-1">
            Quantity
          </Text>
          <View className="w-full h-14 border rounded-[3px] px-4 flex-row border-gray-300 items-center">
            <Pressable
              onPress={() => handleQuantityChange(quantity - 1)}
              className="flex-1 items-center py-2"
            >
              <Text className="text-xl">−</Text>
            </Pressable>
            <Text className="w-10 text-center">{quantity}</Text>
            <Pressable
              onPress={() => handleQuantityChange(quantity + 1)}
              className="flex-1 items-center py-2"
            >
              <Text className="text-xl">+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-between mb-8">
        <Pressable
          onPress={handleUpload}
          className="bg-[#008080] px-6 py-3 rounded-md flex-1 mr-2"
        >
          <Text className="text-white text-center font-semibold">
            UPLOAD PRODUCT
          </Text>
        </Pressable>
        <Pressable className="border border-gray-300 px-6 py-3 rounded-md flex-1 ml-2">
          <Text className="text-center font-semibold text-gray-700">
            CANCEL
          </Text>
        </Pressable>
      </View>

      {/* Success Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 50,
              width: "90%",
              alignItems: "center",
            }}
            className="flex flex-col gap-3"
          >
            <Image
              source={require("../assets/images/thumb.png")}
              style={{ width: 90, height: 90 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 18,
                marginVertical: 10,
                textAlign: "center",
                color: "#008080",
                fontWeight: 600,
              }}
            >
              Your product has been uploaded
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false); // Close modal
                router.push("/seller/home-screen"); // Navigate to the dashboard
              }}
              className="flex flex-row items-center gap-2 py-3 px-6 rounded-md"
            >
              <Text className="font-bold text-lg">Back to Home Page</Text>
              <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductUploadComponent;

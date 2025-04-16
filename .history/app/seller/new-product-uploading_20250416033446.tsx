import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import { useRouter } from "expo-router";

const ProductUploadScreen = () => {
  const [activeTab, setActiveTab] = useState("Add New Product");
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      <Wrapper>
        <ProfileHeader />
        <View className="px-3 py-8">
          {/* Tabs */}
          <View className="flex-row justify-between mb-4 px-7">
            {["Add New Product", "Bulk Upload Products"].map((tab, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setActiveTab(tab);
                  if (tab === "Bulk Upload Products") {
                    router.push("/bulk-upload");
                  }
                }}
                className="flex-1 items-center"
              >
                <View className="flex items-center">
                  <Text
                    className={`font-semibold text-lg ${
                      activeTab === tab
                        ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                        : "text-gray-400"
                    }`}
                  >
                    {tab}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {activeTab === "Add New Product" && (
            <>
              {/* Image Upload Section */}
              <Pressable
                onPress={pickImage}
                className="border-2 border-teal-600 rounded-lg h-[100px] justify-center items-center mb-4"
              >
                {selectedImage ? (
                  <Image
                    source={{ uri: selectedImage }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <>
                    <Image
                      source={require("../../assets/images/addicon.png")}
                      style={{ width: 70, height: 70 }}
                      resizeMode="contain"
                    />
                  </>
                )}
              </Pressable>

              {/* Image Selection Options */}
              <View className="flex-row justify-between mb-4 bg-gray-50 p-2 rounded-lg">
                <Pressable className="flex-1 mr-2 bg-white p-2 rounded-md items-center">
                  {selectedImage ? (
                    <Image
                      source={{ uri: selectedImage }}
                      className="w-16 h-16 rounded-md"
                    />
                  ) : (
                    <Ionicons name="image-outline" size={24} color="gray" />
                  )}
                  <Text className="text-xs mt-1 text-gray-500">
                    {selectedImage ? "Selected" : "No Photo"}
                  </Text>
                </Pressable>
                <Pressable
                  onPress={pickImage}
                  className="flex-1 ml-2 border border-dashed border-gray-300 rounded-md justify-center items-center"
                >
                  <Ionicons name="add" size={24} color="gray" />
                  <Text className="text-xs text-gray-500 mt-1">Add Photo</Text>
                </Pressable>
              </View>

              {/* Product Name */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1">
                  Name
                </Text>
                <TextInput
                  placeholder="Give your product a name"
                  value={name}
                  onChangeText={setName}
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
              </View>

              {/* Description */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1">
                  Description
                </Text>
                <TextInput
                  placeholder="Describe your product clearly"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={4}
                  className="border border-gray-300 rounded-md px-3 py-2 h-24"
                />
              </View>

              {/* Pickup Location */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </Text>
                <View className="border border-gray-300 rounded-md">
                  <Picker
                    selectedValue={pickupLocation}
                    onValueChange={(itemValue) => setPickupLocation(itemValue)}
                  >
                    <Picker.Item
                      label="Select Your Product Pickup Location"
                      value=""
                    />
                    <Picker.Item label="Main Store" value="main_store" />
                    <Picker.Item label="Warehouse" value="warehouse" />
                    <Picker.Item label="Outlet" value="outlet" />
                  </Picker>
                </View>
              </View>

              {/* Price and Sales Price */}
              <View className="flex-row justify-between mb-4">
                <View className="w-[48%]">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Price
                  </Text>
                  <TextInput
                    placeholder="$0.00"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    className="border border-gray-300 rounded-md px-3 py-2"
                  />
                </View>
                <View className="w-[48%]">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Sales Price
                  </Text>
                  <TextInput
                    placeholder="$0.00"
                    value={salesPrice}
                    onChangeText={setSalesPrice}
                    keyboardType="numeric"
                    className="border border-gray-300 rounded-md px-3 py-2"
                  />
                </View>
              </View>

              {/* Category and Quantity */}
              <View className="flex-row justify-between mb-6">
                <View className="w-[48%]">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Category
                  </Text>
                  <View className="border border-gray-300 rounded-md">
                    <Picker
                      selectedValue={category}
                      onValueChange={(itemValue) => setCategory(itemValue)}
                    >
                      <Picker.Item label="Select Category" value="" />
                      <Picker.Item label="Electronics" value="electronics" />
                      <Picker.Item label="Fashion" value="fashion" />
                      <Picker.Item label="Home & Garden" value="home_garden" />
                      <Picker.Item label="Sports" value="sports" />
                    </Picker>
                  </View>
                </View>
                <View className="w-[48%]">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </Text>
                  <View className="flex-row border border-gray-300 rounded-md overflow-hidden items-center">
                    <Pressable
                      onPress={() => handleQuantityChange(quantity - 1)}
                      className="flex-1 items-center py-2 bg-gray-100"
                    >
                      <Text className="text-xl">−</Text>
                    </Pressable>
                    <Text className="w-10 text-center">{quantity}</Text>
                    <Pressable
                      onPress={() => handleQuantityChange(quantity + 1)}
                      className="flex-1 items-center py-2 bg-gray-100"
                    >
                      <Text className="text-xl">+</Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View className="flex-row justify-between mb-8">
                <Pressable className="bg-teal-600 px-6 py-3 rounded-md flex-1 mr-2">
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
            </>
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default ProductUploadScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Wrapper from "@/components/wrapper";
import ProfileHeader from "@/components/profile-header";
import { useRouter } from "expo-router";
import CustomTextInput from "@/components/custom-input";
import Dropdown from "@/components/dropdown-component"; // Import the custom Dropdown

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
                className="border-2 border-teal-600 rounded-lg h-[200px] justify-center items-center mb-4"
              >
                {selectedImage ? (
                  <Image
                    source={{ uri: selectedImage }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/addicon.png")}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                  />
                )}
              </Pressable>
              {/* Image Selection Options */}
              <View className="flex-row justify-between mb-4 bg-gray-50 p-2 rounded-lg">
                <Pressable className="flex-1 mr-2 bg-white p-2 rounded-md items-center">
                  {selectedImage ? (
                    <Image
                      source={{ uri: selectedImage }}
                      className="w-20 h-20 rounded-md"
                    />
                  ) : (
                    <Ionicons name="image-outline" size={80} color="gray" />
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
                    source={require("../../assets/images/addicon.png")}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                  />
                  <Text className="text-xs text-gray-500 mt-1">Add Photo</Text>
                </Pressable>
              </View>

              {/* Product Name */}
              <CustomTextInput
                label="Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                returnKeyType="next"
              />

              {/* Description */}
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

              {/* Pickup Location (using custom Dropdown component) */}
              <Dropdown
                label="Pickup Location"
                options={["Main Store", "Warehouse", "Outlet"]}
                selectedValue={pickupLocation}
                onValueChange={(value) => setPickupLocation(value)}
                focusedBorderColor="#008080"
                defaultBorderColor="#ccc"
              />

              {/* Price and Sales Price */}
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
                {/* Category Dropdown */}
                <View className="w-[48%]">
                  <Dropdown
                    label="Category"
                    options={[
                      "Electronics",
                      "Fashion",
                      "Home & Garden",
                      "Sports",
                    ]}
                    selectedValue={category}
                    onValueChange={(value) => setCategory(value)}
                    focusedBorderColor="#008080"
                    defaultBorderColor="#ccc"
                  />
                </View>

                {/* Quantity Selector */}
                <View className="w-[48%]">
                  <Text className="text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </Text>
                  <View className="w-full h-14 border rounded-[3px] px-4 text-base flex-row border-gray-300 overflow-hidden items-center">
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
                <Pressable className="bg-[#008080] px-6 py-3 rounded-md flex-1 mr-2">
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

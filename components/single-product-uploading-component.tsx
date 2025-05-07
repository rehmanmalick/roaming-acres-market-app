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
import CustomTextInput from "@/components/ui/custom-input"; // Import your CustomTextInput
import Dropdown from "@/components/dropdown-component";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";

const ProductUploadComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const { setValue, watch } = useForm();
  const businessTypes = [
    "Sole Proprietorship",
    "Partnership",
    "LLC",
    "Corporation",
  ];

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Corrected with latest API
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  const onSubmit = (data: any) => {
    // Include the image URI in the form data
    const formDataWithImage = {
      ...data,
      selectedImage: selectedImage, // Add the image URI to the data
    };

    console.log("Form data with image submitted:", formDataWithImage); // Log the data and image URI

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
        control={control}
        name="name"
        label="Name"
        rules={{ required: "Product name is required" }}
      />

      <CustomTextInput
        control={control}
        name="description"
        label="Description"
        rules={{ required: "Description is required" }}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
        placeholder="Enter description..."
      />

      <Dropdown
        label="Pickup Location"
        variant="pickup"
        options={pickupOptions}
        selectedValue={watch("pickupLocation")}
        onValueChange={(value) => setValue("pickupLocation", value)}
      />

      <CustomTextInput
        control={control}
        name="price"
        label="Price"
        placeholder="$0.00"
        keyboardType="numeric"
        rules={{ required: "Price is required" }}
      />

      <CustomTextInput
        control={control}
        name="salesPrice"
        label="Sales Price"
        placeholder="$0.00"
        keyboardType="numeric"
        rules={{ required: "Sales price is required" }}
      />

      <Dropdown
        label="Type of Business"
        options={businessTypes}
        selectedValue={watch("businessType")}
        onValueChange={(value) => setValue("businessType", value)}
      />

      {/* Action Buttons */}
      <View className="flex-row justify-between mb-8">
        <Pressable
          onPress={handleSubmit(onSubmit)}
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

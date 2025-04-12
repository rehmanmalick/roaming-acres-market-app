import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import Wrapper from "@/components/wrapper";
import CustomTextInput from "./custom-input";
import CustomTextInput from "./../../../components/custom-input";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  name: string;
  description: string;
  pickupLocation: string;
  price: string;
  salesPrice: string;
  category: string;
  quantity: number;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ProductUploadScreen = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    pickupLocation: "",
    price: "",
    salesPrice: "",
    category: "",
    quantity: 0,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showAllErrors, setShowAllErrors] = useState(false);

  const nameRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const pickupLocationRef = useRef<TextInput>(null);
  const priceRef = useRef<TextInput>(null);
  const salesPriceRef = useRef<TextInput>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission is required to access photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Product name is required";
      case "description":
        return value.trim() ? "" : "Description is required";
      case "pickupLocation":
        return value.trim() ? "" : "Pickup location is required";
      case "price":
        if (!value.trim()) return "Price is required";
        if (isNaN(Number(value))) return "Price must be a number";
        return "";
      case "salesPrice":
        if (value && isNaN(Number(value)))
          return "Sales price must be a number";
        return "";
      case "category":
        return value.trim() ? "" : "Category is required";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((fieldName) => {
      const error = validateField(fieldName, String(formData[fieldName]));
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleQuantityChange = (value: number) => {
    setFormData((prev) => ({ ...prev, quantity: Math.max(0, value) }));
  };

  const handleSubmit = () => {
    setShowAllErrors(true);
    if (validateForm()) {
      // Handle successful form submission
      console.log("Form submitted:", formData);
      // router.push("/success"); // Uncomment if you want to navigate after submission
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 w-full bg-white px-6">
            <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-6">
              Add New Product
            </Text>

            {/* Image Upload Section */}
            <View className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-2">
                Product Image
              </Text>
              <TouchableOpacity
                onPress={pickImage}
                className="border-2 border-dashed border-[#008080] rounded-lg h-40 justify-center items-center"
              >
                {image ? (
                  <Image
                    source={{ uri: image }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="items-center">
                    <Text className="text-[#008080] text-lg">+</Text>
                    <Text className="text-gray-500 mt-2">Upload Image</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Form Fields */}
            <CustomTextInput
              label="Product Name"
              ref={nameRef}
              placeholder="Give your product a name"
              value={formData.name}
              onChangeText={(text) => handleChange("name", text)}
              returnKeyType="next"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              errorMessage={showAllErrors ? errors.name : undefined}
            />

            <CustomTextInput
              label="Description"
              ref={descriptionRef}
              placeholder="Describe your product clearly"
              value={formData.description}
              onChangeText={(text) => handleChange("description", text)}
              multiline
              numberOfLines={4}
              returnKeyType="next"
              onSubmitEditing={() => pickupLocationRef.current?.focus()}
              errorMessage={showAllErrors ? errors.description : undefined}
            />

            <CustomTextInput
              label="Pickup Location"
              ref={pickupLocationRef}
              placeholder="Select Your Product Pickup Location"
              value={formData.pickupLocation}
              onChangeText={(text) => handleChange("pickupLocation", text)}
              returnKeyType="next"
              onSubmitEditing={() => priceRef.current?.focus()}
              errorMessage={showAllErrors ? errors.pickupLocation : undefined}
            />

            {/* Price Row */}
            <View className="flex-row justify-between mb-4">
              <View className="w-[48%]">
                <CustomTextInput
                  label="Price ($)"
                  ref={priceRef}
                  placeholder="Price"
                  value={formData.price}
                  onChangeText={(text) => handleChange("price", text)}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => salesPriceRef.current?.focus()}
                  errorMessage={showAllErrors ? errors.price : undefined}
                />
              </View>
              <View className="w-[48%]">
                <CustomTextInput
                  label="Sales Price ($)"
                  ref={salesPriceRef}
                  placeholder="Sales Price"
                  value={formData.salesPrice}
                  onChangeText={(text) => handleChange("salesPrice", text)}
                  keyboardType="numeric"
                  returnKeyType="next"
                  errorMessage={showAllErrors ? errors.salesPrice : undefined}
                />
              </View>
            </View>

            {/* Category & Quantity */}
            <View className="flex-row justify-between mb-6">
              <View className="w-[48%]">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Category
                </Text>
                <View className="border border-gray-300 rounded-md">
                  <Picker
                    selectedValue={formData.category}
                    onValueChange={(itemValue) =>
                      handleChange("category", itemValue)
                    }
                    style={{ height: 48 }}
                  >
                    <Picker.Item
                      label="Select Category"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item label="Electronics" value="electronics" />
                    <Picker.Item label="Fashion" value="fashion" />
                    <Picker.Item label="Grocery" value="grocery" />
                  </Picker>
                </View>
                {showAllErrors && errors.category && (
                  <Text className="text-red-500 text-xs mt-1">
                    {errors.category}
                  </Text>
                )}
              </View>

              <View className="w-[48%]">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </Text>
                <View className="flex-row items-center justify-between border border-gray-300 rounded-md px-3 h-12">
                  <TouchableOpacity
                    onPress={() => handleQuantityChange(formData.quantity - 1)}
                    className="p-1"
                  >
                    <Text className="text-xl">-</Text>
                  </TouchableOpacity>
                  <Text>{formData.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleQuantityChange(formData.quantity + 1)}
                    className="p-1"
                  >
                    <Text className="text-xl">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Buttons */}
            <View className="flex-row justify-between mb-8">
              <TouchableOpacity
                className="flex-1 bg-[#008080] py-3 rounded-[3px] mr-2"
                onPress={handleSubmit}
              >
                <Text className="text-white text-center text-lg uppercase font-semibold">
                  Upload Product
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 border border-[#008080] py-3 rounded-[3px] ml-2"
                onPress={handleCancel}
              >
                <Text className="text-[#008080] text-center text-lg uppercase font-semibold">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default ProductUploadScreen;

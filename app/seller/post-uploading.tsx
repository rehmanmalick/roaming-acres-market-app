import Button from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Dropdown from "@/components/dropdown-component";

export default function Reviews() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [pickupLocation, setPickupLocation] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  const pickupOptions = [
    "Main Street, NY",
    "Downtown Plaza",
    "Central Park Gate",
  ];

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="items-center justify-center">
            <Text className="font-bold text-3xl">Create Post</Text>
          </View>

          <View className="bg-white p-6 rounded-lg">
            <View style={{ borderColor: "orange" }} className="border mb-6" />

            <View className="flex-row items-center mb-4">
              <SimpleLineIcons name="pencil" size={20} color="#008080" />
              <Text className="ml-2">Add detailed review</Text>
            </View>
            <TextInput
              className="border border-gray-300 rounded-lg p-4 h-32 text-start text-top mb-4"
              multiline={true}
              placeholder="Enter here"
              placeholderTextColor="#8391A1"
              value={reviewText}
              onChangeText={setReviewText}
            />

            <View className="flex-row items-center mb-4">
              <Ionicons name="camera-outline" size={24} color="#008080" />
              <Text className="ml-2">Add photo & videos review</Text>
            </View>

            <TouchableOpacity
              className="flex-row items-center justify-center border border-gray-300 rounded-lg p-4 h-32 mb-4"
              onPress={pickImage}
            >
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  className="w-full h-full rounded-lg"
                  resizeMode="cover"
                />
              ) : (
                <Ionicons name="camera-outline" size={24} color="#999999" />
              )}
            </TouchableOpacity>
            <Dropdown
              label="Pickup Location"
              variant="pickup"
              options={pickupOptions}
              selectedValue={pickupLocation}
              onValueChange={(value) => setPickupLocation(value)}
            />

            <View className="flex-row items-center mt-4">
              <Button
                title="Posts"
                state="primary"
                onPress={() => {
                  console.log("Submitting review:", {
                    rating,
                    reviewText,
                    image: selectedImage,
                  });
                  router.push("/seller/home-screen");
                }}
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

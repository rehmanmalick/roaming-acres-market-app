import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";

import Wrapper from "@/components/wrapper";
import CustomTextInput from "./../../../components/custom-input";

const BusinessRegistrationScreen: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    businessName: "",
    contactNumber: "",
    postalCode: "",
    email: "",
    address: "",
    city: "",
    state: "",
    type: "", // Initially empty
    nature: "",
  });

  const handleChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    router.push("/seller/verify-code");
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
        <View className="px-6">
          <Text className="text-[28px] font-bold mb-4">
            Register Your Business
          </Text>

          {/* Owner Name */}
          <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
            Business Owner*
          </Text>
          <View className="flex-row justify-between gap-6 mb-3">
            <View className="flex-1">
              <CustomTextInput
                value={formData.firstName}
                onChangeText={(text) => handleChange("firstName", text)}
                placeholder="First Name"
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                value={formData.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
                placeholder="Last Name"
              />
            </View>
          </View>

          <CustomTextInput
            label="Date of Birth"
            value={formData.dob}
            onChangeText={(text) => handleChange("dob", text)}
            placeholder="DD/MM/YYYY"
            keyboardType="numbers-and-punctuation"
          />

          <CustomTextInput
            label="Business Name"
            value={formData.businessName}
            onChangeText={(text) => handleChange("businessName", text)}
          />

          <View className="flex-row justify-between gap-6">
            <View className="flex-1">
              <CustomTextInput
                label="Contact Number"
                value={formData.contactNumber}
                onChangeText={(text) => handleChange("contactNumber", text)}
                keyboardType="phone-pad"
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                label="Postal / Zip Code"
                value={formData.postalCode}
                onChangeText={(text) => handleChange("postalCode", text)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <CustomTextInput
            label="E-mail"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomTextInput
            label="Address"
            value={formData.address}
            onChangeText={(text) => handleChange("address", text)}
            placeholder="Address"
          />

          <View className="flex-row justify-between gap-6">
            <View className="flex-1">
              <CustomTextInput
                label="City"
                value={formData.city}
                onChangeText={(text) => handleChange("city", text)}
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                label="State / Province"
                value={formData.state}
                onChangeText={(text) => handleChange("state", text)}
              />
            </View>
          </View>

          {/* ✅ Dropdown for Business Type */}
          <Text className="text-gray-500 text-sm font-semibold mb-1 mt-4 px-1">
            Type of Business
          </Text>
          <View className="border border-gray-300 rounded-lg px-2 py-3 bg-white mb-3">
            <RNPickerSelect
              placeholder={{ label: "Select Business Type", value: "" }}
              value={formData.type}
              onValueChange={(value) => handleChange("type", value)}
              items={[
                { label: "Restaurant", value: "restaurant" },
                { label: "Retail", value: "retail" },
              ]}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 4,
                  color: "#000",
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingVertical: 4,
                  color: "#000",
                },
                placeholder: {
                  color: "#888",
                },
              }}
            />
          </View>

          <CustomTextInput
            label="Business Nature"
            value={formData.nature}
            onChangeText={(text) => handleChange("nature", text)}
          />

          <TouchableOpacity
            className="w-full py-4 mt-6 rounded bg-[#008080] items-center"
            onPress={handleSubmit}
          >
            <Text className="text-white text-lg font-semibold uppercase">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default BusinessRegistrationScreen;

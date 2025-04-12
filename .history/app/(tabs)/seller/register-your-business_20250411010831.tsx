import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import Wrapper from "@/components/wrapper";
import CustomTextInput from "./../../../components/custom-input";

const BusinessRegistrationScreen: React.FC = () => {
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
    type: "Business",
    nature: "",
  });

  const handleChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    // Add validation & submit logic here
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 "
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="px-3 my-10 bg-white">
            <Text className="text-[28px] font-bold ">
              Register Your Business
            </Text>
            <View>
              <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
                cadc
              </Text>
              <View className="flex-row justify-between">
                <CustomTextInput
                  value={formData.firstName}
                  onChangeText={(text) => handleChange("firstName", text)}
                  placeholder="First Name"
                  className="w-full"
                />

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
              placeholder="Business Name"
            />

            <View className="flex-row justify-between space-x-3">
              <View className="flex-1">
                <CustomTextInput
                  label="Contact Number"
                  value={formData.contactNumber}
                  onChangeText={(text) => handleChange("contactNumber", text)}
                  keyboardType="phone-pad"
                  placeholder="Contact Number"
                />
              </View>

              <View className="flex-1">
                <CustomTextInput
                  label="Postal / Zip Code"
                  value={formData.postalCode}
                  onChangeText={(text) => handleChange("postalCode", text)}
                  placeholder="Postal Code"
                />
              </View>
            </View>

            <CustomTextInput
              label="E-mail"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomTextInput
              label="Address"
              value={formData.address}
              onChangeText={(text) => handleChange("address", text)}
              placeholder="Address"
            />

            <View className="flex-row justify-between space-x-3">
              <View className="flex-1">
                <CustomTextInput
                  label="City"
                  value={formData.city}
                  onChangeText={(text) => handleChange("city", text)}
                  placeholder="City"
                />
              </View>

              <View className="flex-1">
                <CustomTextInput
                  label="State / Province"
                  value={formData.state}
                  onChangeText={(text) => handleChange("state", text)}
                  placeholder="State"
                />
              </View>
            </View>

            <CustomTextInput
              label="Type of Business"
              value={formData.type}
              onChangeText={(text) => handleChange("type", text)}
              placeholder="Business"
            />

            <CustomTextInput
              label="Business Nature"
              value={formData.nature}
              onChangeText={(text) => handleChange("nature", text)}
              placeholder="E.g. Pest Control, Food, Tech"
            />

            <TouchableOpacity
              className="w-full py-4 mt-6 rounded bg-[#008080] items-center"
              onPress={handleSubmit}
            >
              <Text className="text-white text-lg font-semibold uppercase">
                Submit
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default BusinessRegistrationScreen;

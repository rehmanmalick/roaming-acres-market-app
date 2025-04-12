import React, { useState } from "react";
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.businessName)
      newErrors.businessName = "Business name is required";
    if (!formData.contactNumber || formData.contactNumber.length < 8)
      newErrors.contactNumber = "Valid contact number required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State/Province is required";
    if (!formData.type) newErrors.type = "Business type is required";
    if (!formData.nature) newErrors.nature = "Business nature is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("✅ Form Submitted:", formData);
      // You can send this to an API or next step here
    } else {
      console.log("❌ Validation failed.");
    }
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="px-6 pt-10 bg-white">
            <Text className="text-[28px] font-bold mb-6">
              Register Your Business
            </Text>

            {/* Repeat for each input with error logic */}
            <CustomTextInput
              label="First Name"
              value={formData.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
              placeholder="First Name"
              errorMessage={errors.firstName}
            />

            <CustomTextInput
              label="Last Name"
              value={formData.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
              placeholder="Last Name"
              errorMessage={errors.lastName}
            />

            <CustomTextInput
              label="Date of Birth"
              value={formData.dob}
              onChangeText={(text) => handleChange("dob", text)}
              placeholder="DD/MM/YYYY"
              keyboardType="numbers-and-punctuation"
              errorMessage={errors.dob}
            />

            <CustomTextInput
              label="Business Name"
              value={formData.businessName}
              onChangeText={(text) => handleChange("businessName", text)}
              placeholder="Business Name"
              errorMessage={errors.businessName}
            />

            <View className="flex-row justify-between space-x-3">
              <CustomTextInput
                label="Contact Number"
                value={formData.contactNumber}
                onChangeText={(text) => handleChange("contactNumber", text)}
                keyboardType="phone-pad"
                placeholder="Contact Number"
                errorMessage={errors.contactNumber}
                className="flex-1"
              />

              <CustomTextInput
                label="Postal / Zip Code"
                value={formData.postalCode}
                onChangeText={(text) => handleChange("postalCode", text)}
                placeholder="Postal Code"
                errorMessage={errors.postalCode}
                className="flex-1"
              />
            </View>

            <CustomTextInput
              label="E-mail"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              errorMessage={errors.email}
            />

            <CustomTextInput
              label="Address"
              value={formData.address}
              onChangeText={(text) => handleChange("address", text)}
              placeholder="Address"
              errorMessage={errors.address}
            />

            <View className="flex-row justify-between space-x-3">
              <CustomTextInput
                label="City"
                value={formData.city}
                onChangeText={(text) => handleChange("city", text)}
                placeholder="City"
                errorMessage={errors.city}
                className="flex-1"
              />

              <CustomTextInput
                label="State / Province"
                value={formData.state}
                onChangeText={(text) => handleChange("state", text)}
                placeholder="State"
                errorMessage={errors.state}
                className="flex-1"
              />
            </View>

            <CustomTextInput
              label="Type of Business"
              value={formData.type}
              onChangeText={(text) => handleChange("type", text)}
              placeholder="Business"
              errorMessage={errors.type}
            />

            <CustomTextInput
              label="Business Nature"
              value={formData.nature}
              onChangeText={(text) => handleChange("nature", text)}
              placeholder="E.g. Pest Control, Tech, Restaurant"
              errorMessage={errors.nature}
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

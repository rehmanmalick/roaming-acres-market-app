import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RegisterBusinessForm = () => {
  const [formData, setFormData] = useState({
    dob: "",
    contactNumber: "",
    postalCode: "",
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    typeOfBusiness: "",
    businessNature: "",
  });

  const formatDOB = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    let formatted = cleaned;
    if (cleaned.length > 2 && cleaned.length <= 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(
        2,
        4
      )}/${cleaned.slice(4, 8)}`;
    }
    return formatted;
  };

  const allowOnlyNumbers = (text: string) => text.replace(/[^0-9]/g, "");

  const handleChange = (name: string, value: string) => {
    let formattedValue = value;

    if (name === "dob") {
      formattedValue = formatDOB(value);
    }

    if (["contactNumber", "postalCode"].includes(name)) {
      formattedValue = allowOnlyNumbers(value);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Add validation and API call here
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-white p-5"
      >
        <Text className="text-2xl text-teal-700 font-bold text-center mb-6">
          Register Your Business
        </Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="First Name"
          value={formData.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Last Name"
          value={formData.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Date of Birth (DD/MM/YYYY)"
          keyboardType="number-pad"
          maxLength={10}
          value={formData.dob}
          onChangeText={(text) => handleChange("dob", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Business Name"
          value={formData.businessName}
          onChangeText={(text) => handleChange("businessName", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Contact Number"
          keyboardType="number-pad"
          value={formData.contactNumber}
          maxLength={11}
          onChangeText={(text) => handleChange("contactNumber", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Postal / Zip Code"
          keyboardType="number-pad"
          value={formData.postalCode}
          onChangeText={(text) => handleChange("postalCode", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Address"
          value={formData.address}
          onChangeText={(text) => handleChange("address", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="City"
          value={formData.city}
          onChangeText={(text) => handleChange("city", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="State / Province"
          value={formData.state}
          onChangeText={(text) => handleChange("state", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Type of Business"
          value={formData.typeOfBusiness}
          onChangeText={(text) => handleChange("typeOfBusiness", text)}
        />

        <TextInput
          className="border border-gray-300 rounded-lg p-3 text-base mb-4"
          placeholder="Business Nature"
          value={formData.businessNature}
          onChangeText={(text) => handleChange("businessNature", text)}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-teal-700 py-4 rounded-lg mt-4"
        >
          <Text className="text-white text-center font-bold text-base uppercase">
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterBusinessForm;

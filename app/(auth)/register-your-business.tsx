import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

import Wrapper from "@/components/common/wrapper";
import CustomTextInput from "../../components/ui/custom-input";
import Dropdown from "@/components/dropdown-component";
import { useForm } from "react-hook-form";
import Button from "@/components/button";

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  businessName: string;
  contactNumber: string;
  postalCode: string;
  email: string;
  address: string;
  city: string;
  state: string;
  type: string;
  nature: string;
};

const BusinessRegistrationScreen: React.FC = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
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
      type: "Sole Proprietorship",
      nature: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitting form:", data);
    router.push("/(auth)/verification-code");
  };

  const businessTypes = ["Sole Proprietorship", "Partnership"];

  // Reset form every time screen is focused
  useFocusEffect(
    useCallback(() => {
      reset({
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
        type: "Sole Proprietorship",
        nature: "",
      });
    }, [reset])
  );

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      <Wrapper showBackButton={true}>
        <View className="flex-1 mt-20">
          <Text className="text-3xl font-bold mb-8">
            Register Your Business
          </Text>

          <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
            Business Owner*
          </Text>
          <View className="flex-row justify-between gap-6">
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="firstName"
                placeholder="First Name"
                rules={{ required: "First name is required" }}
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="lastName"
                placeholder="Last Name"
                rules={{ required: "Last name is required" }}
              />
            </View>
          </View>

          <CustomTextInput
            control={control}
            name="dob"
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            keyboardType="numbers-and-punctuation"
            rules={{
              required: "Date of birth is required",
              pattern: {
                value: /^\d{2}\/\d{2}\/\d{4}$/,
                message: "Enter a valid date in DD/MM/YYYY format",
              },
            }}
          />

          <CustomTextInput
            control={control}
            name="businessName"
            label="Business Name"
            rules={{ required: "Business name is required" }}
          />

          <View className="flex-row justify-between gap-6">
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="contactNumber"
                label="Contact Number"
                keyboardType="phone-pad"
                rules={{ required: "Contact number is required" }}
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="postalCode"
                label="Postal / Zip Code"
                rules={{ required: "Postal code is required" }}
              />
            </View>
          </View>

          <CustomTextInput
            control={control}
            name="email"
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            rules={{
              required: "Email is required",
              validate: (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email",
            }}
          />

          <CustomTextInput
            control={control}
            name="address"
            label="Address"
            placeholder="Address"
            rules={{ required: "Address is required" }}
          />

          <View className="flex-row justify-between gap-6">
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="city"
                label="City"
                rules={{ required: "City is required" }}
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                control={control}
                name="state"
                label="State / Province"
                rules={{ required: "State is required" }}
              />
            </View>
          </View>

          <Dropdown
            label="Type of Business"
            options={businessTypes}
            selectedValue={watch("type")}
            onValueChange={(value: string) => setValue("type", value)}
          />

          <CustomTextInput
            control={control}
            name="nature"
            label="Business Nature"
            rules={{ required: "Nature is required" }}
          />

          {/* Using your Button component here */}
          <Button
            state="primary"
            title="SUBMIT"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
};

export default BusinessRegistrationScreen;

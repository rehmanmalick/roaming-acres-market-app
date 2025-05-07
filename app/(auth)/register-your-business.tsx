import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

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
  const [showDatePicker, setShowDatePicker] = useState(false);

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
        <View className="flex-1 mt-5">
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

          {/* Date of Birth with Date Picker */}
          <View className="mb-4">
            <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
              Date of Birth*
            </Text>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              className="border border-gray-300 px-4 py-4 rounded-lg"
            >
              <Text className={watch("dob") ? "text-black" : "text-gray-400"}>
                {watch("dob") || "Select Date"}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={watch("dob") ? new Date(watch("dob")) : new Date()}
                mode="date"
                display={Platform.OS === "ios" ? "inline" : "default"}
                maximumDate={new Date()}
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    const formattedDate = format(selectedDate, "dd/MM/yyyy");
                    setValue("dob", formattedDate);
                  }
                }}
              />
            )}

            {errors.dob && (
              <Text className="text-red-500 text-sm mt-1 px-2">
                {errors.dob.message}
              </Text>
            )}
          </View>

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

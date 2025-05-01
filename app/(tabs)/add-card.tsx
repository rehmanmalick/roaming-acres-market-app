import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import Wrapper from "@/components/wrapper";
import CustomTextInput from "../../components/ui/custom-input";
import { useRouter } from "expo-router";
import CustomSwitch from "@/components/custom-switch";

const COLORS = {
  primary: "#008080",
  error: "#FF4444",
  success: "#00C851",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
  border: "#DDDDDD",
} as const;

type FormData = {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvc: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const CreditCardForm = () => {
  const router = useRouter();
  const [switchOn, setSwitchOn] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvc: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [saveCard, setSaveCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cardNumberRef = useRef<TextInput>(null);
  const cardHolderRef = useRef<TextInput>(null);
  const expiryRef = useRef<TextInput>(null);
  const cvcRef = useRef<TextInput>(null);

  const formatCardNumber = (input: string): string => {
    const cleaned = input.replace(/\D/g, "");
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted.substring(0, 19);
  };

  const formatExpiry = (input: string): string => {
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.length > 2) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }
    return cleaned;
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "cardNumber":
        const cleanedCardNumber = value.replace(/\s/g, "");
        if (!cleanedCardNumber) return "Card number is required";
        if (cleanedCardNumber.length !== 16)
          return "Card number must be 16 digits";
        return "";
      case "cardHolder":
        return value.trim() ? "" : "Card holder name is required";
      case "expiry":
        if (!value.includes("/") || value.length !== 5)
          return "Invalid expiry date";
        const [month, year] = value.split("/");
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (Number(month) < 1 || Number(month) > 12) return "Invalid month";
        if (
          Number(year) < currentYear ||
          (Number(year) === currentYear && Number(month) < currentMonth)
        ) {
          return "Card expired";
        }
        return "";
      case "cvc":
        if (!value) return "CVC is required";
        if (value.length !== 3) return "CVC must be 3 digits";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof FormData, value: string) => {
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpiry(value);
    } else if (name === "cvc") {
      formattedValue = value.replace(/\D/g, "").substring(0, 3);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const cardData = {
        number: formData.cardNumber.replace(/\s/g, ""),
        holder: formData.cardHolder,
        expiry: formData.expiry,
        cvc: formData.cvc,
        save: saveCard,
      };

      console.log("Card data:", cardData);
      router.push({ pathname: "/payment/success" });
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error
          ? error.message
          : "Payment failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper showBackButton={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1  bg-white px-6  mt-8">
            <View className="flex-1 ">
              <View className="items-center justify-center mb-8">
                <Text className="font-bold text-3xl">Add Card</Text>
              </View>

              <CustomTextInput
                className="bg-[#F0F5FA] w-full h-14 border  rounded-[10px] px-4 text-base "
                focusedBorderColor="border-[#008080]"
                defaultBorderColor="border-[#F0F5FA]"
                cursorColor="#008080"
                selectionColor="#008080"
                label="Card Holder Name"
                ref={cardHolderRef}
                placeholder="John Doe"
                value={formData.cardHolder}
                onChangeText={(text) => handleChange("cardHolder", text)}
                returnKeyType="next"
                onSubmitEditing={() => expiryRef.current?.focus()}
                errorMessage={errors.cardHolder}
              />

              <CustomTextInput
                className="bg-[#F0F5FA] w-full h-14 border  rounded-[10px] px-4 text-base "
                focusedBorderColor="border-[#008080]"
                defaultBorderColor="border-[#F0F5FA]"
                cursorColor="#008080"
                selectionColor="#008080"
                label="Card Number"
                ref={cardNumberRef}
                placeholder="2134   _ _ _ _   _ _ _ _"
                keyboardType="numeric"
                value={formData.cardNumber}
                onChangeText={(text) => handleChange("cardNumber", text)}
                returnKeyType="next"
                maxLength={19}
                onSubmitEditing={() => cardHolderRef.current?.focus()}
                errorMessage={errors.cardNumber}
              />

              <View className="flex-row justify-between">
                <View className="w-[48%]">
                  <CustomTextInput
                    className="bg-[#F0F5FA] w-full h-14 border  rounded-[10px] px-4 text-base "
                    focusedBorderColor="border-[#008080]"
                    defaultBorderColor="border-[#F0F5FA]"
                    cursorColor="#008080"
                    selectionColor="#008080"
                    label="Expiry Date"
                    ref={expiryRef}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                    value={formData.expiry}
                    onChangeText={(text) => handleChange("expiry", text)}
                    returnKeyType="next"
                    maxLength={5}
                    onSubmitEditing={() => cvcRef.current?.focus()}
                    errorMessage={errors.expiry}
                  />
                </View>

                <View className="w-[48%]">
                  <CustomTextInput
                    className="bg-[#F0F5FA] w-full h-14 border rounded-[10px] px-4 text-base "
                    focusedBorderColor="border-[#008080]"
                    defaultBorderColor="border-[#F0F5FA]"
                    cursorColor="#008080"
                    selectionColor="#008080"
                    label="CVC"
                    ref={cvcRef}
                    placeholder="***"
                    keyboardType="numeric"
                    value={formData.cvc}
                    onChangeText={(text) => handleChange("cvc", text)}
                    returnKeyType="done"
                    maxLength={3}
                    onSubmitEditing={handleSubmit}
                    errorMessage={errors.cvc}
                  />
                </View>
              </View>

              <View className="flex-row items-center justify-start my-4 ">
                <CustomSwitch value={switchOn} onValueChange={setSwitchOn} />

                <Text className="text-[#111719] font-medium pl-2">
                  Save this card
                </Text>
              </View>
            </View>
            <View className="w-full mb-8">
              <TouchableOpacity
                className={`w-full py-4 rounded-[3px] bg-[#008080] flex items-center justify-center mt-2`}
                onPress={handleSubmit}
                disabled={isLoading}
                accessibilityLabel="Submit payment"
                accessibilityRole="button"
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                    ADD & MAKE PAYMENT
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default CreditCardForm;

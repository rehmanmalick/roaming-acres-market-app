import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custominput";
import Wrapper from "@/components/wrapper";
import { CreditCardInput } from "react-native-credit-card-input";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
  error: "#FF4444",
} as const;

type CardData = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  type: string;
};

const PaymentScreen = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState<Partial<CardData>>({});
  const [saveCard, setSaveCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    card: "",
    expiry: "",
    cvc: "",
  });
  const cardInputRef = useRef<any>();

  const validateForm = () => {
    const newErrors = {
      name: !cardData.name ? "Cardholder name is required" : "",
      card: !cardData.number ? "Card number is required" : "",
      expiry: !cardData.expiry ? "Expiry date is required" : "",
      cvc: !cardData.cvc ? "CVC is required" : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));

      Alert.alert(
        "Payment Successful",
        `Your payment of $100.00 was processed successfully. ${
          saveCard ? "Card has been saved." : ""
        }`,
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Payment Failed",
        error instanceof Error ? error.message : "Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardInputChange = (formData: any) => {
    setCardData({
      number: formData.values.number,
      expiry: formData.values.expiry,
      cvc: formData.values.cvc,
      type: formData.values.type,
    });
    setErrors({
      ...errors,
      card: formData.valid ? "" : "Invalid card number",
      expiry: formData.status.expiry === "valid" ? "" : "Invalid expiry date",
      cvc: formData.status.cvc === "valid" ? "" : "Invalid CVC",
    });
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 w-full bg-white px-6 justify-start mt-8">
            <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-8">
              Payment Details
            </Text>

            <CustomTextInput
              label="Cardholder Name"
              placeholder="Full Name on Card"
              value={cardData.name || ""}
              onChangeText={(text) => {
                setCardData({ ...cardData, name: text });
                setErrors({ ...errors, name: "" });
              }}
              autoCapitalize="words"
              errorMessage={errors.name}
            />

            <View className="mb-4">
              <Text className="text-sm text-gray-600 mb-1">Card Number</Text>
              <CreditCardInput
                ref={cardInputRef}
                onChange={handleCardInputChange}
                requiresName={false}
                requiresCVC={true}
                cardScale={1}
                labelStyle={{ color: COLORS.text }}
                inputStyle={{
                  color: COLORS.text,
                  fontSize: 16,
                }}
                validColor={COLORS.text}
                invalidColor={COLORS.error}
                placeholderColor={COLORS.gray}
              />
              {errors.card && (
                <Text className="text-xs text-red-500 mt-1">{errors.card}</Text>
              )}
            </View>
            <View className="mb-4">
              <Text className="text-sm text-gray-600 mb-1">Card Number</Text>
              <CreditCardInput
                ref={cardInputRef}
                onChange={handleCardInputChange}
                requiresName={false}
                requiresCVC={true}
                cardScale={1}
                labelStyle={{
                  color: COLORS.text,
                  fontSize: 12,
                  fontWeight: "400",
                  marginBottom: 4,
                }}
                inputStyle={{
                  color: COLORS.text,
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: errors.card ? COLORS.error : COLORS.gray,
                  borderRadius: 4,
                  padding: 12,
                  backgroundColor: "#F0F5FA",
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0, // Remove default bottom border
                  marginLeft: 0, // Adjust spacing as needed
                }}
                containerStyle={{
                  padding: 0, // Remove outermost container padding
                  margin: 0,
                }}
                validColor={COLORS.text}
                invalidColor={COLORS.error}
                placeholderColor={COLORS.gray}
                cardFontFamily="sans-serif" // Or your preferred font family
                allowScroll={true}
              />
              {errors.card && (
                <Text className="text-xs text-red-500 mt-1">{errors.card}</Text>
              )}
            </View>
            <CreditCardInput
              // Basic Styling
              inputStyle={{
                color: "#000",
                fontSize: 16,
                padding: 0, // Remove all padding
                paddingHorizontal: 0, // Remove horizontal padding
                paddingVertical: 0, // Remove vertical padding
                margin: 0, // Remove margins
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 4,
              }}
              // Container Styling
              inputContainerStyle={{
                padding: 0,
                margin: 0,
                borderBottomWidth: 0, // Remove default underline
              }}
              cardInput= {{
                paddingVertical: 0,
                paddingHorizontal: 0,
                borderColor: "#fff",
                borderTopWidth: 1,
                borderBottomWidth: 1,
              },
              // Label Styling
              labelStyle={{
                fontSize: 12,
                color: "#666",
                marginBottom: 4,
              }}
              // Card Preview Styling
              cardImageStyle={{
                width: 40,
                height: 25,
              }}
              // Global Container
              containerStyle={{
                padding: 0,
                margin: 0,
              }}
            />

            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-sm text-gray-600">
                Save card for future payments
              </Text>
              <Switch
                value={saveCard}
                onValueChange={setSaveCard}
                trackColor={{ false: COLORS.gray, true: COLORS.primary }}
                thumbColor={COLORS.white}
              />
            </View>

            <TouchableOpacity
              className={`w-full py-4 rounded-[3px] bg-[#008080] flex items-center justify-center mt-2`}
              onPress={handlePayment}
              disabled={isLoading}
              accessibilityLabel="Process payment"
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white w-full text-center text-lg uppercase font-semibold">
                  Pay $100.00
                </Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">
              <TouchableOpacity
                onPress={() => router.back()}
                accessibilityLabel="Cancel payment"
                accessibilityRole="button"
              >
                <Text className="text-[#008080] underline px-2 font-semibold">
                  Cancel Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default PaymentScreen;

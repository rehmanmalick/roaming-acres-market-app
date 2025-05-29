import React from "react";
import { ScrollView, Platform } from "react-native";
import Wrapper from "@/components/common/wrapper";
import BusinessRegistrationForm from "@/components/auth/business-registration-form";

const BusinessRegistrationScreen: React.FC = () => {
  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never" // Android
      contentInsetAdjustmentBehavior="never" // iOS
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      <Wrapper showBackButton={true}>
        <BusinessRegistrationForm />
      </Wrapper>
    </ScrollView>
  );
};

export default BusinessRegistrationScreen;

import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <View className="flex flew-col flex-1 items-center  gap-5 ">
          <View className="mb-16">
            <Text className="text-center text-4xl font-semibold">
              Order Details
            </Text>
            <Text className="text-center text-3xl font-extrabold">
              Order ID: #0000
            </Text>
            <Text className="text-[#737373] text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </Wrapper>
    </>
  );
}

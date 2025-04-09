import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <Wrapper showBackButton={true}>
        <View className="flex flew-col flex-1 items-center justify-center gap-5 ">
          <View className="mb-16">
            <Text className="text-start w-full text-[36.41px] font-normal mb-4 max-w-80">
              Select Your Account{" "}
            </Text>
            <Text className="text-[#737373] text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View className="flex flex-row justify-center items-center mb-32">
            <Button
              state="primary"
              title="Buyer Account"
              onPress={() => router.push("../welcome")}
            />
            <Button
              state="secondary"
              title="Seller Account"
              onPress={() => router.push("../home-screen")}
              // onPress={() => router.push("/product")}
            />
          </View>
        </View>
      </Wrapper>
    </>
  );
}

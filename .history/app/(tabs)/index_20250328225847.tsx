import Button from "@/components/button";
import ShopByCategory from "@/components/shop-by-category";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <View className="flex flew-col flex-1 items-center justify-evenly gap-5 ">
          <View>
            <Text className="text-start w-full text-[36.41px] font-normal mb-4 max-w-80">
              Select Your Account{" "}
            </Text>
            <Text className="text-[#737373] text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "15",
            }}
          >
            <Button
              state="primary"
              title="Buyer Account"
              onPress={() => router.push("/welcome")}
            />
            <Button
              state="secondary"
              title="Seller Account"
              onPress={() => router.push("/welcome")}
            />
          </View>
        </View>
      </Wrapper>
    </>
  );
}

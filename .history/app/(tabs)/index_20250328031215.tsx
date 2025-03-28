import Button from "@/components/button";
import ShopByCategory from "@/components/shop-by-category";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function SelectYourAccount() {
  return (
    <>
      <Wrapper>
        <View className="flex flex-1 items-center justify-center  gap-3">
          <Text className="text-start w-full text-[36.41px] font-normal mb-4 max-w-80">
            Select Your Account{" "}
          </Text>
          <Text className="text-[#737373] text-[17px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button state="primary" title="Buyer Account" />
            <Button state="secondary" title="Seller Account" />
          </View>
        </View>
      </Wrapper>
    </>
  );
}

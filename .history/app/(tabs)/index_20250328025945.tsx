import Button from "@/components/button";
import ShopByCategory from "@/components/shop-by-category";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function SelectYourAccount() {
  return (
    <>
      <Wrapper>
        <View className="flex flex-1">
          <View className="flex flex-row flex">
            <Button state="primary" title="Hello" />
            <Button state="secondary" title="Hello" />
            <Button state="disable" title="Hello" />
          </View>
        </View>
        <ShopByCategory text={"abcd"} />
      </Wrapper>
    </>
  );
}

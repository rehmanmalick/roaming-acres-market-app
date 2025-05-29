import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import TopSellingProductComponent from "@/components/top-selling-product-component";

export default function TopSellingProducts() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="mb-16">
            <Text className="text-[25px] font-bold ml-8 mt-4">
              Top-Selling Products
            </Text>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <TopSellingProductComponent />
              <TopSellingProductComponent />
              <TopSellingProductComponent />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <TopSellingProductComponent />
              <TopSellingProductComponent />
              <TopSellingProductComponent />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <TopSellingProductComponent />
              <TopSellingProductComponent />
              <TopSellingProductComponent />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <TopSellingProductComponent />
              <TopSellingProductComponent />
              <TopSellingProductComponent />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

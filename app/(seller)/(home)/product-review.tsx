import Button from "@/components/ui/button";
import ReviewComponent from "@/components/review-component";
import WishlistComponent from "@/components/wishlist-component";
import Wrapper from "@/components/common/wrapper";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function ProductReview() {
  const router = useRouter();

  return (
    <>
      <ScrollView
        className="bg-white"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="flex-1">
            <View className="items-center justify-center  pb-4  border-b border-[#E26D08]">
              <Text className="font-bold text-3xl ">Reviews</Text>
            </View>

            <View className="flex  py-5">
              <WishlistComponent showButton={false} showHeartIcon={false} />
            </View>

            <View className="border-b border-[#BCBCBC]  pb-6">
              <Text className="font-bold text-2xl my-4">Product Detail</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Text>
            </View>

            <View className=" py-4">
              <ReviewComponent
                name="Eleanor Pena"
                review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                rating={4}
                daysAgo={2}
              />
            </View>
            <View className="flex-row justify-end items-center  pb-3">
              <TouchableOpacity
                className="bg-white py-1 "
                onPress={() => router.push("/(seller)/(home)/write-review")}
              >
                <Text className="text-primary text-[#008080] font-semibold">
                  View ALL
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 pb-6">
              <Button
                state="primary"
                title="BACK TO HOME"
                onPress={() => router.push("/(seller)/(home)/home")}
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

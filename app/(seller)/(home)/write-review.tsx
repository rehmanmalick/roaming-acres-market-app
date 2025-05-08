import Button from "@/components/ui/button";
import ReviewComponent from "@/components/review-component";
import Wrapper from "@/components/common/wrapper";
import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";

export default function WriteReview() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="items-center justify-center pb-4  border-b border-[#E26D08]">
            <Text className="font-bold text-3xl ">Reviews</Text>
          </View>

          <View className="flex-1 flex-col gap-3 py-5">
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
            <ReviewComponent
              name="Eleanor Pena"
              review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              rating={4}
              daysAgo={2}
            />
          </View>

          <View className="flex-1 justify-end pb-5 ">
            <Button
              state="primary"
              title="BACK TO HOME"
              onPress={() => router.push("/(seller)/(home)/home")}
            />
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

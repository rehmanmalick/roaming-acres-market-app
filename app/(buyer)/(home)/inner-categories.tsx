import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import InnerCategoriesComponent from "@/components/inner-categories-component";

export default function InnerCategories() {
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
              Our Categories
            </Text>
            <View className="flex flex-row justify-between items-center mt-9 ">
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 ">
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 ">
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
              <InnerCategoriesComponent text="Fresh Eggs" price={20} />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

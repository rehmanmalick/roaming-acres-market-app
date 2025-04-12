import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import ShopCategory from "@/components/shop-categories";

export default function Categories() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <View className="mb-16">
            <Text className="text-[25px] text-center font-bold ml-9 mt-4">
              Our Categories
            </Text>
            <Text className="text-[24px]  font-bold ml-6 mt-4">
              Our Categories
            </Text>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              
              <ShopCategory
                source={require("@/assets/images/cow.png")}
                text="Cattle"
                onPress={() => router.push("/categories")}
              />
              <ShopCategory
                source={require("@/assets/images/pig.png")}
                text="Pigs"
                onPress={() => router.push("/categories")}
              />
              <ShopCategory
                source={require("@/assets/images/sheep.png")}
                text="Sheep"
                onPress={() => router.push("/categories")}
              />
              <ShopCategory
                source={require("@/assets/images/goat.png")}
                text="Goats"
                onPress={() => router.push("/categories")}
              />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <ShopCategory
                source={require("@/assets/images/birds.png")}
                text="Birds"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/eggs.png")}
                text="Eggs"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/chick.png")}
                text="Chicks"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/duck.png")}
                text="Ducks"
                onPress={() => router.push("/inner-categories")}
              />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <ShopCategory
                source={require("@/assets/images/birds.png")}
                text="Birds"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/eggs.png")}
                text="Eggs"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/chick.png")}
                text="Chicks"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/duck.png")}
                text="Ducks"
                onPress={() => router.push("/inner-categories")}
              />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <ShopCategory
                source={require("@/assets/images/birds.png")}
                text="Birds"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/eggs.png")}
                text="Eggs"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/chick.png")}
                text="Chicks"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/duck.png")}
                text="Ducks"
                onPress={() => router.push("/inner-categories")}
              />
            </View>
            <View className="flex flex-row justify-between items-center mt-9 px-4">
              <ShopCategory
                source={require("@/assets/images/birds.png")}
                text="Birds"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/eggs.png")}
                text="Eggs"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/chick.png")}
                text="Chicks"
                onPress={() => router.push("/inner-categories")}
              />
              <ShopCategory
                source={require("@/assets/images/duck.png")}
                text="Ducks"
                onPress={() => router.push("/inner-categories")}
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

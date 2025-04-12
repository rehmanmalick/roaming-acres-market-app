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
            <Text className="text-[20px]  font-bold ml-7 mt-9">Livestock</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <ShopCategory
                  source={require("@/assets/images/cow.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/pig.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sheep.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[20px]  font-bold ml-7 mt-9">Poultry</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <ShopCategory
                  source={require("@/assets/images/chicken.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/geese.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/turkeys.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/Ducks.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[20px]  font-bold ml-7 mt-9">Poultry</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <ShopCategory
                  source={require("@/assets/images/cow.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/pig.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sheep.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[20px]  font-bold ml-7 mt-9">Poultry</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <ShopCategory
                  source={require("@/assets/images/cow.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/pig.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sheep.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>

            <Text className="text-[20px]  font-bold ml-7 mt-9">Poultry</Text>
            <View className="flex flex-row justify-between items-center mt-4 px-4">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <ShopCategory
                  source={require("@/assets/images/cow.png")}
                  text="Cattle"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/pig.png")}
                  text="Pigs"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/sheep.png")}
                  text="Sheep"
                  onPress={() => router.push("/inner-categories")}
                />
                <ShopCategory
                  source={require("@/assets/images/goat.png")}
                  text="Goats"
                  onPress={() => router.push("/inner-categories")}
                />
              </ScrollView>
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

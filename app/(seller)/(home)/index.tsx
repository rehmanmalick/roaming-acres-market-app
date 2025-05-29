import Wrapper from "@/components/common/wrapper";
import Button from "@/components/ui/button";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const SellerHomeScreen = () => {
  const router = useRouter();

  return (
    <>
      <ScrollView
        className="bg-white"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
      >
        <Wrapper
          showFilterButton={true}
          showMenuButton={true}
          menuLink="/(seller)/(home)/seller-account"
          showProfileHeader={true}
          profileHeaderRoute="/(seller)/profile-seller"
        >
          <View className=" flex-1">
            <View className="flex-row justify-between ">
              <View>
                <Text className="text-2xl font-bold">Welcome</Text>
                <Text className="text-3xl font-bold mt-2">
                  Roaming Acres Market
                </Text>
              </View>

              <View className="flex-row absolute right-0 top-0 gap-1">
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/(seller)/(message)/message",
                      params: { tab: "Messages" },
                    })
                  }
                  className="relative"
                >
                  <MaterialCommunityIcons
                    name="message-text-outline"
                    size={24}
                    color="#008080"
                    style={{
                      borderWidth: 1,
                      borderColor: "#008080",
                      borderRadius: 6,
                      padding: 4,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/(seller)/(message)/message",
                      params: { tab: "All Notifications" },
                    })
                  }
                  className="relative"
                >
                  <Ionicons
                    name="notifications"
                    size={24}
                    color="white"
                    style={{
                      borderWidth: 1,
                      borderColor: "#008080",
                      backgroundColor: "#008080",
                      borderRadius: 6,
                      padding: 4,
                    }}
                  />
                  <View
                    className="absolute bg-orange-500 rounded-full"
                    style={{ width: 10, height: 10, top: -2, right: -2 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-[#008080] px-4 py-7 my-4 rounded-xl">
              <View className="flex flex-row justify-between mb-6 gap-2">
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Completed Orders
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Cancel Orders
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Total Orders
                  </Text>
                </View>
              </View>
              <View className="flex flex-row justify-between gap-1">
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Ship On Time
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Positive Feedback
                  </Text>
                </View>
                <View>
                  <Text className="text-yellow-300 text-md font-semibold mb-2">
                    0.0
                  </Text>
                  <Text className="text-white text-sm font-semibold">
                    Chat Response
                  </Text>
                </View>
              </View>
            </View>

            {/* order */}
            <View className="mt-4 ">
              <View className="flex-row justify-between items-center pb-3">
                <Text className="text-2xl font-extrabold">Orders</Text>
                <TouchableOpacity
                  className="bg-white py-1 "
                  onPress={() => router.push("/(seller)/(orders)/orders")}
                >
                  <Text className="text-primary text-[#8B8B8B] font-semibold">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row items-center justify-between ">
              <View className="">
                <View className="bg-[#008080] items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">New</Text>
                </View>
              </View>
              <View className="">
                <View className="bg-orange-500 items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Confirmed</Text>
                </View>
              </View>
              <View className="">
                <View className="bg-yellow-300 items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Delivered</Text>
                </View>
              </View>
              <View className="">
                <View className="bg-black items-center justify-center py-6 px-8 rounded-md">
                  <Text className="text-white text-3xl">0</Text>
                </View>
                <View>
                  <Text className="text-center mt-2">Cancelled</Text>
                </View>
              </View>
            </View>

            {/* product */}
            <View className="mt-8 ">
              <View className="pb-3">
                <Text className="text-2xl font-extrabold">Products</Text>
                <TouchableOpacity className="bg-white py-2">
                  <Text className="text-primary ">Bulk Upload Template</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row mt-2 gap-4">
              <View className="flex-1">
                <Button
                  state="secondary"
                  title="ADD A NEW"
                  showIcon={true}
                  iconName={"add"}
                  onPress={() =>
                    router.push({
                      pathname: "/(seller)/(home)/new-product-uploading",
                      params: { tab: "Add New Product" },
                    })
                  }
                />
              </View>
              <View className="flex-1">
                <Button
                  state="secondary"
                  title="BULK UPLOAD"
                  showIcon={true}
                  iconName={"add"}
                  onPress={() =>
                    router.push({
                      pathname: "/seller/new-product-uploading",
                      params: { tab: "Bulk Upload Products" },
                    })
                  }
                />
              </View>
            </View>
            <View className="py-4">
              <Button
                state="secondary"
                title="VIEW ALL"
                onPress={() => router.push("/(seller)/(home)/view-product")}
              />
            </View>

            {/* earnings */}
            <View className="mt-4 py-2  border-b border-[#EBEBEB]">
              <View className="flex-row justify-between items-center pb-3">
                <Text className="text-2xl font-extrabold">Earnings</Text>
                <TouchableOpacity
                  className="bg-white py-1 "
                  onPress={() => router.push("/(seller)/(earnings)/earnings")}
                >
                  <Text className="text-primary text-[#8B8B8B] font-semibold">
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row  py-2 justify-between mt-2">
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Total Earning
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$200</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Avg. Selling Price
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$87.55</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Pending Clearance
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$350.66</Text>
              </View>
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Earning in January
                </Text>
                <Text className="text-teal-600 font-bold text-xl">$500</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Active Orders
                </Text>
                <Text className="text-teal-600 font-bold text-xl">05</Text>
                <Text className="mb-1 font-semibold text-lg mt-3">
                  Cancelled Orders
                </Text>
                <Text className="text-teal-600 font-bold text-xl">02</Text>
              </View>
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
};

export default SellerHomeScreen;

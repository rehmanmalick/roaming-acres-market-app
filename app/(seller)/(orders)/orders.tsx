import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/ui/button";
import OrderCard from "@/components/order-card";

export default function SellerOrder() {
  const router = useRouter();

  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never" // Android
      contentInsetAdjustmentBehavior="never" // iOS
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
    >
      <Wrapper
        showBackButton={true}
        showFilterButton={true}
        showProfileHeader={true}
        profileHeaderRoute="/(seller)/profile-seller"
      >
        <View className=" flex-1 flex-col">
          <View className="  mt-5">
            <View className="flex  flex-row gap-5">
              <View className="flex-1">
                <Button state="primary" title="Orders" />
              </View>
              <View className="flex-1">
                <Button
                  state="secondary"
                  title="Inventory"
                  onPress={() => router.push("/(seller)/(inventory)/inventory")}
                />
              </View>
            </View>
            <View className="flex p-4  mt-6 rounded-xl  bg-[#008080]">
              <View className="flex flex-row justify-between">
                <Text className="text-white">Feed Order Value</Text>
                <Text className="text-[#F8E473]">-10,56,180</Text>
              </View>
              <View className="flex flex-row mt-6 justify-between">
                <Text className="text-white">Order Bags Quantity</Text>
                <Text className="text-[#F8E473]">0</Text>
              </View>
              <View className="flex  mt-6 items-center">
                <TouchableOpacity
                  onPress={() => router.push("/(seller)/(earnings)/earnings")}
                  className="flex flex-row justify-center items-center"
                >
                  <Text className="text-[#F8E473] text-sm font-bold">
                    View Details
                  </Text>
                  <Ionicons name="chevron-forward" size={16} color="#F8E473" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-8 ">
              <View className="flex-row justify-between items-center pb-3">
                <Text className="text-xl font-bold">All Orders</Text>
                <TouchableOpacity
                  onPress={() =>
                    router.push("/(seller)/(orders)/pending-order-view-details")
                  }
                  className="bg-white py-1 "
                >
                  <Text className="text-primary font-bold text-[#8B8B8B]">
                    VIEW ALL
                  </Text>
                </TouchableOpacity>
              </View>

              <View className=" justify-center item-center space-x-4">
                <OrderCard
                  orderId="1010"
                  status="Pending"
                  amount="$120"
                  orderedAt="2025-05-07"
                  addressLine1="House No–ABC 00000"
                  addressLine2="Main Street, NY"
                  directionButton={true}
                  onPressDetails={() => console.log("Details pressed")}
                  onPressDirection={() => console.log("Direction pressed")}
                  onPressStatus={() => console.log("status")}
                />
                <OrderCard
                  orderId="1020"
                  status="Completed"
                  amount="$200"
                  orderedAt="2025-05-06"
                  directionButton={true}
                  onPressDetails={() => console.log("Details pressed")}
                  onPressStatus={() => console.log("status")}
                />
                <OrderCard
                  orderId="1030"
                  status="Cancelled"
                  amount="$90"
                  orderedAt="2025-05-05"
                  directionButton={true}
                  onPressDetails={() => console.log("Details pressed")}
                  onPressStatus={() => console.log("status")}
                />
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

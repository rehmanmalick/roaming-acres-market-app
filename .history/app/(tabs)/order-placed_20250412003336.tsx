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
import CheckoutComponent from "@/components/checkout-component";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function OrderPlaced() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper>
          <View className="items-center mt-9">
            <Image
              source={require("../../assets/images/tick.png")}
              style={{ width: 72, height: 72 }}
            />
          </View>
          <Text className="text-4xl text-center mt-5 font-bold mx-9 text-gray-600">
            Yay! Your order has been placed.
          </Text>
          <Text className="text-lg text-center my-6 mx-9 ">
            Your order would be pick up in the 1 to 3 Working days. Thanks.
          </Text>
          <Text className="text-lg text-center font-bold mx-9 mb-4">
            Order ID: #0000
          </Text>
          <CheckoutComponent
            mainText="Home - 123 Main St, Apt 4B"
            subText="Pick up Point"
            icon="location-outline"
            TextIcon={true}
          />
          <View className="flex mt-8 flex-row justify-between items-center px-5">
            <View className="flex flex-row items-center">
              <AntDesign name="clockcircleo" size={14} color={"#60635E"} />
              <Text className="ml-2">Estimated time</Text>
            </View>
            <Text>03 Days</Text>
          </View>
          <View className="flex flex-row mb-2 py-4 justify-between items-center px-5">
            <View className="flex flex-row items-center">
              <Ionicons name="card-outline" size={14} color={"#60635E"} />
              <Text className="ml-2">Amount Paid</Text>
            </View>
            <Text>$2490</Text>
          </View>
          <View className="my-3">
            <Button
              state="primary"
              title="Order Confirmation"
              onPress={() => router.push("/order-recived")}
            />
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

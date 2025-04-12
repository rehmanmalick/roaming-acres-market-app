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

export default function OrderRecieved() {
  const router = useRouter();
  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true} showPeriodButton={true}>
          <View className="items-center justify-center mb-9">
            <Text className="font-bold text-3xl">Orders Status!</Text>
          </View>
          <Text className="text-6xl text-center my-9 font-bold mx-9 text-gray-600">
            Your order has been placed.
          </Text>
          <CheckoutComponent
            mainText="Home - 123 Main St, Apt 4B"
            subText="Pick up Point"
            icon="location-outline"
          />
          <View className="mt-9">
            <Button
              state="primary"
              title="CHAT with seller"
              onPress={() => router.push("/reviews")}
            />
          </View>
          <View className="mt-9">
            <Button
              state="primary"
              title="Order PICKED UP!"
              onPress={() => router.push("/reviews")}
            />
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

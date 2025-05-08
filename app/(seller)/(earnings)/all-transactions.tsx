import TransactionComponent from "@/components/transaction-component";
import Wrapper from "@/components/common/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { View, Text, ScrollView, TextInput } from "react-native";

export default function BuyerOrders() {
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
        showPeriodButton={true}
        showBackButton={true}
        showProfileHeader={true}
        profileHeaderRoute="/(seller)/profile-seller"
      >
        <View className="  flex-row justify-between gap-3 items-center">
          <View className="mt-4 relative  w-[55%]">
            <Text className="text-xl  font-bold">Transactions History</Text>
            <View className="border-b-2 mt-2 w-[45%]"></View>
          </View>
          <View className="mt-4 relative w-[40%]">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search"
              placeholderTextColor="#8391A1"
            />
            <View className="absolute left-4 top-4">
              <Ionicons name="search" size={18} color="#8391A1" />
            </View>
          </View>
        </View>

        <View className="py-4">
          <TransactionComponent
            text="Transfer to card"
            transactionId="698094554317"
            price={100}
            status="pending"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Cash-in"
            subText="From ABC Bank ATM"
            transactionId="698094554317"
            price={100}
            status="confirmed"
            date="17 Jan 2025"
            time="11:21 AM"
            imageSource={require("../../../assets/images/cashpayment.png")}
          />
          <TransactionComponent
            text="Cashback from purchase"
            subText="Purchase from Apps"
            transactionId="698094554317"
            price={3.21}
            status="cancelled"
            date="17 Jan 2025"
            time="11:21 AM"
            imageSource={require("../../../assets/images/cashback.png")}
          />
          <TransactionComponent
            text="Transfer to card"
            transactionId="698094554317"
            price={100}
            status="confirmed"
            date="17 Jan 2025"
            time="11:21 AM"
          />
          <TransactionComponent
            text="Transfer to card"
            subText="Not enough funds"
            transactionId="698094554317"
            price={100}
            status="pending"
            date="17 Jan 2025"
            time="11:21 AM"
          />
        </View>
      </Wrapper>
    </ScrollView>
  );
}

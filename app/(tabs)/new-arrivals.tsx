
import Wrapper from "@/components/wrapper";
import {Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import NewArrival from "@/components/new-arrival-component";

export default function NewArrivals() {
  const router = useRouter();
  return (
    <>
          <ScrollView 
          className="bg-white flex-1" 
          bounces={false}
            contentContainerStyle={{paddingBottom: 20}}
            >
      <Wrapper showBackButton={true}>
          <View className="mb-16">
            <Text className="text-[25px] font-bold ml-8 mt-4">
              New Arrivals
            </Text>
              <View className="flex flex-row justify-between items-center mt-9 px-4">
                <NewArrival price={50}/>
                <NewArrival price={50}/>
                <NewArrival price={50}/>
              </View>
              <View className="flex flex-row justify-between items-center mt-9 px-4">
                <NewArrival price={50}/>
                <NewArrival price={50}/>
                <NewArrival price={50}/>
              </View>
              <View className="flex flex-row justify-between items-center mt-9 px-4">
                <NewArrival price={50}/>
                <NewArrival price={50}/>
                <NewArrival price={50}/>
              </View>
              <View className="flex flex-row justify-between items-center mt-9 px-4">
                <NewArrival price={50}/>
                <NewArrival price={50}/>
                <NewArrival price={50}/>
              </View>

        </View>
      </Wrapper>
      </ScrollView>
    </>
  );
}

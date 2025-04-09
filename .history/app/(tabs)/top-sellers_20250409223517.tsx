import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import TopSellersComponent from "@/components/top-sellers-component";

export default function TopSellers() {
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
            <Text className="text-[25px] font-bold ml-8 mt-4">Top Sellers</Text>
            <View className="flex items-center mt-9 px-4">
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-1.png")}
                name="Oliver Jake"
                rating={4.7}
                subText="10"
                showtotalProduct={}
                showButton={true}
                buttonText="View Profile"
              />
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-2.png")}
                name="Jack Connor"
                rating={4.7}
                subText="10"
                showButton={true}
                buttonText="View Profile"
              />
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-3.png")}
                name="Harry Callum"
                rating={4.7}
                subText="10"
                showButton={true}
                buttonText="View Profile"
              />
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-4.png")}
                name="Jacob Michael"
                rating={4.7}
                subText="10"
                showButton={true}
                buttonText="View Profile"
              />
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-5.png")}
                name="Charlie Kyle"
                rating={4.7}
                subText="10"
                showButton={true}
                buttonText="View Profile"
              />
              <TopSellersComponent
                source={require("../../assets/images/Top-selling-2.png")}
                name="Thomas Joe"
                rating={4.7}
                subText="10"
                showButton={true}
                buttonText="View Profile"
              />
            </View>
          </View>
        </Wrapper>
      </ScrollView>
    </>
  );
}

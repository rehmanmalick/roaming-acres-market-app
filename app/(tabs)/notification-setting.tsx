
import Wrapper from "@/components/wrapper";
import {Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import NewArrival from "@/components/new-arrival-component";
import NotificationSettingComponent from "@/components/notification-setting-component";

export default function NotificationSetting() {
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
            <View className="items-center justify-center">
                      <Text className="font-bold text-3xl">Notifications</Text>
                    </View>
              <View className="mt-9 ">
                <NotificationSettingComponent title="Allow Notifcations" text="Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumym"/>
                <NotificationSettingComponent title="Email Notifcations" text="Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumym"/>
                <NotificationSettingComponent title="Order Notifcations" text="Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumym"/>
                <NotificationSettingComponent title="General Notifcations" text="Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumym"/>
              </View>


        </View>
      </Wrapper>
      </ScrollView>
    </>
  );
}

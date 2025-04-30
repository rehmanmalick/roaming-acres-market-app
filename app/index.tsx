import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import Wrapper from "@/components/common/wrapper";
import { useUserStore } from "@/store/useUserStore";

export default function SelectYourAccount() {
  const router = useRouter();
  const setUserType = useUserStore((state) => state.setUserType);
  const handleSelectAccount = (type: "buyer" | "seller") => {
    setUserType(type); // Store user type
    router.push("/(auth)/welcome"); // Navigate to the welcome screen
  };

  return (
    <Wrapper>
      <View className="flex flex-col flex-1 justify-start">
        <View className="mt-[60%]">
          <Text className="text-start w-full text-5xl font-medium mb-4 max-w-80">
            Select Your Account
          </Text>
          <Text className="text-[#737373] text-xl font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center mt-[20%] gap-5">
          <View className="flex-1">
            <Button
              state="primary"
              title="Buyer Account"
              onPress={() => handleSelectAccount("buyer")}
            />
          </View>
          <View className="flex-1">
            <Button
              state="primary"
              title="Seller Account"
              onPress={() => handleSelectAccount("seller")}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

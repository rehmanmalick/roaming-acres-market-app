import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import SelectYourAccount from "./../../components/welcome-component";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <SelectYourAccount></SelectYourAccount>
      <ImageBackground
        source={require("@/assets/images/bg-welcome.png")}
        className="flex-1  flex-col justify-start items-center px-6"
      >
        {/* skip btn */}
        <View className="absolute top-10 right-4">
          <TouchableOpacity
            onPress={() => router.push("/home-screen")}
            className="bg-white px-4 py-2 rounded-full"
          >
            <Text className="text-green-600 font-bold">Skip</Text>
          </TouchableOpacity>
        </View>

        <View className="w-full top-40 items-start">
          <Text className="text-white text-[36px] font-bold">Welcome to</Text>
          <Text className="text-yellow-400 text-[30px] font-bold">
            Roaming Acres Market
          </Text>

          <Text className="text-white text-[18px] mt-56 font-normal ">
            Make easy farming with fast delivery at your door.
          </Text>
        </View>
        {/* email and phone btn */}
        <View className="absolute bottom-56 w-full ">
          {/* email  btn */}
          <TouchableOpacity
            className="border border-white bg-[#fefefe4b] py-3 rounded-[3px] items-center mb-4"
            onPress={() => router.push("/signup")}
          >
            <Text className="text-white">Start with Email</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-white">Already have an Account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-white underline font-bold ml-1">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

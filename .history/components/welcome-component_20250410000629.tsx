import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface WelcomeComponentProps {
  skipRoute?: string;
  emailRoute?: string;
  signInRoute?: string;
}

export default function WelcomeComponent({
  skipRoute = "/home-screen", // Default value is a string
  emailRoute = "/signup",     // Default value is a string
  signInRoute = "/login",     // Default value is a string
}: WelcomeComponentProps) {
  const router = useRouter();

  // Ensure we are passing strings to router.push
  return (
    <ImageBackground
      source={require("@/assets/images/bg-welcome.png")}
      className="flex-1 flex-col justify-start items-center px-6"
    >
      {/* skip btn */}
      <View className="absolute top-10 right-4">
        <TouchableOpacity
          onPress={() => router.push(skipRoute as string)} // Explicitly cast to string
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

        <Text className="text-white text-[18px] mt-56 font-normal">
          Make easy farming with fast delivery at your door.
        </Text>
      </View>

      {/* email and phone btn */}
      <View className="absolute bottom-56 w-full">
        {/* email btn */}
        <TouchableOpacity
          className="border border-white bg-[#fefefe4b] py-3 rounded-[3px] items-center mb-4"
          onPress={() => router.push(emailRoute as string)} // Explicitly cast to string
        >
          <Text className="text-white">Start with Email</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text className="text-white">Already have an Account?</Text>
          <TouchableOpacity onPress={() => router.push(signInRoute as string)}>
            <Text className="text-white underline font-bold ml-1">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

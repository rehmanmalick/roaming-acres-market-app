import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

interface WelcomeComponentProps {
  onSkip?: () => void;
  onEmailPress?: () => void;
  onSignInPress?: () => void;
}

export default function WelcomeComponent({
  onSkip = () => {},
  onEmailPress = () => {},
  onSignInPress = () => {},
}: WelcomeComponentProps) {
  return (
    <ImageBackground
      source={require("@/assets/images/bg-welcome.png")}
      className="flex-1 px-6"
    >
      {/* skip btn */}
      <View className="absolute top-10 right-4">
        <TouchableOpacity
          onPress={onSkip}
          className="bg-white px-4 py-2 rounded-full"
        >
          <Text className="text-green-600 font-bold">Skip</Text>
        </TouchableOpacity>
      </View>
      
      <View className="flex flex-1 justify-around">

      <View className="">
        <Text className="text-white text-5xl font-bold">Welcome to</Text>
        <Text className="text-yellow-400 text-3xl font-bold">
          Roaming Acres Market
        </Text>
      </View>

      {/* email and phone btn */}
      <View className="">
        <Text className="text-white text-lg font-normal">
          Make easy farming with fast delivery at your door.
        </Text>
        {/* email btn */}
        <TouchableOpacity
          className="border border-white bg-[#fefefe4b] py-3 mt-8  rounded-[3px] items-center "
          onPress={onEmailPress}
        >
          <Text className="text-white">Start with Email</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8">
          <Text className="text-white">Already have an Account?</Text>
          <TouchableOpacity onPress={onSignInPress}>
            <Text className="text-white underline font-bold ml-1">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ImageBackground>
  );
}

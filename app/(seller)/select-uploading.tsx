import { View, Text, Pressable } from "react-native";
import Wrapper from "@/components/common/wrapper";
import { useRouter } from "expo-router";

const SelectUploading = () => {
  const router = useRouter();

  return (
    <Wrapper showBackButton={true}>
      <View className="flex-1 flex-col gap-12 items-center  mt-10">
        <Text className="text-2xl font-bold">Would you like to upload ?</Text>
        <View className=" flex flex-row gap-4 justify-center items-center ">
          <Pressable
            onPress={() => router.push("/(seller)/post-uploading")}
            className="bg-[#008080] px-6 py-3 rounded-md flex-1 flex-row justify-center items-center "
          >
            <Text className="text-white text-center font-semibold">Posts</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              router.push("/(seller)/(home)/new-product-uploading")
            }
            className="bg-orange-500 px-6 py-3 rounded-md flex-1 flex-row justify-center items-center"
          >
            <Text className="text-white text-center font-semibold">
              Products
            </Text>
          </Pressable>
        </View>
      </View>
    </Wrapper>
  );
};

export default SelectUploading;

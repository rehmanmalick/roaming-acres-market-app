import { Text } from "react-native";
import WelcomeComponent from "./../../../components/welcome-component";
import { useRouter } from "expo-router";

export default function welcome() {
  const router = useRouter();
  return (
    <>
      <Text className="">LUIGYKIU</Text>
    </>
  );
}

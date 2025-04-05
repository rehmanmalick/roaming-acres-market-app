import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

export default function SelectYourAccount() {
  const router = useRouter();
  // Prevent auto-hiding initially
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate loading (e.g., fonts, API calls)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync(); // Hide splash when app is ready
    }
  }, [appIsReady]);

  if (!appIsReady) return null;
  return (
    <>
      <Wrapper showBackButton={true}>
        <View className="flex flew-col flex-1 items-center justify-center gap-5 ">
          <View className="mb-16">
            <Text className="text-start w-full text-[36.41px] font-normal mb-4 max-w-80">
              Select Your Account{" "}
            </Text>
            <Text className="text-[#737373] text-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View className="flex flex-row justify-center items-center mb-32">
            <Button
              state="primary"
              title="Buyer Account"
              onPress={() => router.push("../welcome")}
            />
            <Button
              state="secondary"
              title="Seller Account"
              onPress={() => router.push("../home-screen")}
            />
          </View>
        </View>
      </Wrapper>
    </>
  );
}

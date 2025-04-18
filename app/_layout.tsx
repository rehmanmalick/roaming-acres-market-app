import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { View } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import SellerTabBar from "@/components/seller-tab-bar";
import MainTabBar from "@/components/main-tab-bar";

// Hide tab bar on these routes
const HIDE_TAB_BAR_ROUTES = [
  "/",

  "/login",
  "/signup",
  "/welcome",
  "/resetpassword",
  "/verification-code",
  "/verify-code",
  "/chatting",
  "/seller/login",
  "/seller/signup",
  "/seller/welcome",
  "/seller/reset-password",
  "/seller/verification-code",
  "/seller/verify-code",
  "/seller/chatting",
];

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  // Check if current route should hide tab bar
  const shouldHideTabBar = HIDE_TAB_BAR_ROUTES.some(
    (route) => pathname === route // Exact match only
  );

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { paddingBottom: shouldHideTabBar ? 0 : 0 },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="seller" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Show tab bars on all routes EXCEPT the specified ones */}
        {!shouldHideTabBar &&
          (pathname?.startsWith("/seller") ? <SellerTabBar /> : <MainTabBar />)}

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}


//import { Text } from "react-native";
// import "../global.css";
// import Wrapper from "@/components/common/wrapper";
// export default function App() {
//   return (
//     <Wrapper>
//       {/* Safe Area Content */}
//       <Text className="text-lg font-semibold text-gray-800">
//         Your content starts here
//       </Text>
//       <Text className="text-gray-600 mt-2">
//         This content is padded and safe on all devices.
//       </Text>
//     </Wrapper>
//   );
// }

import { useFonts } from "expo-font";
import { Slot, Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";

// // Hide tab bar on these routes
// const HIDE_TAB_BAR_ROUTES = [
//   "/",
//   "/login",
//   "/signup",
//   "/welcome",
//   "/resetpassword",
//   "/verification-code",
//   "/verify-code",
//   "/chatting",
//   "/seller/login",
//   "/seller/signup",
//   "/seller/welcome",
//   "/seller/reset-password",
//   "/seller/verification-code",
//   "/seller/verify-code",
//   "/seller/chatting",
// ];

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      {/* <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="/index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(seller)" options={{ headerShown: false }} />
        <Stack.Screen name="(buyer)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}

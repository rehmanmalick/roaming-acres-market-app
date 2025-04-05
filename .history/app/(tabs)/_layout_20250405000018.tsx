import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="/" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="login" />
        <Stack.Screen name="resetpassword" />
        <Stack.Screen name="verificationcode" />
        <Stack.Screen name="verificationcode" />
        <Stack.Screen name="otp" />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

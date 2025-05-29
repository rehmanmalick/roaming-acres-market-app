import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="register-your-business" />
        <Stack.Screen name="reset-password" />
        <Stack.Screen name="verify-otp" />
        <Stack.Screen name="congratulations" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

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
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="reset-password" options={{ headerShown: false }} />
        <Stack.Screen
          name="verification-code"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="verify-code" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen
          name="register-your-business"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Animated } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function TabLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "#8391A1",
          tabBarStyle: {
            paddingBottom: 10, // 👈 padding at bottom
            paddingTop: 5, // 👈 padding at top
            paddingHorizontal: 20, // 👈 left & right padding
            height: 70, // 👈 optional, increase height to fit padding
            backgroundColor: "#fff",
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(orders)"
          options={{
            headerShown: false,
            title: "Orders",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                size={28}
                name={focused ? "bag-check" : "bag-check-outline"} // Change icon based on tab focus
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(inventory)"
          options={{
            headerShown: false,
            title: "Inventory",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                size={28}
                name={focused ? "add-circle" : "add-circle-outline"}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(earnings)"
          options={{
            headerShown: false,
            title: "Earnings",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                size={28}
                name={focused ? "newspaper" : "newspaper-outline"} // Change icon based on focus
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(message)"
          options={{
            headerShown: false,
            title: "Message",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                size={28}
                name={focused ? "chatbubbles" : "chatbubbles-outline"} // Change based on focus
                color={color}
              />
            ),
          }}
        />
        {/* === Screen WITHIN the layout but HIDDEN from Tab Bar === */}
        <Tabs.Screen
          name="profile-seller" // Points to app/(seller)/profile-seller.tsx
          options={{
            // HIDE this screen from the tab bar
            headerShown: false,
            href: null,

          }}
        />
      </Tabs>
    </React.Fragment>
  );
}

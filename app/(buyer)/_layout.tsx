import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Animated } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
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
        name="home"
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
      {/* type TabIcon = "home" | "heart" | "grid" | "cart" | "chatbubbles" | string; */}
      {/* label1 = "Home",
  label2 = "Wishlist",
  label3 = "Products",
  label4 = "My Orders",
  label5 = "Message", */}
      <Tabs.Screen
        name="wishlist"
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "heart" : "heart-outline"} // Change icon based on tab focus
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="product-listing"
        options={{
          headerShown: false,
          title: "Products",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "grid" : "grid-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="buyer-orders"
        options={{
          headerShown: false,
          title: "My Orders",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "cart" : "cart-outline"} // Change icon based on focus
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
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
    </Tabs>
  );
}

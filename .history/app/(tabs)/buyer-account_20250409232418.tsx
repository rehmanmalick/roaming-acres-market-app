import Wrapper from "@/components/wrapper";
import { Text, View, ScrollView, Modal, Pressable } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View className="mb-2 mx-4">
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        className="flex flex-row justify-between items-center py-5 px-4 mb-4 shadow-lg shadow-gray-500/15 rounded-lg"
        style={{ backgroundColor: isCollapsed ? "#ffffff" : "#008080" }}
        activeOpacity={0.7}
      >
        <Text
          className="text-base font-semibold"
          style={{ color: isCollapsed ? "#000000" : "#ffffff" }}
        >
          {title}
        </Text>
        <AntDesign
          name={isCollapsed ? "caretright" : "caretdown"}
          size={12}
          color={isCollapsed ? "#ffffff" : "#008080"}
          style={{
            backgroundColor: isCollapsed ? "#008080" : "#ffffff",
            padding: 3,
            borderRadius: 2,
          }}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View className="px-4 bg-white border border-gray-100 rounded-b-lg">
          {children}
        </View>
      </Collapsible>
    </View>
  );
};

export default function BuyerAccount() {
  const router = useRouter();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true}>
          <ProfileHeader />

          <View style={{ paddingTop: 120 }}>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/profile")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Profile
              </Text>
              <AntDesign
                name="caretright"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
            <AccordionItem title="Buyer Dashboard">
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/wishlist")}
                className="flex flex-row justify-between items-center py-5 px-4 "
              >
                <Text className="text-base font-semibold text-gray-800">
                  Wishlist
                </Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/buyer-orders")}
                className="flex flex-row justify-between items-center py-5 px-4 "
              >
                <Text className="text-base font-semibold text-gray-800">
                  Orders
                </Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280" />
              </TouchableOpacity>
            </AccordionItem>
            <TouchableOpacity
              onPress={() => router.push("/notifications")}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Notifications
              </Text>
              <Ionicons
                name="notifications"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
              <Text className="text-base font-semibold text-gray-800">
                Setting
              </Text>
              <AntDesign
                name="caretright"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLogoutModalVisible(true)}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Logout
              </Text>
              <MaterialIcons
                name="logout"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg">
              <Text className="text-base font-semibold text-gray-800">
                Delete Amount
              </Text>
              <MaterialIcons
                name="logout"
                size={12}
                color="#ffffff"
                style={{
                  backgroundColor: "#008080",
                  padding: 3,
                  borderRadius: 2,
                }}
              />
            </TouchableOpacity>
          </View>
        </Wrapper>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => {
          setLogoutModalVisible(!logoutModalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center p-8 bg-black/50">
          <View className="bg-white rounded-lg p-5 w-4/5">
            <Text className="text-lg font-bold mb-4 text-center">
              Are you sure you want to Log out?
            </Text>
            <Text className="text-gray-600 mb-6 text-center">
              This action cannot to undone. Are you sure to you want a Log out?
            </Text>
            <View className="flex flex-row justify-center items-center ">
              <Button
                state="primary"
                title="LOGOUT"
                onPress={() => router.push("../welcome")}
              />
              <Button
                state="secondary"
                title="Cancel"
                onPress={() => router.push("../home-screen")}
                // onPress={() => router.push("/product")}
              />
            </View>
            <View className="flex-row justify-between">
              <Pressable
                className="px-5 py-2 bg-gray-300 rounded-lg"
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text className="text-gray-800 font-medium">Cancel</Text>
              </Pressable>

              <Pressable
                className="px-5 py-2 bg-teal-600 rounded-lg"
                onPress={() => {
                  // Add your logout logic here
                  setLogoutModalVisible(false);
                  // router.replace('/login'); // Uncomment if you want to navigate to login
                }}
              >
                <Text className="text-white font-medium">Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

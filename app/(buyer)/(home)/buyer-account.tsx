import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView, Modal, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/ui/button";

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
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] =
    useState(false);

  return (
    <>
      <ScrollView
        className="bg-white flex-1"
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" // Android
        contentInsetAdjustmentBehavior="never" // iOS
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Wrapper showBackButton={true} showProfileHeader={true}>
          <View style={{ paddingTop: 120 }}>
            <TouchableOpacity
              onPress={() => router.push("/(buyer)/(home)/profile")}
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
                onPress={() => router.push("/(buyer)/(home)/wishlist")}
                className="flex flex-row justify-between items-center py-5 px-4 "
              >
                <Text className="text-base font-semibold text-gray-800">
                  Wishlist
                </Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/(buyer)/(home)/buyer-orders")}
                className="flex flex-row justify-between items-center py-5 px-4 "
              >
                <Text className="text-base font-semibold text-gray-800">
                  Orders
                </Text>
                <Ionicons name="chevron-forward" size={12} color="#6b7280" />
              </TouchableOpacity>
            </AccordionItem>
            <TouchableOpacity
              onPress={() => router.push("/(buyer)/(home)/notifications")}
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
            <TouchableOpacity
              onPress={() =>
                router.push("/(buyer)/(home)/notification-setting")
              }
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
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
            <TouchableOpacity
              onPress={() => setDeleteAccountModalVisible(true)}
              className="flex flex-row justify-between items-center py-5 px-4 mb-4 mx-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
            >
              <Text className="text-base font-semibold text-gray-800">
                Delete account
              </Text>
              <MaterialIcons
                name="delete"
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
        <View className="flex-1 justify-center items-center  bg-black/50">
          <View className=" bg-white rounded-lg px-8 py-14 w-4/5">
            <Text className="text-[19px] font-bold mb-6 text-center">
              Are you sure you want to Log out?
            </Text>
            <Text className="text-gray-600 mb-12 text-center">
              This action cannot be undone. Are you sure you want to Log out?
            </Text>
            <View className="flex flex-row justify-center items-center ">
              <Button
                state="primary"
                title="LOGOUT"
                onPress={() => router.push("/(buyer)/(home)")}
              />
              <Button
                state="secondary"
                title="Cancel"
                onPress={() => setLogoutModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Delete Account Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteAccountModalVisible}
        onRequestClose={() => {
          setDeleteAccountModalVisible(!deleteAccountModalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg px-8 py-14 w-4/5">
            <Text className="text-[19px] font-bold mb-6 text-center">
              Are you sure you want to delete your account?
            </Text>
            <Text className="text-gray-600 mb-12 text-center">
              This action is permanent and cannot be undone. All your data will
              be lost.
            </Text>
            <View className="flex flex-row justify-center items-center space-x-4">
              <Button
                state="primary"
                title="DELETE"
                onPress={() => {
                  // Add your delete account logic here
                  setDeleteAccountModalVisible(false);
                  router.push("/(buyer)/(home)");
                }}
              />
              <Button
                state="secondary"
                title="Cancel"
                onPress={() => setDeleteAccountModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

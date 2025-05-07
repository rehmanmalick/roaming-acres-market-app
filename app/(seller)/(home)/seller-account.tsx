import Wrapper from "@/components/common/wrapper";
import { Text, View, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/profile-header";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";
type ModalState = "logout" | "signin" | null;
export default function SellerAccount() {
  const router = useRouter();
  const [modalState, setModalState] = useState<ModalState>(null);

  const LogoutModal = () => (
    <>
      {modalState === "logout" && (
        <>
          <View className="flex-1 bg-black/50 absolute inset-0 z-50">
            <Modal
              animationType="fade"
              transparent={true}
              visible={true}
              onRequestClose={() => setModalState(null)}
            >
              <View className="flex-1 justify-center items-center ">
                <View className="bg-white rounded-lg px-8 py-14 w-4/5">
                  <Text className="text-[19px] font-bold mb-6 text-center">
                    Are you sure you want to Log out?
                  </Text>
                  <Text className="text-gray-600 mb-12 text-center">
                    This action cannot be undone. Are you sure you want to Log
                    out?
                  </Text>
                  <View className="flex flex-row justify-center items-center gap-4">
                    <View className="flex-1">
                      <Button
                        state="primary"
                        title="LOGOUT"
                        onPress={() => {
                          setModalState(null);
                          router.push("/");
                        }}
                      />
                    </View>
                    <View className="flex-1">
                      <Button
                        state="primary"
                        title="Cancel"
                        onPress={() => setModalState(null)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </>
  );

  const SigninModal = () => (
    <>
      {modalState === "signin" && (
        <>
          <View className="flex-1 bg-black/50 absolute inset-0 z-50">
            <Modal
              animationType="fade"
              transparent={true}
              visible={true}
              onRequestClose={() => setModalState(null)}
            >
              <View className="flex-1 justify-center items-center ">
                <View className="bg-white rounded-lg px-8 py-14 w-4/5">
                  <Text className="text-[19px] font-bold mb-6 text-center">
                    Are you sure you want to delete your account?
                  </Text>
                  <Text className="text-gray-600 mb-12 text-center">
                    This action is permanent and cannot be undone. All your data
                    will be lost.
                  </Text>
                  <View className="flex flex-row justify-center items-center gap-4">
                    <View className="flex-1">
                      <Button
                        state="primary"
                        title="DELETE"
                        onPress={() => {
                          setModalState(null);
                          router.push("/");
                        }}
                      />
                    </View>
                    <View className="flex-1">
                      <Button
                        state="primary"
                        title="Cancel"
                        onPress={() => setModalState(null)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </>
  );

  return (
    <>
      <Wrapper
        showBackButton={true}
        showProfileHeader={true}
        profileHeaderRoute="/(seller)/profile-seller"
      >
        <View className="flex-1 mt-5">
          <TouchableOpacity
            onPress={() => router.push("/(seller)/(home)/profile")}
            className="flex flex-row justify-between items-center py-5 px-4 mb-4  shadow-lg shadow-gray-500/15 bg-white rounded-lg"
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

          <TouchableOpacity
            onPress={() => router.push("/(seller)/(orders)/orders")}
            className="flex flex-row justify-between items-center py-5 px-4 mb-4  shadow-lg shadow-gray-500/15 bg-white rounded-lg"
          >
            <Text className="text-base font-semibold text-gray-800">
              Seller Dashboard
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
            onPress={() =>
              router.push({
                pathname: "/(seller)/(message)/message",
                params: { tab: "All Notifications" },
              })
            }
            className="flex flex-row justify-between items-center py-5 px-4 mb-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
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
            onPress={() => router.push("/(tabs)/notification-setting")}
            className="flex flex-row justify-between items-center py-5 px-4 mb-4  shadow-lg shadow-gray-500/15 bg-white rounded-lg"
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
            onPress={() => setModalState("logout")}
            className="flex flex-row justify-between items-center py-5 px-4 mb-4  shadow-lg shadow-gray-500/15 bg-white rounded-lg"
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
            onPress={() => setModalState("signin")}
            className="flex flex-row justify-between items-center py-5 px-4 mb-4 shadow-lg shadow-gray-500/15 bg-white rounded-lg"
          >
            <Text className="text-base font-semibold text-gray-800">
              Delete Account
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
      <LogoutModal />
      <SigninModal />
    </>
  );
}

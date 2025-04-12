import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface ProfileHeaderProps {
  route?: string;
  account?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  route,
  account = "Buyer",
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push((route || "/(tabs)/buyer-account") as any)}
      >
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.img}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          marginLeft: 10,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Try Temp</Text>
        <Text style={{ fontSize: 18 }}>{account} Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignSelf: "center",
    position: "absolute",
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 7,
    borderColor: "#ffffff",
  },
});

export default ProfileHeader;

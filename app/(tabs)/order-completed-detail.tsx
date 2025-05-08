import Button from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";
import OrderCompletedDetailComponent from "./../../components/order-completed-detail-component";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  EvilIcons,
} from "@expo/vector-icons";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <OrderCompletedDetailComponent />
    </>
  );
}

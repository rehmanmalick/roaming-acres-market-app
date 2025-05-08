import Button from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";
import OrderCompletedDetailComponent from "@/components/order-completed-detail-component";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <OrderCompletedDetailComponent />
    </>
  );
}

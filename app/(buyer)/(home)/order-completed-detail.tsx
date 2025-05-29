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

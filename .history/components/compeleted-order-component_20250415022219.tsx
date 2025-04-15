import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";

interface Order {
  id: string | number;
  status: "Delivered" | "Cancelled" | "Pending" | string;
  date: string;
  amount: number;
  addressLine1: string;
  addressLine2: string;
  deliveryStatus: string;
  description?: string; // Previously `note`, now `description`
}

interface CompletedOrderProps {
  order: Order;
  productDetails: string;
}

const CompletedOrder: React.FC<CompletedOrderProps> = ({
  order,
  productDetails,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleDetails = () => {
    setIsExpanded((prev) => !prev);
    Animated.timing(spinValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  // Get status styles based on order status
  const getStatusStyles = () => {
    switch (order.status) {
      case "Delivered":
        return styles.deliveredStatus;
      case "Cancelled":
        return styles.cancelledStatus;
      default:
        return styles.pendingStatus;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderIdText}>Order ID #{order.id}</Text>
        <Text style={[styles.statusText, getStatusStyles()]}>
          {order.status}
        </Text>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{order.addressLine1}</Text>
        <Text style={styles.addressText}>{order.addressLine2}</Text>
        <Text style={styles.addressText}>Status: {order.deliveryStatus}</Text>
        <Text style={styles.addressText}>Order at {order.date}</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>$ {order.amount.toFixed(2)}</Text>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity
        onPress={toggleDetails}
        style={styles.toggleButton}
        activeOpacity={0.7}
      >
        <Text style={styles.toggleButtonText}>
          {isExpanded ? "Hide Details" : "View Details"}
        </Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Ionicons name="chevron-down" size={18} color="black" />
        </Animated.View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {isExpanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.productDetailsTitle}>Product Order Details</Text>
          <Text style={styles.productDetailsText}>
            {productDetails || "No product details provided."}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderIdText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontWeight: "bold",
  },
  deliveredStatus: {
    backgroundColor: "#D1F7D1",
    color: "#4CAF50",
  },
  cancelledStatus: {
    backgroundColor: "#FFEBEB",
    color: "#FF5252",
  },
  pendingStatus: {
    backgroundColor: "#FFF3CD",
    color: "#FF9800",
  },
  addressContainer: {
    marginTop: 8,
  },
  addressText: {
    fontSize: 14,
    color: "#6B7280",
  },
  amountContainer: {
    marginTop: 16,
  },
  amountText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  toggleButton: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toggleButtonText: {
    fontSize: 14,
    marginRight: 8,
  },
  expandedContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  productDetailsTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  productDetailsText: {
    fontSize: 14,
    color: "#6B7280",
  },
});

export default CompletedOrder;

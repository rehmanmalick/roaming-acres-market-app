// components/PasswordStrengthMeter.tsx
import React from "react";
import { View, Text } from "react-native";

const COLORS = {
  weak: "#FF4444",
  medium: "#FFBB33",
  strong: "#00C851",
  gray: "#E0E0E0",
};

type Props = {
  password: string;
};

const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (password.length >= 6) strength += 1;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return Math.min(strength, 5);
};

const getStrengthMeta = (strength: number) => {
  if (strength <= 2) return { label: "Weak", color: COLORS.weak };
  if (strength <= 4) return { label: "Medium", color: COLORS.medium };
  return { label: "Strong", color: COLORS.strong };
};

const PasswordStrengthMeter: React.FC<Props> = ({ password }) => {
  if (!password) return null;

  const strength = calculatePasswordStrength(password);
  const { label, color } = getStrengthMeta(strength);

  return (
    <View className="mt-2 mb-4">
      <View className="flex-row justify-between mb-1">
        <Text className="text-xs text-gray-500">Password Strength:</Text>
        <Text className="text-xs font-medium" style={{ color }}>
          {label}
        </Text>
      </View>
      <View className="flex-row h-1.5 bg-gray-200 rounded-full overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <View
            key={index}
            className="flex-1 h-full"
            style={{
              backgroundColor: index < strength ? color : COLORS.gray,
              marginRight: index < 4 ? 2 : 0,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default PasswordStrengthMeter;

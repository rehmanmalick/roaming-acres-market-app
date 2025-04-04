import React, { forwardRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type CustomTextInputProps = {
  label?: string;
  iconRight?: keyof typeof Ionicons.glyphMap;
  onIconRightPress?: () => void;
  validationIcon?: keyof typeof Ionicons.glyphMap;
  validationIconColor?: string;
  containerClassName?: string;
  inputClassName?: string;
  focusedBorderColor?: string;
  defaultBorderColor?: string;
  showValidationIcon?: boolean;
} & TextInputProps;

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      label,
      iconRight,
      onIconRightPress,
      validationIcon,
      validationIconColor,
      containerClassName = "",
      inputClassName = "",
      focusedBorderColor = "border-[#008080]",
      defaultBorderColor = "border-gray-300",
      showValidationIcon = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      props.onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      props.onBlur?.();
    };

    return (
      <View className={`mb-4 ${containerClassName}`}>
        {label && (
          <Text className="text-sm text-gray-600 mb-1 font-medium">
            {label}
          </Text>
        )}
        <View className="relative">
          <TextInput
            ref={ref}
            className={`w-full h-14 border rounded-[3px] px-4 text-base ${
              isFocused ? focusedBorderColor : defaultBorderColor
            } ${iconRight || validationIcon ? "pr-12" : ""} ${inputClassName}`}
            placeholderTextColor="#9CA3AF"
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Right side icons */}
          <View className="absolute right-3 top-4 flex-row space-x-2">
            {showValidationIcon && validationIcon && (
              <Ionicons
                name={validationIcon}
                size={20}
                color={validationIconColor}
              />
            )}
            {iconRight && (
              <TouchableOpacity onPress={onIconRightPress}>
                <Ionicons name={iconRight} size={20} color="#666" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
);

export default CustomTextInput;

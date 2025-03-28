import React, { forwardRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type CustomTextInputProps = {
  placeholder?: string;
  iconRight?: keyof typeof Ionicons.glyphMap;
  iconRightColor?: string;
  onIconRightPress?: () => void;
  validationIcon?: keyof typeof Ionicons.glyphMap;
  validationIconColor?: string;
  className?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      placeholder,
      value,
      onChangeText,
      onFocus,
      onBlur,
      returnKeyType,
      onSubmitEditing,
      keyboardType = "default",
      autoCapitalize = "none",
      secureTextEntry = false,
      iconRight,
      iconRightColor = "#666",
      onIconRightPress,
      validationIcon,
      validationIconColor,
      className = "",
      containerStyle,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      onFocus && onFocus();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur && onBlur();
    };

    const borderColor = isFocused ? "border-blue-500" : "border-gray-300";

    return (
      <View className={`relative mb-4 ${className}`} style={containerStyle}>
        <TextInput
          ref={ref}
          className={`w-full h-14 border rounded-lg px-4 text-base ${borderColor} ${
            iconRight || validationIcon ? "pr-12" : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
        
        {/* Right icon (eye for password or validation) */}
        {(iconRight || validationIcon) && (
          <View className="absolute right-3 top-4 flex-row">
            {validationIcon && (
              <View className="mr-2">
                <Ionicons
                  name={validationIcon}
                  size={20}
                  color={validationIconColor}
                />
              </View>
            )}
            {iconRight && (
              <TouchableOpacity onPress={onIconRightPress}>
                <Ionicons
                  name={iconRight}
                  size={20}
                  color={iconRightColor}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
);

export default CustomTextInput;
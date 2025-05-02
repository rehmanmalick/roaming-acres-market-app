import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputProps,
} from "react-native";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

type CustomTextInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  iconRight?: keyof typeof Ionicons.glyphMap;
  iconRightColor?: string;
  onIconRightPress?: () => void;
  validationIcon?: keyof typeof Ionicons.glyphMap;
  validationIconColor?: string;
  containerClassName?: string;
  inputClassName?: string;
  focusedBorderColor?: string;
  defaultBorderColor?: string;
  showValidationIcon?: boolean;
  cursorColor?: string;
  selectionColor?: string;
  rules?: RegisterOptions<T>;
} & TextInputProps;

function CustomTextInput<T extends FieldValues>({
  control,
  name,
  label,
  iconRight,
  iconRightColor = "#dadada",
  onIconRightPress,
  validationIcon,
  validationIconColor,
  containerClassName = "",
  inputClassName = "",
  focusedBorderColor = "border-[#008080]",
  defaultBorderColor = "border-gray-300",
  showValidationIcon = false,
  cursorColor = "#008080",
  selectionColor = "#008080",
  rules,
  ...rest
}: CustomTextInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && (
        <Text className="font-semibold text-start px-2 text-[#9796A1] mb-2">
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <View className="relative">
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={() => {
                  setIsFocused(false);
                  onBlur();
                }}
                onFocus={() => setIsFocused(true)}
                className={`w-full h-14 border rounded-[3px] px-4 text-base ${
                  isFocused ? focusedBorderColor : defaultBorderColor
                } ${iconRight || validationIcon ? "pr-12" : ""} ${
                  inputClassName || ""
                }`}
                cursorColor={cursorColor}
                selectionColor={selectionColor}
                {...rest}
              />

              {/* Right Icons */}
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
                    <Ionicons
                      name={iconRight}
                      size={20}
                      color={iconRightColor}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Validation Error */}
            {error?.message && (
              <Text className="text-red-500 text-xs mt-1 px-2">
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
}

export default CustomTextInput;

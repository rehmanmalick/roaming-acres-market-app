import React, { FC } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IWrapper {
  children: React.ReactNode;
}

/**
 * Wrapper component that provides a styled container for its children.
 *
 * This component uses a `SafeAreaView` to ensure content is displayed within
 * the safe area boundaries of a device. It also includes a top image that is
 * absolutely positioned as a decorative element.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the wrapper.
 *
 * @returns {JSX.Element} The rendered Wrapper component.
 */
const Wrapper:FC<IWrapper> = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 px-6">
      {/* Top Image absolutely positioned */}
      <Image
        source={require("../../assets/images/wrapper-top.png")}
        resizeMode="cover"
        className="w-screen absolute top-0 right-0"
      />

      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

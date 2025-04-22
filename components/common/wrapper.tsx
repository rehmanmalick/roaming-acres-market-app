import React, { FC } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../profile-header";
import { View } from "lucide-react-native";

interface IWrapper {
  children?: React.ReactNode;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  showFilterButton?: boolean;
  showPeriodButton?: boolean;
  menuLink?: string;
  className?: string;
  showProfileHeader?: boolean;
}

/**
 * Wrapper component that provides a styled container for its children.
 *
 * It supports optional buttons like back, menu, filter, and period buttons,
 * and can navigate to a menu link if specified.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} [props.children] - The child components to be rendered inside the wrapper.
 * @param {boolean} [props.showBackButton] - Whether to show a back button.
 * @param {boolean} [props.showMenuButton] - Whether to show a menu button.
 * @param {boolean} [props.showFilterButton] - Whether to show a filter button.
 * @param {boolean} [props.showPeriodButton] - Whether to show a period button.
 * @param {string} [props.menuLink] - Link for the menu button.
 * @param {string} [props.className] - Additional CSS classes for styling.
 *
 * @returns {JSX.Element} The rendered Wrapper component.
 */
const Wrapper: FC<IWrapper> = ({
  children,
  showBackButton = false,
  showMenuButton = false,
  showFilterButton = false,
  showPeriodButton = false,
  menuLink = "/(tabs)/buyer-account",
  className = "",
  showProfileHeader = false,
}) => {
  return (
    <SafeAreaView className="flex-1 px-6 bg-white">
      {/* Top Image absolutely positioned */}
      <Image
        source={require("../../assets/images/wrapper-top.png")}
        resizeMode="cover"
        className="w-screen absolute top-0 right-0"
      />

      {/* Conditionally render ProfileHeader */}
      {showProfileHeader && <ProfileHeader />}

      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

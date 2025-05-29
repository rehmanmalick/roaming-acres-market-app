import React, { FC, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../profile-header";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import Button from "../ui/button";

interface IWrapper {
  children?: React.ReactNode;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  showFilterButton?: boolean;
  showPeriodButton?: boolean;
  menuLink?: string;
  className?: string;
  showProfileHeader?: boolean;
  profileHeaderRoute?: string; // Add profileHeaderRoute prop
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
 * @param {string} [props.account] - Account type (e.g., "Seller").
 * @param {string} [props.profileHeaderRoute] - The route for ProfileHeader.
 *
 * @returns {JSX.Element} The rendered Wrapper component.
 */

type ModalState = "filter" | "period" | null;

const Wrapper: FC<IWrapper> = ({
  children,
  showBackButton = false,
  showMenuButton = false,
  showFilterButton = false,
  showPeriodButton = false,
  menuLink = "",
  className = "",
  showProfileHeader = false,
  profileHeaderRoute,
}) => {
  const router = useRouter();
  const [modalState, setModalState] = useState<ModalState>(null);

  // Filter modal states
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedSales, setSelectedSales] = useState(["All"]);
  const [selectedLocations, setSelectedLocations] = useState(["All"]);

  // Period modal states
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [dateRange] = useState({
    start: "1 Jan 2025",
    end: "18 Jan 2025",
  });
  const [selectedStatuses, setSelectedStatuses] = useState(["Confirmed"]);

  const toggleFilter = (filterType: string, value: string) => {
    switch (filterType) {
      case "category":
        setSelectedCategories((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
      case "sale":
        setSelectedSales((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
      case "location":
        setSelectedLocations((prev) =>
          value === "All"
            ? ["All"]
            : prev.includes(value)
            ? prev.filter((item) => item !== value).length === 0
              ? ["All"]
              : prev.filter((item) => item !== value)
            : [...prev.filter((item) => item !== "All"), value]
        );
        break;
    }
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const FilterModal = () => (
    <>
      {modalState === "filter" && (
        <>
          <View className="flex-1 bg-black/50 absolute inset-0 z-50">
            <Modal
              animationType="slide"
              transparent={true}
              visible={true}
              onRequestClose={() => setModalState(null)}
            >
              <View className="flex-1 justify-end">
                <View className="bg-white mt-auto  rounded-t-2xl max-h-[80%]">
                  <View className="flex-row justify-between items-center p-5 border-b border-gray-200">
                    <Text className="text-lg font-bold">Filters</Text>
                    <TouchableOpacity onPress={() => setModalState(null)}>
                      <Ionicons name="close" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>

                  <ScrollView className="px-5 pt-3">
                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        Categories
                      </Text>
                      <View className="flex-row flex-wrap gap-2">
                        {[
                          "All",
                          "Livestock",
                          "Poultry",
                          "Other Animals",
                          "Homegrown Produce",
                          "Eggs and Dairy",
                          "Homemade Canned or Baked Goods",
                          "Handmade Products",
                          "Agricultural Equipment and Supplies",
                        ].map((item) => (
                          <TouchableOpacity
                            key={`category-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedCategories.includes(item)
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => {
                              toggleFilter("category", item);
                              setModalState(null);
                              router.push("/search");
                            }}
                          >
                            <Text
                              className={`text-sm ${
                                selectedCategories.includes(item)
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>

                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        On Sales
                      </Text>
                      <View className="flex-row flex-wrap gap-2">
                        {[
                          "All",
                          "Hot Deal",
                          "Favorite Shop",
                          "Top Pick",
                          "E-Voucher",
                          "Deal $9",
                        ].map((item) => (
                          <TouchableOpacity
                            key={`sale-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedSales.includes(item)
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => {
                              toggleFilter("sale", item);
                              setModalState(null);
                              router.push("/search");
                            }}
                          >
                            <Text
                              className={`text-sm ${
                                selectedSales.includes(item)
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>

                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        Locations
                      </Text>
                      <View className="flex-row flex-wrap gap-2">
                        {[
                          "All",
                          "Americas",
                          "Asia",
                          "Australia",
                          "South Pole",
                          "Africa",
                        ].map((item) => (
                          <TouchableOpacity
                            key={`location-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedLocations.includes(item)
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => {
                              toggleFilter("location", item);
                              setModalState(null);
                              router.push("/search");
                            }}
                          >
                            <Text
                              className={`text-sm ${
                                selectedLocations.includes(item)
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View className="p-5">
                      <Button
                        title="APPLY FILTER"
                        state="primary"
                        onPress={() => {
                          console.log("Selected Filters:", {
                            categories: selectedCategories,
                            sales: selectedSales,
                            locations: selectedLocations,
                          });
                          setModalState(null);
                          router.push("/search");
                        }}
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </>
  );

  const PeriodModal = () => (
    <>
      {modalState === "period" && (
        <>
          <View className="flex-1 bg-black/50 absolute inset-0 z-50">
            <Modal
              animationType="slide"
              transparent={true}
              visible={true}
              onRequestClose={() => setModalState(null)}
            >
              <View className="flex-1 justify-end">
                <View className="bg-white mt-auto  rounded-t-2xl max-h-[80%]">
                  <View className="flex-row justify-between items-center p-5 border-b border-gray-200">
                    <Text className="text-lg font-bold">Select Period</Text>
                    <TouchableOpacity onPress={() => setModalState(null)}>
                      <Ionicons name="close" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>

                  <ScrollView className="px-5 pt-3">
                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        Period
                      </Text>
                      <View className="flex-row flex-wrap gap-2">
                        {["Today", "This week", "This month"].map((item) => (
                          <TouchableOpacity
                            key={`period-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedPeriod === item
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => setSelectedPeriod(item)}
                          >
                            <Text
                              className={`text-sm ${
                                selectedPeriod === item
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                      <View className="flex-row flex-wrap gap-2 mt-2">
                        {["Previous month", "This year"].map((item) => (
                          <TouchableOpacity
                            key={`period-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedPeriod === item
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => setSelectedPeriod(item)}
                          >
                            <Text
                              className={`text-sm ${
                                selectedPeriod === item
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>

                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        Select Period
                      </Text>
                      <View className="flex-row items-center justify-center gap-2">
                        <Text className="text-sm text-teal-600 font-medium">
                          {dateRange.start}
                        </Text>
                        <Text className="text-sm text-gray-500">to</Text>
                        <Text className="text-sm text-teal-600 font-medium">
                          {dateRange.end}
                        </Text>
                      </View>
                    </View>

                    <View className="mb-5">
                      <Text className="text-base font-semibold mb-2">
                        Status
                      </Text>
                      <View className="flex-row flex-wrap gap-2">
                        {["Confirmed", "Pending", "Canceled"].map((item) => (
                          <TouchableOpacity
                            key={`status-${item}`}
                            className={`px-4 py-2 rounded-lg border border-teal-600 ${
                              selectedStatuses.includes(item)
                                ? "bg-teal-600"
                                : "bg-white"
                            }`}
                            onPress={() => {
                              toggleStatus(item);
                              setModalState(null);
                              router.push("/(tabs)/all-transactions");
                            }}
                          >
                            <Text
                              className={`text-sm ${
                                selectedStatuses.includes(item)
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View className="p-5">
                      <Button
                        title={`SHOW RESULTS (${3261})`}
                        state="primary"
                        onPress={() => {
                          console.log("Selected Period:", {
                            period: selectedPeriod,
                            dateRange,
                            statuses: selectedStatuses,
                          });
                          setModalState(null);
                        }}
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </>
  );
  return (
    <SafeAreaView className="flex-1 px-6 bg-white">
      {/* Top Image absolutely positioned */}
      <Image
        source={require("../../assets/images/wrapper-top.png")}
        resizeMode="cover"
        className="w-screen absolute top-0 right-0"
      />

      <View className="relative flex-row items-center justify-between py-4">
        {(showBackButton || showMenuButton) && (
          <TouchableOpacity
            onPress={() =>
              router[showBackButton ? "back" : "push"](
                showBackButton
                  ? undefined
                  : menuLink || "/(buyer)/(home)/buyer-account"
              )
            }
            className="w-9 h-9 bg-white  shadow-sm   rounded-xl justify-center items-center"
          >
            <Ionicons
              name={showBackButton ? "chevron-back-outline" : "menu"}
              size={16}
              color="#000"
            />
          </TouchableOpacity>
        )}

        {/* Conditionally render ProfileHeader */}
        {showProfileHeader && <ProfileHeader route={profileHeaderRoute} />}

        <View>
          {showFilterButton && (
            <TouchableOpacity
              onPress={() => setModalState("filter")}
              className="w-9 h-9 bg-white  shadow-sm  rounded-xl justify-center items-center"
            >
              <Ionicons name="options" size={16} color="#000" />
            </TouchableOpacity>
          )}
          {showPeriodButton && (
            <TouchableOpacity
              onPress={() => setModalState("period")}
              className="w-9 h-9 bg-white  shadow-sm  rounded-xl justify-center items-center"
            >
              <Ionicons name="options" size={16} color="#000" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FilterModal />
      <PeriodModal />

      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

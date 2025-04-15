export default function BuyerOrders() {
  const [activeTab, setActiveTab] = useState("Pending");

  const sampleOrder = {
    id: "12345",
    status: "Delivered",
    date: "2025-04-15",
    amount: 49.99,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />

        {/* Search Input */}
        <View className="p-4" style={{ width: "100%" }}>
          <TextInput
            className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
            placeholder="Search"
            placeholderTextColor="#8391A1"
          />
          <View className="absolute left-4 top-4">
            <Ionicons name="search" size={18} color="#8391A1" />
          </View>
        </View>

        {/* Tab Buttons */}
        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {["Pending", "Completed", "Cancelled"].map((status, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveTab(status)}
              className="flex-1 items-center"
            >
              <Text
                className={`font-bold text-xl ${
                  activeTab === status
                    ? "text-teal-600 border-b-2 border-teal-600 p-1"
                    : "text-black"
                }`}
              >
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View className="p-4">
          {activeTab === "Pending" && (
            <>
              <PendingOrder
                orderId="1234"
                amount={4500}
                timeRequired="15mins"
              />
              <PendingOrder
                orderId="5678"
                amount={125000}
                timeRequired="45mins"
              />
              <PendingOrder orderId="9012" amount={1200} timeRequired="5mins" />
              <PendingOrder orderId="0001" amount={1} timeRequired="1min" />
              <PendingOrder
                orderId="ORD-2023-11-28-0001"
                amount={7890}
                timeRequired="30mins"
              />
            </>
          )}

          {activeTab === "Completed" && (
            <CompletedOrder
              order={{
                id: "9865",
                status: "Pending",
                date: "14 Apr 2025",
                amount: 59.99,
                addressLine1: "A-10, Clifton Block 5",
                addressLine2: "Karachi, Pakistan",
                deliveryStatus: "In Progress",
                note: "Leave at security gate if unavailable",
              }}
              productDetails="2x Mosquito Killer Spray, 1x Cockroach Gel Tube"
            />
          )}

          {activeTab === "Cancelled" && (
            <Text>No Cancelled Orders</Text> // You can add logic for cancelled orders here
          )}
        </View>
      </Wrapper>
    </ScrollView>
  );
}

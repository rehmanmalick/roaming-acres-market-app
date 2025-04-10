import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const TabBar = () => {
  const [activeTab, setActiveTab] = React.useState('Home');
  const router = useRouter();

  const tabs: { id: string; icon: 'home' | 'heart' | 'grid' | 'cart' | 'chatbubbles'; label: string; route: '/home-screen' | '/wishlist' | '/top-selling-products' | '/search' | '/chatting' }[] = [
    { id: 'Home', icon: 'home', label: 'Home', route: '/home-screen' },
    { id: 'Wishlist', icon: 'heart', label: 'Wishlist', route: '/wishlist' },
    { id: 'Products', icon: 'grid', label: 'Products', route: '/top-selling-products' },
    { id: 'MyOrders', icon: 'cart', label: 'My Orders', route: '/search' },
    { id: 'Message', icon: 'chatbubbles', label: 'Message', route: '/chatting' },
  ];

  const handleTabPress = (tabId: string, route: string) => {
    setActiveTab(tabId);
    router.push(route as any);
    // Assuming you're using a navigation library like React Navigation
    // Replace `navigateToRoute` with your actual navigation function
    // Example: navigation.navigate(route);
    // if (typeof window !== 'undefined') {
    //   window.location.href = route; // For web-based navigation
    // }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            activeTab === tab.id && { borderBottomWidth: 2, borderBottomColor: '#008080' } 
          ]}
          onPress={() => handleTabPress(tab.id, tab.route)}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeTab === tab.id ? '#008080' : '#8391A1'}
          />
          <Text style={[
            styles.tabText,
            activeTab === tab.id && styles.activeTabText
          ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#8391A1',
  },
  activeTabText: {
    color: '#008080',
    fontWeight: '600',
  },
});

export default TabBar;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type TabIcon = 'home' | 'heart' | 'grid' | 'cart' | 'chatbubbles' | string;

interface TabBarProps {
  tabs?: {
    id: string;
    icon: TabIcon;
    label: string;
    route: string;
  }[];
}

const DEFAULT_TABS = [
  { id: '1', icon: 'home', label: 'Home', route: '/home-screen' },
  { id: '2', icon: 'heart', label: 'Wishlist', route: '/wishlist' },
  { id: '3', icon: 'grid', label: 'Products', route: '/top-selling-products' },
  { id: '4', icon: 'cart', label: 'My Orders', route: '/search' },
  { id: '5', icon: 'chatbubbles', label: 'Message', route: '/chatting' },
];

const TabBar = ({ tabs = DEFAULT_TABS }: TabBarProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);
  const router = useRouter();

  const handleTabPress = (tabId: string, route: string) => {
    setActiveTab(tabId);
    router.push(route as any);
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
            name={tab.icon as any}
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
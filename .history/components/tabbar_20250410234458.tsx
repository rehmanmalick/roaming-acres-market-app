import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface TabBarProps {
  routetab1?: string;
  routetab2?: string;
  routetab3?: string;
  routetab4?: string;
  routetab5?: string;

}



const TabBar = ({ 
  routetab1 = '/home-screen', 
  routetab2 = '/wishlist', 
  routetab3 = '/top-selling-products', 
  routetab4 = '/search', 
  routetab5 = '/chatting' 
}: TabBarProps) => {
  const [activeTab, setActiveTab] = React.useState('Home');
  const router = useRouter();

  const tabs: { 
    id: string; 
    icon: 'home' | 'heart' | 'grid' | 'cart' | 'chatbubbles'; 
    label: string; 
    route: string 
  }[] = [
    { id: 'Home', icon: 'home', label: 'Home', route: routetab1 },
    { id: 'Wishlist', icon: 'heart', label: 'Wishlist', route: routetab2 },
    { id: 'Products', icon: 'grid', label: 'Products', route: routetab3 },
    { id: 'MyOrders', icon: 'cart', label: 'My Orders', route: routetab4 },
    { id: 'Message', icon: 'chatbubbles', label: 'Message', route: routetab5 },
  ];

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
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Wrapper: React.FC<{ 
    children: React.ReactNode; 
    showBackButton?: boolean; 
    showMenuButton?: boolean;
    showSettingsButton?: boolean;
    className?: string;

    }> = ({ 
        children, 
        showBackButton = false, 
        showMenuButton = false,
        showSettingsButton = false,
        className = "",
    }) => {
    const router = useRouter();
    return (
        <View style={styles.wrapper}>
            {(showBackButton || showMenuButton) && (
            <TouchableOpacity
            onPress={() => (showBackButton ? router.back() : console.log('Menu button pressed'))}
            style={{ position: 'absolute', top: 25, left: 15, zIndex: 10 }}
            >
            <View
            style={{
            width: 38,
            height: 38,
            backgroundColor: '#fff',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            }}
            >
            <Ionicons name={showBackButton ? "arrow-back" : "menu"} size={16} color="#000" />
            </View>
            </TouchableOpacity>
            )}
            {(showSettingsButton) && (<TouchableOpacity
            onPress={() => console.log('Settings button pressed')}
            style={{ position: 'absolute', top: 25, right: 15, zIndex: 10 }}
            >
            <View
            style={{
            width: 38,
            height: 38,
            backgroundColor: '#fff',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            }}
            >
            <Ionicons name="settings" size={16} color="#000" />
            </View>
            </TouchableOpacity>)}
            <Image style={{ width: "100%" }} source={require('../assets/images/wrapper-top.png')} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    }
});

export default Wrapper;
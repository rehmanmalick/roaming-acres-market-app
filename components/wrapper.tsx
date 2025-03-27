import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
    <View style={styles.wrapper}>
        <Image source={require('../assets/images/wrapper-top.png')} />
        {children}
    </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingVertical:0,
        paddingHorizontal: 0,
        backgroundColor: "#fff",
        alignItems: "center",
    }
});

export default Wrapper;
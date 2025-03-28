
import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';

interface NewArrivalProps {
  text: string;
  price: number;
  onPress: () => void;
}

export default function NewArrival({ text, price }: NewArrivalProps) {
  return (
    <>
    <View style={styles.container}>
    <Image
        source={require("../assets/images/new-arrival.png")}
        style={{height: 100 , width: 110}}
        resizeMode="contain"
        />
    <Text style={styles.price}>Lorem Ipsum is simply dummy text printing and typesetting.</Text>
    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>$50.00{price}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical:0,
        paddingHorizontal: 0,
        backgroundColor: "#fff",
        borderRadius:7,
        width:"30%"
    },
    price:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5,
        color: '#8391A1',
    },
    btn:{
        color: '#008080',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 10,
        fontWeight:'600'
    }
})

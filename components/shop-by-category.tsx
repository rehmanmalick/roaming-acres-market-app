
import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';

interface ShopByCategoryProps {
  text: string;
  price: number;
  onPress: () => void;
}

export default function ShopByCategory({ text, price, onPress }: ShopByCategoryProps) {
  return (
    <>
    <View style={styles.container}>
    <Image
        source={require("../assets/images/chicken.jpg")}
        style={{height: 100 }}
        resizeMode="contain"
        />
    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>{text}</Text>
    <Text style={styles.price}>Price: ${price}</Text>
    <TouchableOpacity>
        <Text style={styles.btn}>ADD TO CART</Text>
    </TouchableOpacity>
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
        borderRadius:7
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

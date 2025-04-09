
import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';

interface ShopCategoryProps {
  text?: string;
  source?: {uri : string};
  onPress?: () => void;
}

export default function ShopCategory({ text, source, onPress }: ShopCategoryProps) {
  return (
    <>
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
    <Image
        source={source}
        style={{height: 75 , width: 75, marginBottom: 5, alignSelf:"center", backgroundColor}}
        resizeMode="contain"
        />
    <Text style={{fontSize: 14, fontWeight: 'bold', alignSelf:"center"}}>{text}</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:0,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius:7,
    },

})

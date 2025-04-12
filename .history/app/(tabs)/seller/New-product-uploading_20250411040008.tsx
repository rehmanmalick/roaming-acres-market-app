import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProductUploadScreen() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [price, setPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access gallery is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Product</Text>

      <Pressable onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>
            Click to Upload Product Photo
          </Text>
        )}
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder="Give your product a name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Describe your product clearly"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Price $"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Sales Price $"
          value={salesPrice}
          onChangeText={setSalesPrice}
          keyboardType="numeric"
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <View style={styles.quantityContainer}>
        <Pressable
          onPress={() => setQuantity(Math.max(0, quantity - 1))}
          style={styles.qtyButton}
        >
          <Text style={styles.qtyText}>-</Text>
        </Pressable>
        <Text style={styles.qtyValue}>{quantity}</Text>
        <Pressable
          onPress={() => setQuantity(quantity + 1)}
          style={styles.qtyButton}
        >
          <Text style={styles.qtyText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.uploadButton}>
          <Text style={styles.buttonText}>UPLOAD PRODUCT</Text>
        </Pressable>
        <Pressable style={styles.cancelButton}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imagePicker: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 10,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  imagePlaceholder: {
    color: "#999",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  qtyButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 24,
  },
  qtyValue: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uploadButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
  },
  cancelButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

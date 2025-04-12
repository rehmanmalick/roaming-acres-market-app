import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [pricingLocation, setPricingLocation] = useState('');
  const [price, setPrice] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [category, setCategory] = useState('Phone');
  const [quantity, setQuantity] = useState('0');
  const [uploadPhoto, setUploadPhoto] = useState(false);

  const categories = [
    'Phone',
    'Electronics',
    'Clothing',
    'Home',
    'GAMES',
    'Books',
    'Other'
  ];

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      productName,
      description,
      pricingLocation,
      price,
      salesPrice,
      category,
      quantity,
      uploadPhoto
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Product</Text>
      </View>

      <View style={styles.navLinks}>
        <TouchableOpacity>
          <Text style={styles.navLink}>Try Temp</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Refer Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLink}>Built Upload Products</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadSection}>
        <Text style={styles.sectionTitle}>Check to button for <Text style={styles.bold}>Uploading</Text> product photo</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={uploadPhoto ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => setUploadPhoto(!uploadPhoto)}
            value={uploadPhoto}
          />
          <Text style={styles.switchLabel}>{uploadPhoto ? 'Photo will be uploaded' : 'No photo upload'}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Give your product a name</Text>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
          placeholder="Product name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe your product clearly"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Pricing Location</Text>
        <Text style={styles.subLabel}>Select Your Product Pricing Location</Text>
        <TextInput
          style={styles.input}
          value={pricingLocation}
          onChangeText={setPricingLocation}
          placeholder="Pricing location"
        />
      </View>

      <View style={styles.priceRow}>
        <View style={[styles.formGroup, styles.priceInput]}>
          <Text style={styles.label}>Price</Text>
          <View style={styles.priceInputContainer}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={[styles.input, { paddingLeft: 20 }]}
              value={price}
              onChangeText={setPrice}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={[styles.formGroup, styles.priceInput]}>
          <Text style={styles.label}>Sales Price</Text>
          <View style={styles.priceInputContainer}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={[styles.input, { paddingLeft: 20 }]}
              value={salesPrice}
              onChangeText={setSalesPrice}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Category</Text>
        {Platform.OS === 'ios' ? (
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((cat) => (
              <Picker.Item key={cat} label={cat} value={cat} />
            ))}
          </Picker>
        ) : (
          <View style={styles.androidPickerContainer}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={styles.picker}
            >
              {categories.map((cat) => (
                <Picker.Item key={cat} label={cat} value={cat} />
              ))}
            </Picker>
          </View>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="0"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navLink: {
    color: '#007AFF',
    fontSize: 14,
  },
  uploadSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  homeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  subLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInput: {
    width: '48%',
  },
  priceInputContainer: {
    position: 'relative',
  },
  currencySymbol: {
    position: 'absolute',
    left: 12,
    top: 12,
    fontSize: 16,
    zIndex: 1,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  androidPickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;
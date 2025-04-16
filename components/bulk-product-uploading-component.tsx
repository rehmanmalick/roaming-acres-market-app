import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Platform, Alert, Modal } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useRouter } from 'expo-router';  // Import the router
import Wrapper from '@/components/wrapper';

type UploadedFile = {
  id: string;
  name: string;
  externalId: string;
  progress: number;
};

const BulkUploadComponent: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [addingProgress, setAddingProgress] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);  // Modal visibility state
  const router = useRouter();  // Initialize the router

  const pickDocuments = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      multiple: true,
    });

    if (result?.assets) {
      const assets = result.assets;
      setIsAdding(true);
      setAddingProgress(0);

      const total = assets.length;

      const addNextFile = (index: number) => {
        if (index >= total) {
          setIsAdding(false);
          return;
        }

        const asset = assets[index];
        const isDuplicate = files.some(file => file.name === asset.name);

        if (isDuplicate) {
          Alert.alert("Duplicate File", `File "${asset.name}" is already added.`);
          addNextFile(index + 1);
          return;
        }

        const newFile: UploadedFile = {
          id: `${Date.now()}-${index}`,
          name: asset.name,
          externalId: `Product-template-${files.length + index + 1}`,
          progress: 0,
        };

        setFiles(prev => [...prev, newFile]);
        setAddingProgress((index + 1) / total);

        setTimeout(() => {
          addNextFile(index + 1); // simulate delay
        }, 400);
      };

      addNextFile(0);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const updateExternalId = (id: string, value: string) => {
    setFiles(prev =>
      prev.map(file =>
        file.id === id ? { ...file, externalId: value } : file
      )
    );
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 0.05;

      setFiles(prevFiles =>
        prevFiles.map(file =>
          file.id === fileId
            ? { ...file, progress: Math.min(progress, 1) }
            : file
        )
      );

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 100);
  };

  const uploadFiles = () => {
    setUploading(true);

    files.forEach(file => {
      simulateUpload(file.id);
    });

    const checkAllUploaded = setInterval(() => {
      setFiles(prevFiles => {
        const allUploaded = prevFiles.every(file => file.progress >= 1);
        if (allUploaded) {
          clearInterval(checkAllUploaded);
          setUploading(false);
          setModalVisible(true);  // Show modal after upload completion
        }
        return prevFiles;
      });
    }, 500);
  };

  return (
    <ScrollView
      className="bg-white"
      bounces={false}
      contentContainerStyle={{
        paddingBottom: Platform.OS === "ios" ? 100 : 80,
      }}
    >
      
        <View className="flex-1 bg-white ">
          

          <TouchableOpacity
            onPress={pickDocuments}
            className="border border-gray-200 rounded-xl bg-white h-40 justify-center items-center mb-4"
          >
            <Image
              source={require('../assets/images/bulkupload.png')}
              className="w-12 h-12"
            />
          </TouchableOpacity>

          <Text className="text-center text-sm text-gray-500 mb-3">
            Check the button for Bulk <Text className="text-[#008080] font-semibold">Uploading</Text> Products File Format
          </Text>

          <View className="flex-col items-start border border-gray-200 rounded-xl bg-white p-3 mb-4">
            <View className='border px-3 py-2 border-[#008080] rounded-[3px]'>
              <View className="flex-col items-center mb-1">
                <Image
                  source={require('../assets/images/bulkupload.png')}
                  className="w-8 h-8 opacity-60"
                />
                {!isAdding && <Text className='text-[12px] mt-1'>Add file</Text>}
              </View>

              {isAdding && (
                <Progress.Bar
                  progress={addingProgress}
                  width={null}
                  height={8}
                  color="#008080"
                  unfilledColor="#D9D9D9"
                  borderWidth={0}
                  borderRadius={0}
                />
              )}
            </View>
          </View>

          <View className="flex-1">
            {files.map((item) => (
              <View key={item.id} className="border border-[#008080] rounded-xl bg-white p-3 mb-4">
                <View className="flex-row justify-between mb-4 space-x-2">
                  <View style={{ width: '48%' }}>
                    <Text className="text-xs text-gray-400 mb-1">External ID</Text>
                    <TextInput
                      className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                      placeholder="Product-template-1"
                      value={item.externalId}
                      onChangeText={(text) => updateExternalId(item.id, text)}
                      editable={!uploading}
                    />
                  </View>

                  <View
                    style={{ width: '48%', marginTop: 18 }}
                    className="flex-row items-center justify-between border border-gray-300 rounded-md px-3 py-2"
                  >
                    <View className="flex-row items-center pr-2" style={{ maxWidth: '90%' }}>
                      <Ionicons name="document-text-outline" size={16} color="#008080" />
                      <Text
                        className="mx-2 text-sm text-gray-700"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {item.name}
                      </Text>
                    </View>
                    {!uploading && (
                      <TouchableOpacity onPress={() => removeFile(item.id)}>
                        <Ionicons name="close" size={16} color="#008080" />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                {uploading && (
                  <Progress.Bar
                    progress={item.progress}
                    width={null}
                    height={4}
                    color="#008080"
                    unfilledColor="#D9D9D9"
                    borderWidth={0}
                    borderRadius={0}
                    style={{ marginTop: 8 }}
                  />
                )}
              </View>
            ))}
          </View>

          <View className="flex-row justify-between mt-4">
            <TouchableOpacity
              onPress={uploadFiles}
              disabled={uploading || files.length === 0}
              className={`flex-1 ${uploading || files.length === 0 ? 'bg-gray-400' : 'bg-[#008080]'} py-3 rounded-md mr-2 items-center`}
            >
              <Text className="text-white font-bold text-sm">UPLOAD PRODUCTS</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border border-[#008080] py-3 rounded-md ml-2 items-center">
              <Text className="text-[#008080] font-bold text-sm">CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal for success */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: 10,
                // padding: 20,
                paddingHorizontal:30,
                paddingVertical:50,
                width: '90%',
                alignItems: 'center',
               

              }}
              className='flex flex-col gap-3'
            >
              <Image
                source={require('../assets/images/thumb.png')}  // Your success image
                style={{ width: 90, height: 90 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 18, marginVertical: 10, textAlign:'center', }}>
              Your bulk Products has been uploaded
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false); // Close modal
                  router.push('/seller/home-screen'); // Navigate to dashboard screen
                }}
                className="flex flex-row items-center gap-2 py-3 px-6 rounded-md"
              >
                <Text className=" font-bold text-lg">Back to Home Page</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      
    </ScrollView>
  );
};

export default BulkUploadComponent;

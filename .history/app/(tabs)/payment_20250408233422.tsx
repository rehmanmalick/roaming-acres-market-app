import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setShowEmojiPicker(!showEmojiPicker)}>
          <FontAwesome name="smile-o" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>

        <TextInput
          placeholder="Write somethings"
          placeholderTextColor="#000"
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.sendButton}>
          <Feather name="send" size={20} color="#f97316" />
        </TouchableOpacity>
      </View>

      {showEmojiPicker && (
        <EmojiSelector
          onEmojiSelected={handleEmojiSelect}
          showSearchBar={false}
          showSectionTitles={false}
          columns={8}
          style={{ height: 250 }}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

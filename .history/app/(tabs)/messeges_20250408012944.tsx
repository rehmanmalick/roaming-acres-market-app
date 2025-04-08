import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import ChatMessage from './ChatMessage';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hey there!',
      time: '10:30 AM',
      user: {
        id: '2',
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
    },
    {
      id: '2',
      text: 'Hi! How are you?',
      time: '10:31 AM',
      user: {
        id: '1', // current user
        name: 'You',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: Date.now().toString(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: {
        id: '1',
        name: 'You',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatMessage 
            message={item} 
            isCurrentUser={item.user.id === '1'} 
          />
        )}
        contentContainerStyle={styles.listContent}
        inverted
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
});

export default ChatScreen;
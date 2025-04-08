import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChatMessage = ({ message, isCurrentUser }) => {
  return (
    <View style={[
      styles.messageContainer,
      isCurrentUser ? styles.currentUserContainer : styles.otherUserContainer
    ]}>
      {!isCurrentUser && (
        <Image
          source={{ uri: message.user.avatar }}
          style={styles.avatar}
        />
      )}
      <View style={[
        styles.messageBubble,
        isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble
      ]}>
        {!isCurrentUser && (
          <Text style={styles.userName}>{message.user.name}</Text>
        )}
        <Text style={[
          styles.messageText,
          isCurrentUser ? styles.currentUserText : styles.otherUserText
        ]}>
          {message.text}
        </Text>
        <Text style={[
          styles.timeText,
          isCurrentUser ? styles.currentUserTime : styles.otherUserTime
        ]}>
          {message.time}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 10,
  },
  currentUserContainer: {
    justifyContent: 'flex-end',
  },
  otherUserContainer: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: '70%',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  currentUserBubble: {
    backgroundColor: '#0084ff',
    borderBottomRightRadius: 0,
  },
  otherUserBubble: {
    backgroundColor: '#f1f0f0',
    borderBottomLeftRadius: 0,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
    color: '#333',
  },
  messageText: {
    fontSize: 16,
  },
  currentUserText: {
    color: 'white',
  },
  otherUserText: {
    color: 'black',
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'right',
  },
  currentUserTime: {
    color: '#e6e6e6',
  },
  otherUserTime: {
    color: '#666',
  },
});

export default ChatMessage;
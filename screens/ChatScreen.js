import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function ChatScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Chat Screen</Text>
      <Button onClick={()=>(alert("Button clicked on Chat Screen"))}>Chat Screen</Button>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

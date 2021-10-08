import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function PostScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Post Screen</Text>
      <Button onClick={()=>(alert("Button clicked on Post Screen"))}>Post Screen</Button>
    </View>
  );
}

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

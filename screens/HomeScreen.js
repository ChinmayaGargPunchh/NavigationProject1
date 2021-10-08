import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Home Screen</Text>
      <Button onClick={()=>(alert("Button clicked on Home Screen"))}>Home Screen</Button>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function FindScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Find Screen</Text>
      <Button onClick={()=>(alert("Button clicked on Find Screen"))}>Find Screen</Button>
    </View>
  );
}

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

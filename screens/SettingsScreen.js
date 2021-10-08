import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function SettingsScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Settings Screen</Text>
      <Button onClick={()=>(alert("Button clicked on Settings Screen"))}>Settings Screen</Button>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

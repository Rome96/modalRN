import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalExample from './src/components/Modal';

export default function App() {
  return (
    <View style={styles.container}>
      <ModalExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  },
});

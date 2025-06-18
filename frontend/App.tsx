import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import wordInfo from './src/mock_data/word_data';
import ClickableWord from './src/components/ClickableWord';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <ClickableWord {...wordInfo[0]}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});
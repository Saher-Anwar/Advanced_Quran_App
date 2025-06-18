import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import wordInfo from './src/mock_data/word_data';
import ClickableWord from './src/components/ClickableWord';
import ParagraphWithClickableWords from './src/components/ParagraphWithClickableWords';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Clickable Paragraph</Text>
      <ParagraphWithClickableWords words={wordInfo} />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
})
import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import wordInfo from './src/mock_data/word_data';
import ParagraphWithClickableWords from './src/components/ParagraphWithClickableWords';
import { I18nManager } from 'react-native';
import arabicWordInfo from './src/mock_data/arabic_word_data';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Clickable Paragraph</Text>
      <ParagraphWithClickableWords words={arabicWordInfo} />
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
import { RefObject, useRef, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { ClickableWordProps } from "../types/Word";

const ClickableWord = ({ word, onWordPress, isSelected }: ClickableWordProps) => {
  const ref = useRef<View>(null);
  
  const handlePress = () => {
    onWordPress(word, ref as RefObject<View>);
  };
  
  return (
    <TouchableOpacity
      ref={ref}
      onPress={handlePress}
      style={[
        styles.wordButton,
        isSelected && styles.wordButtonSelected
      ]}>

      <Text style={[
        styles.wordText,
        isSelected && styles.wordTextSelected
      ]}>
        {word.word}
      </Text>

    </TouchableOpacity>
  );
};

export default ClickableWord

const styles = StyleSheet.create({
  wordButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    borderStyle: 'dotted',
  },
  wordText: {
    fontSize: 16,
    color: '#007AFF',
    lineHeight: 24,
  },
  wordButtonSelected: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderBottomWidth: 0,
  },
  wordTextSelected: {
    color: 'white',
    fontWeight: '600',
  },
});
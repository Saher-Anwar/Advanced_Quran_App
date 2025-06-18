import { RefObject, useRef, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { WordInfo } from "../types/Word";
import CustomPopover from "./CustomPopover";
import { ClickableWordProps } from "../types/Word";


const ClickableWord = ({ word, onWordPress }: ClickableWordProps) => {
  const ref = useRef<View>(null);
  
  const handlePress = () => {
    onWordPress(word, ref as RefObject<View>);
  };
  
  return (
    <TouchableOpacity
      ref={ref}
      onPress={handlePress}
      style={styles.wordButton}>
      <Text style={styles.wordText}>{word.word}</Text>
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
});


import { RefObject, useState } from "react";
import { WordInfo } from "../types/Word";
import { View, Text, StyleSheet } from "react-native";
import SharedPopover from "./SharedPopover";
import ClickableWord from "./ClickableWord";
import React from "react";

const ParagraphWithClickableWords = ({ words }: { words: WordInfo[] }) => {
  const [selectedWord, setSelectedWord] = useState<WordInfo | null>(null);
  const [anchorRef, setAnchorRef] = useState<RefObject<View> | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleWordPress = (word: WordInfo, ref: RefObject<View>) => {
    setSelectedWord(word);
    setAnchorRef(ref);
    setIsPopoverVisible(true);
  };

  const handleClosePopover = () => {
    setIsPopoverVisible(false);
    setSelectedWord(null);
    setAnchorRef(null);
  };

  return (
    <View style={styles.paragraphContainer}>
      <View style={styles.paragraph}>
        {words.map((word, index) => (
          <React.Fragment key={`${word.word}-${index}`}>
            <ClickableWord
              word={word}
              onWordPress={handleWordPress}
              isSelected={selectedWord?.id === word.id && isPopoverVisible}
            />
            {/* Add space between words */}
            {index < words.length - 1 && <Text style={styles.space}> </Text>}
          </React.Fragment>
        ))}
      </View>
      
      {/* Single shared popover */}
      <SharedPopover
        word={selectedWord as WordInfo}
        anchorRef={anchorRef as RefObject<Text>}
        isVisible={isPopoverVisible}
        onClose={handleClosePopover}
      />
    </View>
  );
};

export default ParagraphWithClickableWords

const styles = StyleSheet.create({
  paragraphContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paragraph: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: 24,
  },
  space: {
    fontSize: 16,
    lineHeight: 24,
  },
})
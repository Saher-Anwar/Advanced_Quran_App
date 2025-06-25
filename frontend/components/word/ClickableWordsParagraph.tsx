import { RefObject, useState } from 'react';
import { WordInfo } from '../../types/Word';
import { View, Text } from 'react-native';
import SharedModal from './SharedPopover';
import ClickableWord from './ClickableWord';
import React from 'react';

const ClickableWordsParagraph = ({ words }: { words: WordInfo[] }) => {
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
    <View className="relative rounded-2xl border bg-white/15 p-4">
      {/* Words Container */}
      <View className="flex-row flex-wrap justify-center leading-relaxed">
        {words.map((word, index) => (
          <React.Fragment key={`${word.id}-${index}`}>
            <ClickableWord
              word={word}
              onWordPress={handleWordPress}
              isSelected={selectedWord?.id === word.id && isPopoverVisible}
            />
            {/* Add space between words */}
            {index < words.length - 1 && <Text className="mx-1 text-2xl text-gray-700"> </Text>}
          </React.Fragment>
        ))}
      </View>

      {/* Popover */}
      <SharedModal
        word={selectedWord as WordInfo}
        anchorRef={anchorRef as RefObject<View>}
        isVisible={isPopoverVisible}
        onClose={handleClosePopover}
      />
    </View>
  );
};

export default ClickableWordsParagraph;

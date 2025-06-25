import { RefObject, useRef } from 'react';
import { Text, View } from 'react-native';
import { ClickableWordProps } from '../../types/Word';

const ClickableWord = ({ word, onWordPress, isSelected }: ClickableWordProps) => {
  const wordRef = useRef<View>(null);

  const handlePress = () => {
    onWordPress(word, wordRef as RefObject<View>);
  };

  return (
    <View ref={wordRef}>
      <Text
        onPress={handlePress}
        className={`rounded px-1 py-1 font-arabic text-2xl font-medium ${
          isSelected ? 'bg-white/75 text-quranGreen' : 'active:bg-white/16 text-white'
        }`}
        style={{
          textAlign: 'center',
        }}>
        {word.word}
      </Text>
    </View>
  );
};

export default ClickableWord;

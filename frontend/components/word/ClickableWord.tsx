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
          isSelected ? 'bg-indigo-100 text-indigo-800' : 'text-gray-800 active:bg-gray-100'
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

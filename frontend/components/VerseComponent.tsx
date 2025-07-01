import { View, Text } from 'react-native';
import ClickableWordsParagraph from './word/ClickableWordsParagraph';
import { Verse } from 'types/Surah';

const VerseComponent = ({ verse, verseIndex }: { verse: Verse; verseIndex: number }) => {
  return (
    <View className="bg-white/16 mb-6 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
      {/* Verse Number */}
      <View className="border-b border-indigo-100 bg-white/15 px-4 py-3">
        <Text className="text-lg font-semibold text-white">Verse {verse.verseNumber}</Text>
      </View>

      {/* Verse Content */}
      <View className="p-6">
        <ClickableWordsParagraph words={verse.words} />

        {/* Translation */}
        <View className="mt-6 border-t border-gray-100 pt-4">
          <Text className="text-base italic leading-relaxed text-gray-600">
            {verse.translation}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VerseComponent;

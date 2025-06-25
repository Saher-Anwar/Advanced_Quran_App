import React, { useCallback } from 'react';
import CustomListItem from './CustomListItem';
import { useNavigation } from 'hooks/useNavigation';
import { SAMPLE_SURAHS } from 'mock_data/list_item_data';

// Types
export interface Surah {
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly nameArabic: string;
  readonly verses: number;
}

// Components
const SurahCard = React.memo(({ surah }: { readonly surah: Surah }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    console.log('Default handler:', surah.name);
    navigation.navigate('Chapter', {
      surahInfo: { chapterNumber: 1, chapterName: 'Al-Fatiha', totalVerses: 110, verses: [] },
    });
  }, [navigation, surah]);

  return (
    <CustomListItem
      title={surah.name}
      subtitle={surah.nameArabic}
      icon={surah.number.toString()}
      onPress={handlePress}
    />
  );
});

SurahCard.displayName = 'SurahCard';

export default SurahCard;

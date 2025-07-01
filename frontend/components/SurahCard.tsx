import React, { useCallback } from 'react';
import CustomListItem from './CustomListItem';
import { useNavigation } from 'hooks/useNavigation';
import { Surah } from 'types/Chapter';

const SurahCard = React.memo(({ surah }: { readonly surah: Surah }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    console.log('Default handler:', surah.name);
    navigation.navigate('Chapter', {
      surahInfo: {
        chapterNumber: surah.id,
        chapterName: surah.name,
        totalVerses: 110,
        verses: [],
      },
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

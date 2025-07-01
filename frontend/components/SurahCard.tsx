import React, { useCallback } from 'react';
import CustomListItem from './CustomListItem';
import { useNavigation } from 'hooks/useNavigation';
import { Surah } from 'types/Surah';

const SurahCard = React.memo(({ surah }: { readonly surah: Surah }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    console.log('Default handler:', surah.name);
    navigation.navigate('Chapter', {
      surahInfo: {
        number: surah.id,
        name: surah.name,
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

import React, { useCallback } from 'react';
import CustomListItem from './CustomListItem';

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
  const handlePress = useCallback(() => {
    console.log('Default handler:', surah.name);
  }, [surah.name]);

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

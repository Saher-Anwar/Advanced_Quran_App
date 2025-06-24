import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { APP_THEMES } from 'utils/constants';
import CustomListItem from './CustomListItem';

// Types
export interface Surah {
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly nameArabic: string;
  readonly verses: number;
}

export interface SurahListProps {
  readonly surahs?: readonly Surah[];
  readonly onSurahPress?: (surah: Surah) => void;
}

// Components
const SurahCard = React.memo(
  ({ surah, onPress }: { readonly surah: Surah; readonly onPress?: (surah: Surah) => void }) => {
    const handlePress = useCallback(() => {
      onPress?.(surah);
    }, [surah, onPress]);

    return <CustomListItem title={surah.name} icon={'' + surah.number} onPress={() => {}} />;
  }
);

SurahCard.displayName = 'SurahCard';

export default SurahCard;

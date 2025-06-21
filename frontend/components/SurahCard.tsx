import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

// Types
export interface Surah {
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly nameArabic: string;
  readonly verses: number;
} // Props interface
export interface SurahListProps {
  readonly surahs?: readonly Surah[];
  readonly onSurahPress?: (surah: Surah) => void;
}

// Components
const SurahCard: React.FC<{
  readonly surah: Surah;
  readonly onPress?: (surah: Surah) => void;
}> = React.memo(({ surah, onPress }) => {
  const handlePress = useCallback(() => {
    onPress?.(surah);
  }, [surah, onPress]);

  return (
    <Card className="elevation-2 mx-4 mb-3" onPress={handlePress}>
      <Card.Content className="py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text variant="titleMedium" className="font-semibold text-gray-800">
              {surah.number}. {surah.name}
            </Text>
            <Text variant="bodyMedium" className="mt-1 text-gray-600">
              {surah.nameArabic}
            </Text>
            <Text variant="bodySmall" className="mt-1 text-gray-500">
              {surah.verses} {surah.verses === 1 ? 'verse' : 'verses'}
            </Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Text variant="labelLarge" className="font-bold text-green-700">
              {surah.number}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
});

SurahCard.displayName = 'SurahCard';

export default SurahCard;

import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/navigation';
import VerseComponent from 'components/VerseComponent';
import { useEffect, useState } from 'react';
import { SurahData } from 'types/Surah';
import { fetchSurahData } from 'mock_data/surahs_mock_data';
import PageTitle from 'components/PageTitle';

type SurahScreenProps = NativeStackScreenProps<RootStackParamList, 'Chapter'>;

const SurahScreen = ({ route }: SurahScreenProps) => {
  const { surahInfo } = route.params;
  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API call to fetch chapter verses
  useEffect(() => {
    const loadSurahData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use mock data instead of real API
        const data = await fetchSurahData(surahInfo.number.toString());
        setSurahData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadSurahData();
  }, [surahInfo.number]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#6366f1" />
        <Text className="mt-4 text-gray-600">Loading chapter...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50 px-4">
        <Text className="mb-4 text-center text-lg text-red-500">Error loading chapter</Text>
        <Text className="text-center text-gray-600">{error}</Text>
      </View>
    );
  }

  if (!surahData) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <Text className="text-gray-500">No chapter data available</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
      <View className="px-4 py-6">
        {/* Chapter Header */}
        <PageTitle
          title={surahData.name}
          subtitle={`Chapter ${surahData.number} • ${surahData.totalVerses} verses`}
          quote={undefined}
        />

        {/* Verses */}
        {surahData.verses.map((verse, index) => (
          <VerseComponent key={`verse-${verse.verseNumber}`} verse={verse} verseIndex={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SurahScreen;

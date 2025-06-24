import { Surah } from 'components/SurahCard';

// Define the expected parameters of each screen
export type RootStackParamList = {
  Home: undefined;
  ChapterList: undefined;
  Chapter: { surahInfo: Surah };
};

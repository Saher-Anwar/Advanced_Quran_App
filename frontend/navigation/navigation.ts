import { SurahData } from 'types/Surah';

// Define the expected parameters of each screen
export type RootStackParamList = {
  Home: undefined;
  SurahList: undefined;
  Surah: { surahInfo: SurahData };
};

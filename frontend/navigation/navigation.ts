import { Surah } from 'types/Surah';
import { ChapterData } from 'types/Word';

// Define the expected parameters of each screen
export type RootStackParamList = {
  Home: undefined;
  ChapterList: undefined;
  Chapter: { surahInfo: ChapterData };
};

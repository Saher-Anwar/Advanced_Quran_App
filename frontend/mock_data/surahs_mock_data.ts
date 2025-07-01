import { SurahData } from 'types/Surah';

// Mock data for different chapters
export const mockSurahData: Record<string, SurahData> = {
  '1': {
    number: 1,
    name: 'Al-Fatiha',
    totalVerses: 7,
    verses: [
      {
        verseNumber: 1,
        translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        words: [
          {
            id: '1-1-1',
            word: 'بِسْمِ',
            translation: 'In the name',
            transliteration: 'bismi',
            wordNumber: 1,
            root: 'س م و',
            partOfSpeech: 'preposition + noun',
          },
          {
            id: '1-1-2',
            word: 'اللَّهِ',
            translation: 'of Allah',
            transliteration: 'allahi',
            wordNumber: 2,
            root: 'ا ل ه',
            partOfSpeech: 'proper noun',
          },
          {
            id: '1-1-3',
            word: 'الرَّحْمَٰنِ',
            translation: 'the Entirely Merciful',
            transliteration: 'ar-rahmani',
            wordNumber: 3,
            root: 'ر ح م',
            partOfSpeech: 'adjective',
          },
          {
            id: '1-1-4',
            word: 'الرَّحِيمِ',
            translation: 'the Especially Merciful',
            transliteration: 'ar-raheem',
            wordNumber: 4,
            root: 'ر ح م',
            partOfSpeech: 'adjective',
          },
        ],
      },
      {
        verseNumber: 2,
        translation: 'All praise is due to Allah, Lord of the worlds.',
        words: [
          {
            id: '1-2-1',
            word: 'الْحَمْدُ',
            translation: 'All praise',
            transliteration: 'al-hamdu',
            wordNumber: 1,
            root: 'ح م د',
            partOfSpeech: 'noun',
          },
          {
            id: '1-2-2',
            word: 'لِلَّهِ',
            translation: 'is for Allah',
            transliteration: 'lillahi',
            wordNumber: 2,
            root: 'ا ل ه',
            partOfSpeech: 'preposition + proper noun',
          },
          {
            id: '1-2-3',
            word: 'رَبِّ',
            translation: 'Lord',
            transliteration: 'rabbi',
            wordNumber: 3,
            root: 'ر ب ب',
            partOfSpeech: 'noun',
          },
          {
            id: '1-2-4',
            word: 'الْعَالَمِينَ',
            translation: 'of the worlds',
            transliteration: "al-'alameen",
            wordNumber: 4,
            root: 'ع ل م',
            partOfSpeech: 'noun',
          },
        ],
      },
      {
        verseNumber: 3,
        translation: 'The Entirely Merciful, the Especially Merciful,',
        words: [
          {
            id: '1-3-1',
            word: 'الرَّحْمَٰنِ',
            translation: 'The Entirely Merciful',
            transliteration: 'ar-rahmani',
            wordNumber: 1,
            root: 'ر ح م',
            partOfSpeech: 'adjective',
          },
          {
            id: '1-3-2',
            word: 'الرَّحِيمِ',
            translation: 'the Especially Merciful',
            transliteration: 'ar-raheem',
            wordNumber: 2,
            root: 'ر ح م',
            partOfSpeech: 'adjective',
          },
        ],
      },
    ],
  },
  '2': {
    number: 2,
    name: 'Al-Baqarah',
    totalVerses: 286,
    verses: [
      {
        verseNumber: 1,
        translation: 'Alif, Lam, Meem.',
        words: [
          {
            id: '2-1-1',
            word: 'الم',
            translation: 'Alif, Lam, Meem',
            transliteration: 'alif lam meem',
            wordNumber: 1,
            partOfSpeech: 'disjointed letters',
          },
        ],
      },
      {
        verseNumber: 2,
        translation:
          'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
        words: [
          {
            id: '2-2-1',
            word: 'ذَٰلِكَ',
            translation: 'This',
            transliteration: 'dhalika',
            wordNumber: 1,
            root: 'ذ ل ك',
            partOfSpeech: 'demonstrative pronoun',
            type: 'Test',
          },
          {
            id: '2-2-2',
            word: 'الْكِتَابُ',
            translation: 'the Book',
            transliteration: 'al-kitabu',
            wordNumber: 2,
            root: 'ك ت ب',
            partOfSpeech: 'noun',
          },
          {
            id: '2-2-3',
            word: 'لَا',
            translation: 'no',
            transliteration: 'la',
            wordNumber: 3,
            partOfSpeech: 'particle',
          },
          {
            id: '2-2-4',
            word: 'رَيْبَ',
            translation: 'doubt',
            transliteration: 'rayba',
            wordNumber: 4,
            root: 'ر ي ب',
            partOfSpeech: 'noun',
          },
          {
            id: '2-2-5',
            word: 'فِيهِ',
            translation: 'in it',
            transliteration: 'feehi',
            wordNumber: 5,
            root: 'ف ي ي',
            partOfSpeech: 'preposition + pronoun',
          },
        ],
      },
    ],
  },
};

// Mock API function to simulate fetching data
export const fetchSurahData = async (chapterId: string): Promise<SurahData> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = mockSurahData[chapterId];

  if (!data) {
    throw new Error(`Chapter ${chapterId} not found`);
  }

  return data;
};

// Mock function to get all available chapters
export const getAvailableSurahs = (): {
  id: string;
  name: string;
  totalVerses: number;
}[] => {
  return Object.values(mockSurahData).map((surah) => ({
    id: surah.number.toString(),
    name: surah.name,
    totalVerses: surah.totalVerses,
  }));
};

import { WordInfo } from './Word';

export interface Surah {
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly nameArabic: string;
  readonly verses: number;
}
export interface Verse {
  verseNumber: number;
  translation?: string;
  words: WordInfo[];
}

export interface SurahData {
  number: number;
  name: string;
  totalVerses: number;
  verses: Verse[];
}

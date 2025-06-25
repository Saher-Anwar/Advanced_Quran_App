import { RefObject } from 'react';
import { View } from 'react-native';

export interface WordInfo {
  id: string;
  word: string;
  translation: string;
  transliteration?: string;
  wordNumber?: number;
  root?: string;
  type?: string;
  example?: string;
  partOfSpeech?: string;
}

export interface Verse {
  verseNumber: number;
  translation?: string;
  words: WordInfo[];
}

export interface ChapterData {
  chapterNumber: number;
  chapterName: string;
  totalVerses: number;
  verses: Verse[];
}

export interface ClickableWordProps {
  word: WordInfo;
  onWordPress: (word: WordInfo, ref: RefObject<View>) => void;
  isSelected: boolean;
}

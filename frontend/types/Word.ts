import { RefObject } from 'react';
import { View } from 'react-native';

export interface WordInfo {
  id: number;
  word: string;
  definition: string;
  type: string;
  example?: string;
}

export interface Verse {
  verseNumber: number;
  words: WordInfo[];
}

export interface ChapterData {
  verses: Verse[];
}

export interface ClickableWordProps {
  word: WordInfo;
  onWordPress: (word: WordInfo, ref: RefObject<View>) => void;
  isSelected: boolean;
}

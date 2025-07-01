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

export interface ClickableWordProps {
  word: WordInfo;
  onWordPress: (word: WordInfo, ref: RefObject<View>) => void;
  isSelected: boolean;
}

export interface ListItemDataProp {
  name: string;
  arabicName: string;
  translation: string;
  revelationType: 'Meccan' | 'Medinan';
  numOfVerses: number;
  chapterNumber: number;
}

export interface ListItemComponentProp {
  data: ListItemDataProp;
  onPress: () => void;
}
export interface Surah {
  readonly id: number;
  readonly number: number;
  readonly name: string;
  readonly nameArabic: string;
  readonly verses: number;
}

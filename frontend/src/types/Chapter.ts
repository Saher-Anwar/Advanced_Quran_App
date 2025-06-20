export interface ChapterListItemData {
  name: string;
  arabicName: string;
  translation: string;
  revelationType: 'Meccan' | 'Medinan';
  numOfVerses: number;
  chapterNumber: number;
}

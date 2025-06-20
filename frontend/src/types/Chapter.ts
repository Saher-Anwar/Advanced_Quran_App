export interface ChapterListItemProp {
  name: string;
  arabicName: string;
  translation: string;
  revelationType: "Meccan" | "Medinan";
  numOfVerses: number;
  chapterNumber: number;
}

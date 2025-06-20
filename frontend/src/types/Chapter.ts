export interface ListItemDataProp {
  name: string;
  arabicName: string;
  translation: string;
  revelationType: "Meccan" | "Medinan";
  numOfVerses: number;
  chapterNumber: number;
}

export interface ListItemComponentProp {
  data: ListItemDataProp;
  onPress: () => void;
}

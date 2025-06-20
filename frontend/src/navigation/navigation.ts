import { ChaptersList } from "../types/Chapter";

export type RootStackParamList = {
  Home: undefined;
  ChapterList: { chapters: ChaptersList };
  Chapter: undefined;
};

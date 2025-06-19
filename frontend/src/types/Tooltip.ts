import { WordInfo } from "./Word";

export interface TooltipData {
  word: string;
  info: WordInfo[string];
  position: { x: number; y: number };
}

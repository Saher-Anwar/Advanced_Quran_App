import { RefObject } from "react";
import { WordInfo } from "../types/Word";
import { View } from "react-native";

export interface SharedPopoverProps {
  word: WordInfo;
  anchorRef: RefObject<View>;
  isVisible: boolean;
  onClose: () => void;
}

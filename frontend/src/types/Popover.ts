import { RefObject } from "react";
import { WordInfo } from "./Word";
import { View } from "react-native";

export interface PopoverData{
    word: WordInfo
    anchorPoint: RefObject<View>
    isVisible: boolean
    onClose: () => void
}
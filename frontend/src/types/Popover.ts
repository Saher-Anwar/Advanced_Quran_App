import { RefObject } from "react";
import { WordInfo } from "./Word";
import { View } from "react-native";

export interface PopoverData{
    words: WordInfo
    anchorPoint: RefObject<View>
}
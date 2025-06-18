import { RefObject } from "react";
import { WordInfo } from "./Word";
import { View, TouchableOpacity } from "react-native";

export interface SharedPopoverProps{
    word: WordInfo
    anchorRef: RefObject<View>
    isVisible: boolean
    onClose: () => void
}

export interface ClickableWordProps {
    word: WordInfo
    onWordPress: (word:WordInfo, ref: RefObject<View>) => void
}
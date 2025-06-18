import wordInfo from "../mock_data/word_data";

export interface WordInfo {
    word: string
    definition: string;
    type: string;
    example?: string;
}
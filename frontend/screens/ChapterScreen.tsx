import { View, Text, StyleSheet } from "react-native";
import ClickableWordsParagraph from "../components/word/ClickableWordsParagraph";
import arabicWordInfo from "../mock_data/arabic_word_data";

const ChapterScreen = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Clickable Paragraph</Text>
      <ClickableWordsParagraph words={arabicWordInfo} />
    </View>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

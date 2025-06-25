import { View, Text, StyleSheet } from 'react-native';
import ClickableWordsParagraph from '../components/word/ClickableWordsParagraph';
import arabicWordInfo from '../mock_data/arabic_word_data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/navigation';

type ChapterScreenProps = NativeStackScreenProps<RootStackParamList, 'Chapter'>;

const ChapterScreen = ({ route }: ChapterScreenProps) => {
  const surahInfo = route.params.surahInfo;

  return (
    <View style={styles.appContainer}>
      <Text onPress={() => console.log(`${surahInfo.name}`)} style={styles.title}>
        Clickable Paragraph
      </Text>
      <ClickableWordsParagraph words={arabicWordInfo} />
    </View>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

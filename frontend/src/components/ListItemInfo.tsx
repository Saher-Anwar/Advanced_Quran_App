import { StyleSheet, Text, View } from "react-native";
import { ChapterListItemData } from "../types/Chapter";

const ListItemInfo = ({
  name,
  arabicName,
  translation,
  revelationType,
  numOfVerses,
  chapterNumber,
}: ChapterListItemData) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.subInfo}>
        {revelationType} | {numOfVerses} verses
      </Text>
    </View>
  );
};

export default ListItemInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameText: {
    fontSize: 24,
  },
  subInfo: {
    fontStyle: "italic",
  },
});

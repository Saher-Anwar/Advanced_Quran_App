import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import NumberSymbol from "./NumberSymbol";
import { ChapterListItemProp } from "../types/Chapter";
import ListItemInfo from "./ListItemInfo";

const ListItemComponent = (listItemInfo: ChapterListItemProp) => {
  return (
    <TouchableOpacity style={styles.container} onPress={listItemInfo.onPress}>
      <View style={styles.symbolContainer}>
        <NumberSymbol number={listItemInfo.chapterNumber} />
      </View>
      <View style={styles.listItemInfoContainer}>
        <ListItemInfo {...listItemInfo}></ListItemInfo>
      </View>
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}>{listItemInfo.translation}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightblue",
    margin: 10,
  },
  symbolContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  listItemInfoContainer: {
    width: "60%",
    backgroundColor: "yellow",
    paddingHorizontal: 10,
  },
  translationContainer: {
    width: "30%",
    backgroundColor: "gray",
    paddingHorizontal: 5,
  },
  translationText: {
    textAlign: "center",
    fontSize: 18,
  },
});

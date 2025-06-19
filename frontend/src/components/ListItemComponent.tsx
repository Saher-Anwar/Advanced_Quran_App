import { StyleSheet, View, Text } from "react-native";
import NumberSymbol from "./NumberSymbol";
import { ChapterListItemData } from "../types/Chapter";
import ListItemInfo from "./ListItemInfo";

const ListItemComponent = (listItemInfo: ChapterListItemData) => {
  return (
    <View style={styles.container}>
      <View style={styles.symbolContainer}>
        <NumberSymbol number={0}/>
      </View>
      <View style={styles.listItemInfoContainer}>
        <ListItemInfo {...listItemInfo}></ListItemInfo>
      </View>
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}>{listItemInfo.translation}</Text>
      </View>
    </View>
  )
};

export default ListItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    margin: 10
  },
  symbolContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  listItemInfoContainer: {
    flexGrow: 4,
    flexShrink: 0,
    backgroundColor: 'yellow',
    paddingHorizontal: 10
  },
  translationContainer: {
    flex: 4,
    backgroundColor: 'gray',
    paddingHorizontal: 5
  },
  translationText: {
    textAlign: 'center',
    fontSize: 18
  }
})
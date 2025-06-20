import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import NumberSymbol from "./NumberSymbol";
import { ListItemComponentProp, ListItemDataProp } from "../types/Chapter";
import ListItemInfo from "./ListItemInfo";

const ListItemComponent = (listItemComponentInfo: ListItemComponentProp) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={listItemComponentInfo.onPress}
    >
      <View style={styles.symbolContainer}>
        <NumberSymbol number={listItemComponentInfo.data.chapterNumber} />
      </View>
      <View style={styles.listItemInfoContainer}>
        <ListItemInfo {...listItemComponentInfo.data}></ListItemInfo>
      </View>
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}>
          {listItemComponentInfo.data.translation}
        </Text>
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

import React from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListItemComponent from "../components/ListItemComponent";
import { chapters } from "../mock_data/list_item_data";
import { ChapterListItemData } from "../types/Chapter";

interface ChaptersList {
  chapters: ChapterListItemData[];
}

const ChapterListScreen = ({ chapters }: ChaptersList) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={chapters}
          renderItem={({ item }) => <ListItemComponent {...item} />}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ChapterListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "gray",
  },
});

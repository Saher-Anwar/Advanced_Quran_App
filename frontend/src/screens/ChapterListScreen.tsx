import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListItemComponent from "../components/ListItemComponent";
import { listOfChapters } from "../mock_data/list_item_data";
import { useNavigation } from "../hooks/useNavigation";

const ChapterListScreen = () => {
  const navigation = useNavigation();

  const navigateToChapterScreen = () => {
    navigation.navigate("Chapter");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listOfChapters}
          renderItem={({ item }) => (
            <ListItemComponent onPress={navigateToChapterScreen} data={item} />
          )}
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

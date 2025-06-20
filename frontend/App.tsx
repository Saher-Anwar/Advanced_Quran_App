import React from "react";
import { StyleSheet } from "react-native";
import { chapters } from "./src/mock_data/list_item_data";
import ChapterListScreen from "./src/screens/ChapterListScreen";

const App = () => {
  return <ChapterListScreen chapters={[...chapters]} />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "gray",
  },
});

import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import ListItemComponent from "./src/components/ListItemComponent";
import { chapters } from "./src/mock_data/list_item_data";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ListItemComponent {...chapters[0]} />
        <ListItemComponent {...chapters[1]} />
        <ListItemComponent {...chapters[2]} />

        <ListItemComponent {...chapters[3]} />

        <ListItemComponent {...chapters[4]} />

        <ListItemComponent {...chapters[5]} />

        <ListItemComponent {...chapters[6]} />

        <ListItemComponent {...chapters[7]} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "gray",
  },
});

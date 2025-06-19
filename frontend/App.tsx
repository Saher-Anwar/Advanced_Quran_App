import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import ListItemInfo, { ListItemProps } from "./src/components/ListItemInfo";
import ListItemComponent from "./src/components/ListItemComponent";

const App = () => {
  const listItem : ListItemProps = {name: "Al-Fatihah", revelationType: "Meccan", numOfVerses: 7, translation: "The Opening"}

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <ListItemComponent {...listItem}/>
        <ListItemComponent {...listItem}/>
        <ListItemComponent {...listItem}/>

        <ListItemComponent {...listItem}/>

        <ListItemComponent {...listItem}/>

        <ListItemComponent {...listItem}/>

        <ListItemComponent {...listItem}/>

        <ListItemComponent {...listItem}/>

      </View>
      
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: 'gray',
  },
});

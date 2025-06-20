import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return <AppNavigator />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "gray",
  },
});

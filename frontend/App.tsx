import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import NumberSymbol from "./src/components/NumberSymbol";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <NumberSymbol number={0} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

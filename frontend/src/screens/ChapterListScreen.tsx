import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListItemComponent from "../components/ListItemComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";

type ChapterListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ChapterList"
>;

const ChapterListScreen = ({ route }: ChapterListScreenProps) => {
  const { chapters } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={chapters.chapters}
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

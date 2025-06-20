import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "../hooks/useNavigation";
import { chapters } from "../mock_data/list_item_data";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToChapterList = () => {
    navigation.navigate("ChapterList", { chapters: chapters });
  };

  return (
    <View style={styles.page}>
      <View style={styles.buttonsContainer}>
        {/* List of buttons to navigate to different screens */}
        <Button title="Chapter" onPress={navigateToChapterList} />
        <Button title="Settings" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    paddingVertical: 20,
    marginHorizontal: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});

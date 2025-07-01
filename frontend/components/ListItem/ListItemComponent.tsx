import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ListItemComponentProp, ListItemDataProp } from 'types/ListItemProps';
import ListItemInfo from './ListItemInfo';
import NumberSymbol from './NumberSymbol';

const ListItemComponent = ({ data, onPress }: ListItemComponentProp) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.symbolContainer}>
      <NumberSymbol number={data.number} />
    </View>
    <View style={styles.listItemInfoContainer}>
      <ListItemInfo {...data} />
    </View>
    <View style={styles.translationContainer}>
      <Text style={styles.translationText}>{data.translation}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItemComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    margin: 10,
  },
  symbolContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  listItemInfoContainer: {
    width: '60%',
    backgroundColor: 'yellow',
    paddingHorizontal: 10,
  },
  translationContainer: {
    width: '30%',
    backgroundColor: 'gray',
    paddingHorizontal: 5,
  },
  translationText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

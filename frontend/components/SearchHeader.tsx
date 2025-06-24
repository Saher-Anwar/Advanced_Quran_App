import { View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const SearchHeader: React.FC<{
  readonly searchQuery: string;
  readonly onSearchChange: (query: string) => void;
  readonly onClose: () => void;
}> = ({ searchQuery, onSearchChange, onClose }) => (
  <View className="flex-1 flex-row items-center px-2">
    <Searchbar
      placeholder="Search surahs..."
      onChangeText={onSearchChange}
      value={searchQuery}
      className="mx-2 flex-1"
      inputStyle={{ fontSize: 16 }}
      autoFocus
    />
    <Appbar.Action
      icon="close"
      iconColor="white"
      onPress={onClose}
      accessibilityLabel="Close search"
    />
  </View>
);

export default SearchHeader;

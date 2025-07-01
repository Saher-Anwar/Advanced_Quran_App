import { Menu } from 'react-native-paper';
import { SortOption } from '../types/SortOption';

interface SortMenuItem {
  readonly key: SortOption;
  readonly title: string;
}

const SORT_OPTIONS: readonly SortMenuItem[] = [
  { key: 'number', title: 'Sort by Number' },
  { key: 'name', title: 'Sort by Name' },
  { key: 'verses', title: 'Sort by Verses' },
] as const;

const SortMenu: React.FC<{
  readonly visible: boolean;
  readonly sortBy: SortOption;
  readonly onDismiss: () => void;
  readonly onSort: (sortType: SortOption) => void;
  readonly anchor: React.ReactNode;
}> = ({ visible, sortBy, onDismiss, onSort, anchor }) => (
  <Menu visible={visible} onDismiss={onDismiss} anchor={anchor}>
    {SORT_OPTIONS.map((option) => (
      <Menu.Item
        key={option.key}
        onPress={() => onSort(option.key)}
        title={option.title}
        leadingIcon={sortBy === option.key ? 'check' : undefined}
      />
    ))}
  </Menu>
);

export default SortMenu;

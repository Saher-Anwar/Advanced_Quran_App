import { useSort } from 'hooks/useSort';
import React, { useState, useCallback } from 'react';
import { View, FlatList, ListRenderItem, SafeAreaView, StatusBar } from 'react-native';
import { Appbar, Text, Menu, Searchbar } from 'react-native-paper';
import { useSearch } from '../hooks/useSearch';
import SurahCard, { Surah, SurahListProps } from 'components/SurahCard';
import SearchHeader from 'components/SearchHeader';

type SortOption = 'number' | 'name' | 'verses';

interface SortMenuItem {
  readonly key: SortOption;
  readonly title: string;
}

// Constants
const SORT_OPTIONS: readonly SortMenuItem[] = [
  { key: 'number', title: 'Sort by Number' },
  { key: 'name', title: 'Sort by Name' },
  { key: 'verses', title: 'Sort by Verses' },
] as const;

// Sample data - replace with your actual data source
const SAMPLE_SURAHS: readonly Surah[] = [
  { id: 1, number: 1, name: 'Al-Fatiha', nameArabic: 'الفاتحة', verses: 7 },
  { id: 2, number: 2, name: 'Al-Baqarah', nameArabic: 'البقرة', verses: 286 },
  { id: 3, number: 3, name: 'Ali Imran', nameArabic: 'آل عمران', verses: 200 },
  { id: 4, number: 4, name: 'An-Nisa', nameArabic: 'النساء', verses: 176 },
  { id: 5, number: 5, name: 'Al-Maidah', nameArabic: 'المائدة', verses: 120 },
  { id: 6, number: 6, name: 'Al-Anam', nameArabic: 'الأنعام', verses: 165 },
  { id: 7, number: 7, name: 'Al-Araf', nameArabic: 'الأعراف', verses: 206 },
  { id: 8, number: 8, name: 'Al-Anfal', nameArabic: 'الأنفال', verses: 75 },
  { id: 9, number: 9, name: 'At-Tawbah', nameArabic: 'التوبة', verses: 129 },
  { id: 10, number: 10, name: 'Yunus', nameArabic: 'يونس', verses: 109 },
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

const SearchResultsInfo: React.FC<{
  readonly searchQuery: string;
  readonly resultCount: number;
}> = ({ searchQuery, resultCount }) => {
  if (!searchQuery.trim()) return null;

  return (
    <View className="border-b border-gray-200 bg-white px-4 py-2">
      <Text variant="bodySmall" className="text-gray-600">
        Found {resultCount} surah{resultCount !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
      </Text>
    </View>
  );
};

// Main Component
const SurahList: React.FC<SurahListProps> = ({ surahs = SAMPLE_SURAHS, onSurahPress }) => {
  const [sortMenuVisible, setSortMenuVisible] = useState<boolean>(false);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const { searchQuery, setSearchQuery, filteredItems } = useSearch(surahs);
  const { sortBy, setSortBy, sortedItems } = useSort(filteredItems);

  const handleSort = useCallback(
    (sortType: SortOption) => {
      setSortBy(sortType);
      setSortMenuVisible(false);
    },
    [setSortBy]
  );

  const handleSearchClose = useCallback(() => {
    setSearchVisible(false);
    setSearchQuery('');
  }, [setSearchQuery]);

  const handleSearchToggle = useCallback(() => {
    setSearchVisible(true);
  }, []);

  const keyExtractor = useCallback((item: Surah) => item.id.toString(), []);

  const renderSurahItem: ListRenderItem<Surah> = useCallback(
    ({ item }) => <SurahCard surah={item} onPress={onSurahPress} />,
    [onSurahPress]
  );

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="#16a34a" barStyle="light-content" />
      <View className="flex-1 bg-gray-800">
        {/* Top Bar */}
        <Appbar.Header style={{ backgroundColor: '#1f2937' }}>
          {searchVisible ? (
            <SearchHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClose={handleSearchClose}
            />
          ) : (
            <>
              <Appbar.Content
                title="Quran Surahs"
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
              />
              <Appbar.Action
                icon="magnify"
                iconColor="white"
                onPress={handleSearchToggle}
                accessibilityLabel="Search surahs"
              />
              <SortMenu
                visible={sortMenuVisible}
                sortBy={sortBy}
                onDismiss={() => setSortMenuVisible(false)}
                onSort={handleSort}
                anchor={
                  <Appbar.Action
                    icon="sort"
                    iconColor="white"
                    onPress={() => setSortMenuVisible(true)}
                    accessibilityLabel="Sort surahs"
                  />
                }
              />
            </>
          )}
        </Appbar.Header>

        {/* Search Results Info */}
        <SearchResultsInfo searchQuery={searchQuery} resultCount={sortedItems.length} />

        {/* Surah List */}
        <FlatList
          data={sortedItems}
          keyExtractor={keyExtractor}
          renderItem={renderSurahItem}
          contentContainerStyle={{ paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </View>
    </SafeAreaView>
  );
};

export default SurahList;
export type { Surah, SurahListProps, SortOption };

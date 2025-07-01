import { useSort } from 'hooks/useSort';
import React, { useState, useCallback } from 'react';
import { View, FlatList, ListRenderItem, SafeAreaView, StatusBar } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { useSearch } from '../hooks/useSearch';
import SurahCard from 'components/SurahCard';
import { Surah } from 'types/Surah';
import SearchHeader from 'components/SearchHeader';
import SortMenu from 'components/SortMenu';
import { SortOption } from 'types/SortOption';
import { SAMPLE_SURAHS } from 'mock_data/list_item_data';

export interface SurahListProps {
  readonly surahs?: readonly Surah[];
}

const SearchResultsInfo: React.FC<{
  readonly searchQuery: string;
  readonly resultCount: number;
}> = ({ searchQuery, resultCount }) => {
  if (!searchQuery.trim()) return null;

  return (
    <View className="border-b border-gray-200 bg-white px-4 py-2">
      <Text variant="bodySmall" className="text-white/80">
        Found {resultCount} surah{resultCount !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
      </Text>
    </View>
  );
};

const ChapterListScreen = ({ surahs = SAMPLE_SURAHS }: SurahListProps) => {
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
    ({ item }) => <SurahCard surah={item} />,
    []
  );

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View className="flex-1">
        {/* Top Bar */}
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>
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

export default ChapterListScreen;
export type { Surah, SortOption };

import { useState, useMemo } from 'react';
import { Surah } from 'types/Chapter';

/**
 * Used to search for a specific Surah in list of surahs
 * @param items List of Surahs
 * @returns The search query; callback for setting search query; list of filtered Surahs
 */
export const useSearch = (items: readonly Surah[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;

    const query = searchQuery.toLowerCase().trim();
    return items.filter(
      (surah) => surah.name.toLowerCase().includes(query) || surah.number.toString().includes(query)
    );
  }, [items, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
  };
};

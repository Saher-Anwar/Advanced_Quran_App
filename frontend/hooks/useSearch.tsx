import { useState, useMemo } from 'react';
import { Surah } from 'types/Chapter';

// Custom hooks
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

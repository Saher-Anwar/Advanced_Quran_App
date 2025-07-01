import { useState, useMemo } from 'react';
import { SortOption } from 'types/SortOption';
import { Surah } from 'types/Chapter';

export const useSort = <T>(items: readonly T[]) => {
  const [sortBy, setSortBy] = useState<SortOption>('number');

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const surahA = a as Surah;
      const surahB = b as Surah;

      switch (sortBy) {
        case 'name':
          return surahA.name.localeCompare(surahB.name);
        case 'verses':
          return surahB.verses - surahA.verses;
        case 'number':
        default:
          return surahA.number - surahB.number;
      }
    });
  }, [items, sortBy]);

  return {
    sortBy,
    setSortBy,
    sortedItems,
  };
};

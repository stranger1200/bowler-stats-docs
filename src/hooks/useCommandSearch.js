import { useCallback, useMemo, useState } from 'react';
import { filterAndSortCommands, groupByCategory } from '../utils/commandsSearch.js';

/** Controlled search hook: filters commands by query and groups them by category or a single "Results" group. */
export function useCommandSearch(commands) {
  const [query, setQuery] = useState('');

  const trimmedQuery = query.trim();

  const filtered = useMemo(() => {
    if (!trimmedQuery) return commands;
    return filterAndSortCommands(commands, query);
  }, [commands, query, trimmedQuery]);

  const grouped = useMemo(() => {
    if (filtered.length === 0) return null;
    const isFilteredView = filtered.length !== commands.length || Boolean(trimmedQuery);
    return isFilteredView ? { Results: filtered } : groupByCategory(filtered);
  }, [commands.length, filtered, trimmedQuery]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  const searchInputProps = useMemo(
    () => ({
      value: query,
      onChange: (e) => setQuery(e.target.value),
      onKeyDown: (e) => {
        if (e.key === 'Escape') {
          clearSearch();
          e.currentTarget.blur();
        }
      },
    }),
    [query, clearSearch]
  );

  return {
    query,
    setQuery,
    clearSearch,
    grouped,
    searchInputProps,
    hasMatches: grouped != null,
  };
}

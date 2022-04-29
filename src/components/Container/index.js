import { useState, useCallback } from "react";
import { useSearch, useDebounce } from "../../hooks";

const Container = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = useCallback((e) => setSearchValue(e.target.value), []);

  const { articles } = useSearch(useDebounce(searchValue))

  return children({ searchValue, onSearchChange, articles });
};

export default Container;

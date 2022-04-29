import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import "./styles.scss";

import { useSearch, useDebounce } from "../../hooks";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import ListItem from '../../components/ListItem/index';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const navigate = useNavigate();

  const { articles, isLoading, status } = useSearch(useDebounce(query));

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="search-page-container">
      <header>
        <img src="./moogle.png" alt="logo" onClick={() => navigate("/")} />
        <Container>
          {({ searchValue, onSearchChange, articles }) => (
            <Autocomplete
              articles={articles}
              searchValue={searchValue}
              onSearchChange={onSearchChange}
            />
          )}
        </Container>
      </header>

      {!articles?.length && status === "SUCCESS" ? (
        <h3>No articles for query: {query}</h3>
      ) : (
        articles?.map(({ id, label }) => (
          <ListItem key={id} label={label} id={id} />
        ))
      )}
    </div>
  );
};

export default Search;

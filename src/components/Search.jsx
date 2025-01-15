import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Wrapper from "../styles/Search";
import { SearchIcon } from "./Icons";

function Search() {
  function handleSubmit(event) {}

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search"
          autoComplete="off"
        />
        <button aria-label="Search" type="submit">
          <SearchIcon />
        </button>
      </form>
    </Wrapper>
  );
}

export default Search;

import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Wrapper from "../styles/Search";
import { SearchIcon } from "./Icons";

function Search() {
  const match = useMatch("/results/:searchQuery");
  const navigate = useNavigate();
  const searchInputRef = React.useRef();
  // This gets the value of the searchQuery stored in the match variable and places it in the input inside the search input field
  React.useEffect(() => {
    if (match?.params) {
      searchInputRef.current.value = match.params.searchQuery;
    }
  }, [match]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = String(formData.get("search"));

    if (!searchQuery.trim()) return;
    navigate(`/results/${searchQuery}`);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search"
          autoComplete="off"
          ref={searchInputRef}
        />
        <button aria-label="Search" type="submit">
          <SearchIcon />
        </button>
      </form>
    </Wrapper>
  );
}

export default Search;

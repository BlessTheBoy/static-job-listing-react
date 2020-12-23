import React from "react";
import { useStateValue } from "./StateProvider";
import "./scss/Search.scss";
import SearchTag from "./SearchTag";

function Search() {
  const [{ tags }, dispatch] = useStateValue();
  const clearTags = () => {
    dispatch({
      type: "CLEAR_TAGS",
    });
  };
  return (
    <div className="search" id="search">
      <div className="tag-container" id="tag-container">
        {tags?.map((tag) => (
          <SearchTag key={tag} tag={tag} />
        ))}
      </div>
      <p className="clear-search" onClick={clearTags}>
        Clear
      </p>
    </div>
  );
}

export default Search;

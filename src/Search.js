import React from "react";

function Search() {
  return (
    <div className="search" id="search">
      <div className="tag-container" id="tag-container"></div>
      <p class="clear-search" onclick="clearTags()">
        Clear
      </p>
    </div>
  );
}

export default Search;

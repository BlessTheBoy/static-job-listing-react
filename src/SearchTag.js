import React from "react";
import "./scss/SearchTag.scss";
import { useStateValue } from "./StateProvider";

function SearchTag({ tag }) {
  const [{}, dispatch] = useStateValue();
  const removeTag = (tag) => {
    dispatch({
      type: "REMOVE_TAG",
      tag: tag,
    });
  };
  return (
    <div className="search-tag animate__animated animate__rubberBand">
      <p>{tag}</p>
      <img
        src={"images/icon-remove.svg"}
        alt=""
        onClick={() => removeTag(tag)}
      />
    </div>
  );
}

export default SearchTag;

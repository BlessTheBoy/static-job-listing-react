import React from "react";
import { useStateValue } from "./StateProvider";
import "./scss/JobTag.scss";

function JobTag({ tag }) {
  const [{}, dispatch] = useStateValue();

  const addTag = (tagName) => {
    dispatch({
      type: "ADD_TAG",
      tag: tagName,
    });
  };

  return (
    <p className="job-tag" onClick={() => addTag(tag)}>
      {tag}
    </p>
  );
}

export default JobTag;
